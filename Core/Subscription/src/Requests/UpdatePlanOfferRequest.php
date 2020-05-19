<?php

namespace Core\Subscription\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePlanOfferRequest extends FormRequest
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
            $rules['title.' . $locale] = 'required_without_all:' . attributesByLocale('title', $locale) . ',' . null;
        }
        $rules = array_merge($rules, [
            'starts_at' => 'required|before:ends_at',
            'ends_at' => 'required|after:starts_at',
            'discount_percentage_per_year' => 'required|numeric',
            'discount_percentage_per_month' => 'required|numeric',
        ]);
        return $rules;
    }
}
