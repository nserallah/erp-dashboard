<?php

namespace Core\Settings\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaxesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth(ADMIN_GUARD)->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name.*' => 'required',
            'type.id' => 'required',
            'value_type.id' => 'required',
            'value' => 'required',
            'apply_start_date' => 'required',
        ];
    }


}
