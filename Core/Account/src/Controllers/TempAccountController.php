<?php

namespace Core\Account\Controllers;

use App\Exceptions\DatabaseCreationException;
use Core\Account\Interfaces\AccountInterface;
use Core\Account\Interfaces\TempAccountInterface;
use Core\Account\Requests\AccountRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class TempAccountController extends BaseController
{

    /**
     * @author Amr
     * @var TempAccountInterface
     * model's repository
     */
    private $tempRepository;

    /**
     * TempAccountController constructor.
     *
     * @param TempAccountInterface $tempRepository
     * @author Amr
     */
    public function __construct(TempAccountInterface $tempRepository)
    {
        $this->tempRepository = $tempRepository;
    }

    /**
     * show all resources
     *
     * @return mixed
     * @author Amr
     */
    function index()
    {
        $tempAccounts = $this->tempRepository->all();
        return response()->api(SUCCESS_RESPONSE, trans('Account::lang.temp_account_fetched_successfully'), $tempAccounts);
    }

    /**
     * send email or sms according to
     * user's choice
     *
     * @param $id
     * @param $type
     * @return mixed
     * @author Amr
     */
    function send($id, $type)
    {
        $result = $this->tempRepository->send($id, $type);
        return response()->api(SUCCESS_RESPONSE, trans('Account::lang.sms_and_email_send', ['attribute' => trans('lang.' . $type)]), $result);
    }
}
