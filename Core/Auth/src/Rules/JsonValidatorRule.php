<?php

namespace Core\Auth\Rules;


use Illuminate\Contracts\Validation\Rule;

class JsonValidatorRule implements Rule
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
//        $response = str_replace(chr(0), '', $value);
//        $contents = utf8_encode($response);
//        $results = json_decode($contents);


        $result = json_decode($value);
        dd($result);
//        return json_last_error();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
