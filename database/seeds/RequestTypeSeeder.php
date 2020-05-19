<?php

use Illuminate\Database\Seeder;

class RequestTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $parent = \App\Constant::create(
            [
                'user_id' => 0,
                'key' => 'SALE_ORDER_TYPE',
                'name' => [
                    'ar' => trans('lang.sale_order_type', [], 'ar'),
                    'en' => trans('lang.sale_order_type', [], 'en')
                ],
                'value' => [
                ],
            ]
        );
        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => 'SALE_ORDER_TYPE',
                'name' => [
                    'ar' => trans('lang.normal', [], 'ar'),
                    'en' => trans('lang.normal', [], 'en')
                ],
                'value' => [
                    'ar' => trans('lang.normal', [], 'ar'),
                    'en' => trans('lang.normal', [], 'en')
                ],
                'parent_id' => $parent->id
            ]
        );
        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => 'SALE_ORDER_TYPE',
                'name' => [
                    'ar' => trans('lang.emergency', [], 'ar'),
                    'en' => trans('lang.emergency', [], 'en')
                ],
                'value' => [
                    'ar' => trans('lang.emergency', [], 'ar'),
                    'en' => trans('lang.emergency', [], 'en')
                ],
                'parent_id' => $parent->id
            ]
        );
    }
}
