<?php
Route::group(['namespace' => 'Core\Auth\Controllers'], function () {


    Route::get('testing/{company}', ['as' => 'testing', 'uses' => 'CompanyAuthController@testing']);


    Route::post('/super/login', ['as' => 'super-admin.login', 'uses' => 'SuperAdminController@login']);
    Route::post('/login', ['as' => 'company-admin.login', 'uses' => 'CompanyAuthController@login']);
    Route::get('/super/refresh', ['as' => 'super-admin.refresh', 'uses' => 'SuperAdminController@refresh']);
    Route::group(['prefix' => 'super', 'middleware' => 'auth:api'], function () {
        Route::get('/logout', ['as' => 'super-admin.logout', 'uses' => 'SuperAdminController@logout']);
        Route::get('backup/{company}', ['as' => 'backup', 'uses' => 'SuperAdminController@backup']);
        Route::get('database/check/{company}', ['as' => 'backup', 'uses' => 'SuperAdminController@checkDatabase']);

    });
    Route::group(['middleware' => ['auth:' . ADMIN_GUARD, \App\Http\Middleware\DatabaseMiddleware::class]], function () {
        Route::get('logout', ['as' => 'company-admin-user.logout', 'uses' => 'CompanyAuthController@logout']);
        Route::get('refresh', ['as' => 'company-admin-user.refresh', 'uses' => 'CompanyAuthController@refresh']);
    });
});