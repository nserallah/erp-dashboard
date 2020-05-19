<?php
Route::group(['prefix' => '/subscription', 'as' => 'subscription.', 'namespace' => 'Core\Subscription\Controllers'], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::group(['prefix' => '/plan', 'as' => 'plan.'], function () {
            Route::post('/store', ['as' => 'store', 'uses' => 'PlanController@store']);
            Route::group(['prefix' => '/offer', 'as' => 'offer.'], function () {
                Route::post('/store', ['as' => 'store', 'uses' => 'OfferController@store']);
                Route::get('/fetch', ['as' => 'fetch', 'uses' => 'OfferController@fetchOffers']);
                Route::get('/{id}/find', ['as' => 'find', 'uses' => 'OfferController@find']);
                Route::put('/{id}/update', ['as' => 'update', 'uses' => 'OfferController@update']);

            });
            Route::group(['prefix' => '/{id}'], function () {
                Route::get('/fetch', ['as' => 'fetch', 'uses' => 'PlanController@fetchPlanById']);
                Route::put('/update', ['as' => 'update', 'uses' => 'PlanController@update']);
                Route::patch('/active', ['as' => 'activate', 'uses' => 'PlanController@activate']);
                Route::group(['prefix' => '/offer', 'as' => 'offer.'], function () {
                    Route::group(['prefix' => '/{offer}'], function () {
                        Route::patch('/active', ['as' => 'activate', 'uses' => 'OfferController@activate']);
                    });
                });
            });
            Route::get('/fetch', ['as' => 'fetch', 'uses' => 'PlanController@fetch']);
        });
    });
});