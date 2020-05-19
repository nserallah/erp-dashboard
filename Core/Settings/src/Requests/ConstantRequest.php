<?php

namespace Core\Settings\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ConstantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
//        return auth('api')->check();
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
//            'parent_id.id' => 'sometimes|exists:constants,id,deleted_at,NULL',
            'key' => 'required',
            'name.*' => 'required',
            'value.*' => 'required'
        ];
    }

    /**
     * invalid messages
     *
     * @return array
     * @author Amr
     */
    public function messages()
    {
        return [
            'parent_id.exists' => trans('validation.custom.exists'),
            'key.required' => trans('validation.custom.required'),
            'name.*.required' => trans('validation.custom.required'),
            'value.*.required' => trans('validation.custom.required'),

        ];
    }
}
