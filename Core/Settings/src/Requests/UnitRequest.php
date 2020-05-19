<?php

namespace Core\Settings\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UnitRequest extends FormRequest
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
            'abbreviation' => 'required',
            'parent.id' => 'sometimes',
            'sub_value_total' => 'required',
        ];
    }


}
