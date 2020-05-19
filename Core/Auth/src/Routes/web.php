<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'Core\Auth\Controllers'], function () {
    Route::resource('auth', 'AuthController');
    Route::any('company/{all?}', 'CompanyAuthController@showCompanyLoginForm')->where('all', '^(?!api).*$');
});

