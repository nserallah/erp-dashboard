<?php

namespace Core\Account\Rules;

use App\Company;
use Core\Account\Models\Account;
use Core\Account\Models\TempAccount;
use Illuminate\Contracts\Validation\Rule;

class CompanyRule implements Rule
{

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {

        $classPath = TempAccount::class;
        if (!request()->has('payment') || (request()->input('payment')['payment_method']['value'] == 'Paypal' && request()->input('braintree')['status'] == 'success')) {
            $classPath = Account::class;
        }
        return $classPath::where('company_id', $value)->count() == 0;

    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return trans("validation.unique");
    }
}