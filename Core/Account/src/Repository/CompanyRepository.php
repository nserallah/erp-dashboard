<?php

namespace Core\Account\Repository;


use App\AccessCode;
use App\Company;
use App\Plan;
use Carbon\Carbon;
use Core\Account\Collections\CompanyInfoResource;
use Core\Account\Events\VerificationCode;
use Core\Account\Interfaces\CompanyInterface;
use Illuminate\Http\Request;

class CompanyRepository implements CompanyInterface
{

    private $company;

    public function __construct()
    {
        $this->company = new Company();
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
        return $this->company->orderBy('created_at', 'desc')->get($cols);
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
        return $this->company->findOrFail($id);
    }

    /**
     * get all resources
     *
     * @return mixed
     * @author Amr
     */
    public function all()
    {
        return $this->company->orderBy('created_at', 'desc')->get();
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
        $data = $request->all();
        if (!$request->has('plan_id')) {
            $plan = Plan::where('is_trial', '1')->latest()->id;
        } else {
            $plan = Plan::findOrFail($request->input('plan_id'));
        }
        $data['is_active'] = $plan->is_trial ? ACTIVE : INACTIVE;
        return $this->company->create($data);
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
     * check if company token is valid
     * means that the request was authorized
     *
     * @param Request $request
     * @return bool
     * @author Amr
     */
    public function checkToken(Request $request)
    {
        try {
            $request->validate(['company_token' => 'required|exists:companies,remember_token']);
            return true;
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * check mobile number
     * if mobile was registered, update the code
     *
     * @param Request $request
     * @return bool
     * @author Amr
     */
    function checkMobile(Request $request)
    {
        try {
            $request->validate(['mobile' => 'required|numeric|exists:companies,mobile']);
            $mobile = $request->only('mobile');
            $company = Company::where($mobile)->first();
            $accessCode = AccessCode::generate();
            $code = [
                'code' => $accessCode,
                'expires' => Carbon::now()->addDays(ACCESS_CODE_DURATION),
                'type' => ACTIVATION_CODE,
            ];
            $company->accessCode()->create($code);
            $company->remember_token = md5(uniqid());
            $company->update();
            event(new VerificationCode($company));
            return $company;
        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function paginate(Request $request)
    {
        $request->request->set('per_page', isset($request->per_page) ? $request->per_page : 10);
        $items = $this->company->orderBy('created_at', 'DESC')->paginate($request->per_page);
        $collection = CompanyInfoResource::collection($items->getCollection());
        $items->setCollection($collection->collection);
        return $items;
    }


}