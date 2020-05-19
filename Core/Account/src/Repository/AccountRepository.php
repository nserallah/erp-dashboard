<?php


namespace Core\Account\Repository;


use App\Company;
use App\Database\DatabaseManager;
use App\Exceptions\DatabaseConnectionException;
use App\Jobs\SetupAccountConfiguration;
use Carbon\Carbon;
use Core\Account\Interfaces\AccountInterface;
use Core\Account\Models\Account;
use Core\Account\Models\TempAccount;
use Core\Payment\Models\BrainTree;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AccountRepository implements AccountInterface
{

    private $account;

    private $databaseManager;

    public function __construct(Account $account, DatabaseManager $databaseManager)
    {
        $this->account = $account;
        $this->databaseManager = $databaseManager;
    }

    /**
     * get specific resources' columns
     *
     * @param array $cols
     * @return mixed
     * @author Amr
     */
    public function get($cols = ['*'])
    {
        return $this->account->orderBy('created_at', 'desc')->get($cols);
    }

    /**
     * get single resource according to
     * the given id
     *
     * @param $id
     * @return mixed
     * @author Amr
     */
    public function find($id)
    {
        return $this->account->findOrFail($id);
    }

    /**
     * get all resources
     *
     * @return mixed
     * @author Amr
     */
    public function all()
    {
        return $this->account->all();
    }

    /**
     * delete resource according
     * to the given id
     *
     * @param $id
     * @return mixed
     *
     * @author Amr
     */
    public function delete($id)
    {
        // TODO: Implement delete() method.
    }

    /**
     * create new resource
     *
     * @param Request $request
     * @return mixed
     *
     * @author Amr
     */
    public function store(Request $request)
    {
//        dd($request->all());
        /*
         * get company's id from the request
         */
        $companyId = $request->input('company_id');
        /*
         * get company model
         */
        $company = companies()->find($companyId);
        /*
         * get company's plan
         */
        $plan = $company->plan;
//        dd($plan);
        /**
         * create new account
         */
        $braintree = $request->input('braintree');
        $payment = $request->input('payment');
        $accountData = $request->input('account');
        $accountData['company_id'] = $companyId;
//        dd($payment ,$payment['payment_method']['name']['en']);
        /**
         * @toDo testing deployment
         */
//        dd($plan ,$company);
        if ($plan->is_trial == NOT_TRIAL || $plan->is_trial == IS_TRIAL || ($payment && $payment['payment_method']['name'] == 'Paypal')) {
            $account = Account::create($accountData);
            $data = create_database($company->brief_name, ['email' => $accountData['email'], 'password' => bcrypt($accountData['password'])]);
            $account->fill($data);
            $account->update();
            return ['account' => $account, 'message' => trans('Account::lang.account_saved_successfully')];
        }
//        dd($payment);
//        if ($payment && $payment['payment_method']['name'] == 'Paypal') {
//            $account = Account::create($accountData);
//            $data = create_database($company->brief_name, ['email' => $accountData['email'], 'password' => bcrypt($accountData['password'])]);
//            DB::setDefaultConnection('mysql');
//            $account->fill($data);
//            $account->update();
//            $paymentData = $braintree;
//            $paymentData = array_merge($paymentData, $braintree['details']);
//            $paymentData = array_merge($paymentData, $braintree['binData']);
//            unset($paymentData['details'], $paymentData['binData']);
//            $paymentData['status'] = SUCCESS;
//            $brainTree = BrainTree::create($paymentData);
//            $brainTree->transaction()->create(['account_id' => $account['id'], 'amount' => $payment['price'], 'status' => SUCCESS]);
//            return ['account' => $account, 'message' => trans('Account::lang.account_saved_successfully')];
//        }
        if ($payment && ($payment['payment_method']['value'] != 'Paypal' || ($payment['payment_method']['value'] == 'Paypal' && $braintree['status'] == 'error'))) {
            $account['last_payment'] = Carbon::now()->toDateString();
            $account['company_id'] = $companyId;
            $account['email'] = $accountData['email'];
            $account['password'] = bcrypt($accountData['password']);
            $company->is_active = INACTIVE;
            $company->update();
            try {
                $account = TempAccount::create($account);
            } catch (\Exception $exception) {
                throw  new \Exception('Account existed, please call admin for more information');
            }
            if (($payment['payment_method']['value'] == 'Paypal' && $braintree['status'] == 'error')) {
                $braintree['status'] = ERROR;
                $brainTree = BrainTree::create($braintree);
                $brainTree->transaction()->create(['account_id' => $account['id'], 'amount' => $payment['price'], 'status' => ERROR]);
            }
            return ['account' => $account, 'message' => trans('Account::lang.account_data_saved_check_account')];
        }

    }


    public function newStore(Request $request)
    {

        /*
         * get company's id from the request
         */
        $companyId = @$request->input('company')['id'];
        /*
         */

        $company = companies()->find($companyId);
        /*
         * get company's plan         * get company model

         */
        if (isset($company->tempAccount)) {
            $accountData = $company->tempAccount->toArray();
            $account = Account::create($accountData);
            SetupAccountConfiguration::dispatch($company);
//            $data = new_create_database($company->brief_name, ['email' => $accountData['email'], 'password' => bcrypt($accountData['password'])], $plan);
//            DB::setDefaultConnection('mysql');
//            $account->fill($data);
//            $account->update();
            $company->tempAccount->delete();
            return $account;
        }
        return null;
    }


    public function conversion(Request $request)
    {
        /*
              * get company's id from the request
              */
        $companyId = @$request->input('company')['id'];
        /*
         * get company model
         */

        $company = companies()->find($companyId);
        /*
         * get company's plan
         */
        if (isset($company->account)) {
            $plan = $company->plan;
            $accountData = $company->account->toArray();
            $account = $company->account;
            $this->databaseManager->setConnection($account->db_connection);
            if (!$this->databaseManager->isConnected())
                throw new DatabaseConnectionException(__('lang.db_connection_exception'), DATABASE_CONNECTION_ERROR);

            $this->databaseManager->newMigrate($plan);
//            $data = new_create_database($company->brief_name, ['email' => $accountData['email'], 'password' => bcrypt($accountData['password'])], $plan);
            DB::setDefaultConnection('mysql');
            $account->update(['last_payment' => Carbon::now()]);
            if (isset($company->trial)) {
                $company->trial->update(['is_transferred' => 1]);
            }
            return $account;
        }
    }


    public function renew(Request $request)
    {
        /*
                   * get company's id from the request
                   */
        $companyId = @$request->input('company')['id'];
        /*
         * get company model
         */

        $company = companies()->find($companyId);
        /*
         * get company's plan
         */
        if (isset($company->account)) {

        }
    }

    /**
     * update resource
     *
     * @param Request $request
     * @param $id
     * @return mixed
     *
     * @author Amr
     */
    public function update(Request $request, $id)
    {
        // TODO: Implement update() method.
    }

    /**
     * returns the current account
     *
     * @return mixed
     * @throws \Exception
     * @author Amr
     */
    function current()
    {
        $companyBriefName = request()->header('company', null);
        if (!$companyBriefName)
            throw new Exception('Company is not supported');
        DB::setDefaultConnection('mysql');
        $company = Company::where('brief_name', 'like', '%' . $companyBriefName . '%')->first();
        if (!$company)
            throw new \Illuminate\Database\Eloquent\ModelNotFoundException();
        return $company;
//        return current_account();
    }
}
