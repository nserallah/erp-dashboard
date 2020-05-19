<?php

Route::group(['namespace' => 'Core\Settings\Controllers'], function () {
    Route::group(['middleware' => [\Core\Settings\Middleware\Admin_SuperAuthMiddleware::class]], function () {
        Route::resource('constants', 'ConstantsController');
        Route::match(['put', 'patch'], 'constants/{id}/active', ['as' => 'constant.active.change', 'uses' => 'ConstantsController@changeActiveStatus']);
    });
    Route::get('constants/search', ['as' => 'constants.search', 'uses' => 'ConstantsController@search']);
});

Route::group(['namespace' => 'Core\Settings\Controllers',
    'middleware' => [\Core\Settings\Middleware\Admin_SuperAuthMiddleware::class],
    'prefix' => 'company',
    'as' => 'company.'], function () {
    crud_routes('category', \Core\Settings\Controllers\CategoriesController::class);
    crud_routes('tax', \Core\Settings\Controllers\TaxesController::class);
    crud_routes('brand', \Core\Settings\Controllers\BrandController::class);
    crud_routes('unit', \Core\Settings\Controllers\UnitController::class);
    crud_routes('group', \Core\Settings\Controllers\GroupController::class);
    crud_routes('address', \Core\Settings\Controllers\AddressController::class);
    crud_routes('address-general', \Core\Settings\Controllers\GeneralAddressController::class);
    Route::get('address/users/{type}', ['uses' => 'AddressController@getUsersByType']);
});

Route::group(['namespace' => 'Core\Settings\Controllers',
    'middleware' => [\Core\Settings\Middleware\Admin_SuperAuthMiddleware::class],
    'prefix' => 'settings',
    'as' => 'settings.'], function () {
    Route::group(['prefix' => 'language', 'as' => 'language.'], function () {
        Route::get('fetch', ['as' => 'fetch', 'uses' => 'LanguagesController@fetch']);
    });

    Route::group(['prefix' => 'currencies', 'as' => 'currencies.'], function () {
        Route::get('fetch', ['as' => 'fetch', 'uses' => 'CurrenciesController@fetch']);
    });

    Route::group(['prefix' => 'countries', 'as' => 'countries.'], function () {
        Route::post('store', ['as' => 'store', 'uses' => 'CountriesController@store']);
        Route::group(['prefix' => '{country}'], function () {
            Route::get('find', ['as' => 'find', 'uses' => 'CountriesController@find']);
            Route::put('update', ['as' => 'update', 'uses' => 'CountriesController@update']);
            Route::patch('active', ['as' => 'update', 'uses' => 'CountriesController@activate']);
            Route::delete('delete', ['as' => 'delete', 'uses' => 'CountriesController@delete']);
        });
        Route::get('fetch', ['as' => 'fetch', 'uses' => 'CountriesController@fetch']);
        Route::get('/', ['as' => 'fetch', 'uses' => 'CountriesController@index']);
        Route::get('/{id}/cities', ['as' => 'fetch', 'uses' => 'CountriesController@cities']);
    });


    Route::group(['prefix' => 'cities', 'as' => 'cities.'], function () {
        Route::post('store', ['as' => 'store', 'uses' => 'CitiesController@store']);
        Route::group(['prefix' => '{country}'], function () {
            Route::get('find', ['as' => 'find', 'uses' => 'CitiesController@find']);
            Route::put('update', ['as' => 'update', 'uses' => 'CitiesController@update']);
            Route::patch('active', ['as' => 'update', 'uses' => 'CitiesController@activate']);
            Route::delete('delete', ['as' => 'delete', 'uses' => 'CitiesController@delete']);
        });
        Route::get('fetch', ['as' => 'fetch', 'uses' => 'CitiesController@fetch']);
        Route::get('/', ['as' => 'all', 'uses' => 'CitiesController@index']);
    });
});