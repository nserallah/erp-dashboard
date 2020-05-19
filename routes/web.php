<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


use App\SMS;
use Illuminate\Support\Facades\Route;

Route::get('sms', function () {
    $sms = new SMS();
    dd($sms->send("00999999735541", "Your access code is "));
});

Route::get('test', function (\App\Database\DatabaseManager $databaseManager) {
    request()->headers->add(['company'=>'demo_new_test_1']);
    database_connection();
//    $databaseManager->seed();
    $databaseManager->migrate();


//    request()->headers->add(['company'=>'exception1']);
//    database_connection();
//    $databaseManager->migrate();
//    $databaseManager->seed();

//    dd($databaseManager->getMigrations(\App\Plan::query()->latest()->first()));
//    $plan = \App\Plan::query()->latest()->with('modules.migrations')->find(10);
//    $plan = \App\Plan::query()->latest()->find(10);
//    dd($plan->migrations);
//    $conn = \Illuminate\Support\Facades\DB::getDefaultConnection();
//    $conn1 = new \App\Database\DatabaseManager('unified');
//    dd($conn1);
//    $db_manager = create_database('wessam', []);
//    dd($db_manager);
});


Route::group(['prefix' => 'image', 'as' => 'image.'], function () {
    Route::get('{image}', ['as' => 'fetch', 'uses' => 'ImageController@getDefaultImage']);
    Route::get('/{size}/{id}', ['as' => 'resize', 'uses' => 'ImageController@getImageResize']);
});


Route::group(['prefix' => 'file', 'as' => 'file.'], function () {
    Route::get('{file}', ['as' => 'get', 'uses' => 'FileController@find']);
});


Route::get('storage/{all}', 'ImageController@getStorageImage')->where('all', '^(?!api).*$');

Route::any('{all}', function () {
    return view('router');
})->where('all', '^(?!api).*$');


Route::get('/home', 'HomeController@index')->name('home');

