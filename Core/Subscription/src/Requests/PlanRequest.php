<?php

namespace Core\Subscription\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlanRequest extends FormRequest
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
        $rules = [
            'modules' => 'present|array|min:1',
            'title.*' => 'required',
            'intervals' => 'present|array|min:1',
            'intervals.*.interval.id' => 'required|exists:constants,id',
            'intervals.*.price' => 'required',
            'currency_id' => 'required|exists:currencies,id',
            'level_id' => 'required|exists:constants,id',
            'branch_no' => 'required|numeric',
            'inventory_no' => 'required|numeric',
            'pos_no' => 'required|numeric',
            'emp_no' => 'required|numeric',
            'item_no' => 'required|numeric',
            'interval_trail' => 'required_if:is_trial,1|numeric',
            'max_trail_no' => 'required_if:is_trial,1|numeric',
        ];
        return $rules;
    }


}
