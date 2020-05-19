<?php


namespace Core\Settings\Controllers;


use App\Currency;
use Core\Settings\Collections\CurrencyResource;
use Illuminate\Routing\Controller as BaseController;

class CurrenciesController extends BaseController
{


    /**
     * @return mixed
     */
    public function fetch()
    {
        $currencies = Currency::active()->get();
        return response()->api(SUCCESS_RESPONSE, '', CurrencyResource::collection($currencies), SUCCESS_STATUS);
    }
}