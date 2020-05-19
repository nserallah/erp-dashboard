<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Plan::class, function (Faker $faker) {
    $monthPrice = getPrice($faker);
    $yearPrice = $monthPrice == 0 ? $faker->numberBetween(1, 1000) : 0;
    $is_trial = $faker->randomElement([0, 1]);

    return [
        'user_id' => 1,
        'level_id' => 1,
        'title' => [
            'en' => $faker->title,
            'ar' => $faker->title
        ],
//        'price_month' => $monthPrice,
//        'price_year' => $yearPrice,
        'currency_id' => \App\Currency::inRandomOrder()->first(),
        'branch_no' => $faker->numberBetween(1, 1000),
        'inventory_no' => $faker->numberBetween(1, 1000),
        'pos_no' => $faker->numberBetween(1, 1000),
        'emp_no' => $faker->numberBetween(1, 1000),
        'item_no' => $faker->numberBetween(1, 1000),
        'max_trail_no' => $faker->numberBetween(1, 1000),
        'is_trial' => $is_trial,
        'interval_trail' => $is_trial == 0 ? 0 : $faker->numberBetween(1, 1000),
        'is_active' => 1
    ];;
});

function getPrice(Faker $generator)
{
    $data = [$generator->numberBetween(1, 1000), 0];
    return $data[array_rand($data)];
}
