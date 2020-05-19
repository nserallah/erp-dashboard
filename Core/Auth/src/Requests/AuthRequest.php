<?php

namespace Core\Auth\Requests;

use Core\Auth\Rules\JsonValidatorRule;
use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email',
            'password' => 'required',
            'navigator' => ['required']
        ];
    }

    public function messages()
    {
        return [
            'email.required' => trans('Auth::validation.attribute_required'),
            'email.email' => trans('Auth::validation.email_email'),
            'password.required' => trans('Auth::validation.attribute_required'),
            'navigator.required' => trans('Auth::validation.attribute_required'),
            'navigator.json' => trans('Auth::validation.navigator_json'),
        ];
    }
}
