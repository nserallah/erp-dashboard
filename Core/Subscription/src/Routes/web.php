<?php
Route::group(['namespace' => 'Core\Subscription\Controllers'],function(){
    Route::resource('subscription', 'SubscriptionController');
});