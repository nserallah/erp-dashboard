<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\City::class, function (Faker $faker) {
    $name = $faker->city;
    return [
        'user_id' => 1,
        'country_id' => \App\Country::all()->shuffle()->first(),
        'name' => ['en' => $name, 'ar' => $name],
        'is_active' => 1,
    ];
});
