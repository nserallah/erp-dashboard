<?php

namespace Core\Account\Controllers;

use Core\Account\Interfaces\CompanyInterface;
use Core\Account\Requests\CompanyRequest;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class CompanyController extends BaseController
{
    private $companyRepository;

    public function __construct(CompanyInterface $companyRepository)
    {
        $this->companyRepository = $companyRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $companies = $this->companyRepository->paginate($request);
        return response()->api(SUCCESS_STATUS, trans('Account::lang.fetched_successfully'), $companies);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CompanyRequest $request)
    {

        $company = $this->companyRepository->store($request);
        return response()->api(SUCCESS_STATUS, trans('Account::lang.company.created_successfully'), $company);
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
        $company = $this->companyRepository->checkToken($request);
        if ($company)
            return response()->api(SUCCESS_STATUS, trans('Account::lang.valid_company_token'));
        return response()->api(ERROR_RESPONSE, trans('Account::lang.invalid_company_token'), [], INVALID_TOKEN);
    }

    /**
     * check mobile number
     * if existed, send new access code to
     * the user, otherwise complete registration
     *
     * @param Request $request
     * @return mixed
     * @author Amr
     */
    function checkMobile(Request $request)
    {
        $company = $this->companyRepository->checkMobile($request);
        if ($company)
            return response()->api(SUCCESS_STATUS, trans('Account::lang.code_generated_successfully'), $company);
        return response()->api(ERROR_RESPONSE, trans('Account::lang.mobile_is_not_registered'), [], MOBILE_IS_NOT_REGISTERED);
    }

    /**
     * this function returns the company
     * of the authenticated admin.
     *
     * @return mixed
     * @author Amr
     */
    public function company()
    {
        $currentAccount = account()->current();
        return response()->api(SUCCESS_STATUS, trans('Account::lang.company.fetched_successfully'), $currentAccount);

    }

    function show($id)
    {
        $company = $this->companyRepository->find($id);
        return response()->api(SUCCESS_STATUS, trans('Account::lang.fetched_successfully'), $company);
    }


}
