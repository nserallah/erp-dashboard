<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Route::post('login', 'AuthEndpoint@login');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/upload/file','FileController@upload');

Route::get('subscription/plan/get', ['as' => 'subscription.plan.get', 'uses' => '\Core\Subscription\Controllers\PlanController@fetchActivePlans']);


