<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(\App\Constant::class, function (Faker $faker) {
    return [
        'key' => 'plan_level',
    ];
});
