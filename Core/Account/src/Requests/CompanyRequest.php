<?php

namespace Core\Account\Requests;

use Illuminate\Foundation\Http\FormRequest;
use \Illuminate\Support\Facades\Auth;

class CompanyRequest extends FormRequest
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
            'mobile' => 'numeric',
            'name.*' => 'required',
            'business_name' => 'required',
            'brief_name' => 'required|unique:companies',
            'activity_type_id' => 'required|numeric|exists:constants,id',
            'product_type_id' => 'required|numeric|exists:constants,id',
            'activity_id' => 'required|numeric|exists:constants,id',
//            'plan_id' => 'required|numeric|exists:plans,id'//  remove the comment after turning it to production @author Amr
        ];
    }


    public function messages()
    {
        return [
            'name.*.required' => trans('validation.required', ['attribute' => 'name'])
        ];
    }

}
