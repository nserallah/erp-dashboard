<?php


namespace Core\Account\Controllers;


use App\Company;
use App\Exceptions\InvalidAccessCodeException;
use Core\Account\Events\VerificationCode;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class AccessCodeController extends BaseController
{
    /**
     * validate the access_code
     * user has passed
     *
     * @param Request $request
     * @return mixed
     * @author Amr
     */
    function check(Request $request, $model = null)
    {
        try {
            if ($model == 'company') {
                $model = Company::where('remember_token', $request->input('token'))->first();
            }
            $result = \App\AccessCode::checkAccessCode($request->input('access_code'), $model);
            $result->delete();
            return response()->api(SUCCESS_STATUS, trans('Account::lang.valid_access_code'), ['model_id' => $model->id]);
        } catch (InvalidAccessCodeException $invalidAccessCodeException) {
            return response()->api(ERROR_RESPONSE, $invalidAccessCodeException->getMessage(), [], $invalidAccessCodeException->getCode());
        }
    }


    /**
     * generate new access_code to the company
     *
     * @param Request $request
     * @return mixed
     */
    static function store(Request $request)
    {
        $request->validate(['company_token' => 'required|exists:companies,remember_token']);
        $company = Company::where('remember_token', $request->input('company_token'))->first();
        event(new VerificationCode($company));
        $rememberToken = Company::findOrFail($company->id);
        return response()->api(SUCCESS_STATUS, trans('Account::lang.code_generated'), ['registration_token' => $rememberToken->remember_token]);
    }

}