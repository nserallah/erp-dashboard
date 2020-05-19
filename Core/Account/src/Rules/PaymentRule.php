<?php

namespace Core\Account\Rules;

use App\Company;
use App\Plan;
use Core\Account\Models\Account;
use Illuminate\Contracts\Validation\Rule;

class PaymentRule implements Rule
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
        $planId = request()->input('plan_id');
        $plan = Plan::findOrFail($planId);
        return $plan->is_trial == NOT_TRIAL && $value != null;
    }

    /**
     * Get the validation error message.
     *
     * @return string|array
     */
    public function message()
    {
        return trans("validation.required", ['attribute', trans('Account::lang.payment')], '');
    }
}