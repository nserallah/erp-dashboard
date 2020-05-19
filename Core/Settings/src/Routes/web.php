<?php
Route::group(['namespace' => 'Core\Settings\Controllers'],function(){
    Route::resource('settings', 'SettingsController');
});