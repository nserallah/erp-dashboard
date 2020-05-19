<?php


namespace Core\Settings\Controllers;


use App\Language;
use Core\Settings\Collections\LanguageResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class LanguagesController extends BaseController
{

    /**
     * @param Request $request
     * @return mixed
     */
    public function fetch(Request $request)
    {
        $languages = Language::filter($request)->active()->get();
        return response()->api(SUCCESS_RESPONSE, '', LanguageResource::collection($languages), SUCCESS_STATUS);
    }
}