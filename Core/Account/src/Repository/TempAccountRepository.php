<?php

namespace Core\Account\Repository;



use Core\Account\Events\SendEmailEvent;
use Core\Account\Events\SendSmsEvent;
use Core\Account\Interfaces\AccountInterface;
use Core\Account\Interfaces\TempAccountInterface;
use Core\Account\Models\Resources\TempAccountResource;
use Core\Account\Models\TempAccount;
use Illuminate\Http\Request;


class TempAccountRepository implements TempAccountInterface
{
    private $tempAccount;

    public function __construct(TempAccount $tempAccount)
    {
        $this->tempAccount = $tempAccount;
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
        return TempAccountResource::collection($this->tempAccount->orderBy('created_at', 'desc')->get($cols));
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
        return $this->tempAccount->findOrFail($id);
    }

    /**
     * get all resources
     *
     * @return mixed
     * @author Amr
     */
    public function all()
    {
        $tempAccount = $this->tempAccount->with(['company'])->orderBy('created_at', 'desc')->paginate(10);
        return load_resource_pagination(TempAccountResource::class, $tempAccount);
    }


    /**
     * get temp account by company's id
     *
     * @param $companyId
     * @return mixed
     * @author Amr
     */
    public function getByCompanyId($companyId)
    {
        return $this->tempAccount->where('company_id')->first();
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
        return $this->find($id)->delete();
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
        // TODO: Implement store() method.
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
     * this function is used to send email or sms,
     * according the type user sends
     *
     * @param $id
     * @param $type
     * @return mixed
     * @author Amr
     */
    public function send($id, $type)
    {
        $type = strtolower(trim($type));
        $content = \request()->input('content');
        $tempAccount = $this->find($id);
        if (!in_array($type, $this->typesOfService())) {
            throw new \Exception(trim('Account::lang.invalid_service_type'));
        }
        $type = ucfirst($type);
        $eventClass = "Core\Account\Events\Send{$type}Event";
        event(new $eventClass($tempAccount, $content));
        return true;
    }

    /**
     * this function contains the type of services
     * user uses in send method
     *
     * @return array
     * @author Amr
     */
    private function typesOfService()
    {
        return ['sms', 'email'];
    }
}