<?php


namespace Core\Account\Controllers;


use Core\Account\Requests\PaymentRequest;
use Illuminate\Routing\Controller as BaseController;

class PaymentController extends BaseController
{


    public function store(PaymentRequest $request)
    {
        dd($request);
    }

}