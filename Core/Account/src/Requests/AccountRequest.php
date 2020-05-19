<?php


namespace Core\Account\Requests;


use Core\Account\Rules\CompanyRule;
use Core\Account\Rules\PaymentRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class AccountRequest extends FormRequest
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
            'account' => 'required',
//            'plan_id' => 'required|exists:plans,id',
            'payment' => new PaymentRule(),
            'paypal' => 'required_if:payment.payment_method,==,paypal',
            'company_id' => ['required', new CompanyRule()],
//            "account" => 'required',
//            'account.password' => 'required|confirmed',
//            'account.password_confirmation' => 'required'
        ];
    }
}
