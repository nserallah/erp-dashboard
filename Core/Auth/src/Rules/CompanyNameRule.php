<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class CompanyNameRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $companyName = request()->header('company');
        return is_database_existed($companyName);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return trans('Auth::validation.attribute_required');
    }
}
