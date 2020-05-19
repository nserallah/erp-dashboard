<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\Core\Auth\Models\SuperAdmin::class, function (Faker $faker) {
    return [
        'username' => "Super Admin",
        'email' => "unified.admin@gmail.com",
        'mobile' => 12345,
        'password' => bcrypt('123456'),
        'address' => 'US',
        'city_id' => \App\City::all()->first(),
        'nationality_id' => \App\Country::all()->first(),
        'is_active' => 1
    ];
});
