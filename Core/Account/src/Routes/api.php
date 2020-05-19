<?php

use App\Database\DatabaseManager;

Route::group(['namespace' => 'Core\Account\Controllers'], function () {
    Route::resource('companies', 'CompanyController');
    Route::resource('payments', 'PaymentController');
    Route::resource('accounts', 'AccountController');

    Route::post('companies/check-token', ['as' => 'company.check_token', 'uses' => 'CompanyController@checkToken']);
    Route::post('companies/check-mobile', ['as' => 'company.check_mobile', 'uses' => 'CompanyController@checkMobile']);
    Route::group(['prefix' => 'code'], function () {
        Route::post('check/{model}', 'AccessCodeController@check');
        Route::post('', 'AccessCodeController@store');
    });

//    Route::get('account/company', ['as' => 'account.company.show', 'uses' => 'CompanyController@company']);
//
    Route::group(['middleware' => 'auth:' . ADMIN_GUARD], function () {

        Route::get('account/company', ['as' => 'account.company.show', 'uses' => 'CompanyController@company']);


    });

    Route::group(['middleware' => 'auth:' . SUPER_ADMIN_GUARD], function () {
        Route::resource('temp-accounts', 'TempAccountController');
        Route::post('temp-accounts/{id}/{type}', 'TempAccountController@send');
    });

});
Route::get('db/migrate', function () {
//            dd(\Illuminate\Support\Facades\DB::getDefaultConnection());
    $databaseManager = App\Database\DatabaseManager::getInstance();
    $databaseManager->setDatabase(request()->header('company'));
    $databaseManager->seed();
});
