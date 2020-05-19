<?php

use Illuminate\Database\Seeder;

class PlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        factory(\App\Plan::class, 3)->create();

        \App\Plan::create(
            [
                'user_id' => 1,
                'level_id' => 1,
                'title' => [
                    'en' => "Free plan",
                    'ar' => "خطة مجانية"
                ],
                'currency_id' => \App\Currency::inRandomOrder()->first()->id,
                'branch_no' => '2',
                'inventory_no' => '2',
                'pos_no' => '2',
                'emp_no' => '2',
                'item_no' => '2',
                'max_trail_no' => '2',
                'is_trial' => 1,
                'interval_trail' => 11,
                'is_active' => 1
            ]
        );
        \App\Plan::create(
            [
                'user_id' => 1,
                'level_id' => 1,
                'title' => [
                    'en' => "Basic plan",
                    'ar' => "خطة اساسية"
                ],
                'currency_id' => \App\Currency::inRandomOrder()->first()->id,
                'branch_no' => 100,
                'inventory_no' => 100,
                'pos_no' => 100,
                'emp_no' => 100,
                'item_no' => 100,
                'max_trail_no' => 100,
                'is_trial' => 0,
                'interval_trail' => 0,
                'is_active' => 1
            ]
        );

        \App\Plan::create(
            [
                'user_id' => 1,
                'level_id' => 1,
                'title' => [
                    'en' => "Standard plan",
                    'ar' => "خطة متقدمة"
                ],
                'currency_id' => \App\Currency::inRandomOrder()->first()->id,
                'branch_no' => 1000,
                'inventory_no' => 1000,
                'pos_no' => 1000,
                'emp_no' => 1000,
                'item_no' => 1000,
                'max_trail_no' => 1000,
                'is_trial' => 0,
                'interval_trail' => 0,
                'is_active' => 1
            ]
        );

    }
}
