<?php

namespace Core\Subscription\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePlanRequest extends FormRequest
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
        $rules = [];
        foreach (locales() as $i => $locale) {
            $rules['title.' . $locale] = 'required_without_all:'.attributesByLocale('title',$locale).',' . null;
        }
        return $rules;
    }
}
