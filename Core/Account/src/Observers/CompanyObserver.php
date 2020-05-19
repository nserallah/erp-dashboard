<?php

namespace Core\Account\Observers;

use App\AccessCode;
use App\Company;
use Carbon\Carbon;
use Core\Account\Events\VerificationCode;

class CompanyObserver
{
    /**
     * fire the function after preforming
     * company create operation
     *
     * @param Company $company
     * @author Amr
     */
    public function created(Company $company)
    {
        $company->accessCode()->delete();
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
    }
}
