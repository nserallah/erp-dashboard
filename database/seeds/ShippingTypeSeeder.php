<?php

use Illuminate\Database\Seeder;

class ShippingTypeSeeder extends Seeder
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
                'key' => SHIPPING_TYPE,
                'name' => [
                    'ar' => trans('lang.shipping_type', [], 'ar'),
                    'en' => trans('lang.shipping_type', [], 'en')
                ],
                'value' => [
                ],
            ]
        );
        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => SHIPPING_TYPE,
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
                'key' => SHIPPING_TYPE,
                'name' => [
                    'ar' => trans('lang.quick', [], 'ar'),
                    'en' => trans('lang.quick', [], 'en')
                ],
                'value' => [
                    'ar' => trans('lang.quick', [], 'ar'),
                    'en' => trans('lang.quick', [], 'en')
                ],
                'parent_id' => $parent->id
            ]
        );

        $parent = \App\Constant::create(
            [
                'user_id' => 0,
                'key' => SHIPPING_TARGET,
                'name' => [
                    'ar' => trans('lang.shipping_target', [], 'ar'),
                    'en' => trans('lang.shipping_target', [], 'en')
                ],
                'value' => [
                ],
            ]
        );

        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => SHIPPING_TARGET,
                'name' => [
                    'ar' => trans('lang.internal', [], 'ar'),
                    'en' => trans('lang.internal', [], 'en')
                ],
                'value' => [
                    'ar' => trans('lang.internal', [], 'ar'),
                    'en' => trans('lang.internal', [], 'en')
                ],
                'parent_id' => $parent->id
            ]
        );

        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => SHIPPING_TARGET,
                'name' => [
                    'ar' => trans('lang.external', [], 'ar'),
                    'en' => trans('lang.external', [], 'en')
                ],
                'value' => [
                    'ar' => trans('lang.external', [], 'ar'),
                    'en' => trans('lang.external', [], 'en')
                ],
                'parent_id' => $parent->id
            ]
        );


        $parent = \App\Constant::create(
            [
                'user_id' => 0,
                'key' => SHIPPING_WAY,
                'name' => [
                    'ar' => trans('lang.shipping_way', [], 'ar'),
                    'en' => trans('lang.shipping_way', [], 'en')
                ],
                'value' => [
                ],
            ]
        );

        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => SHIPPING_WAY,
                'name' => [
                    'ar' => trans('lang.road_freight', [], 'ar'),
                    'en' => trans('lang.road_freight', [], 'en')
                ],
                'value' => [
                    'ar' => trans('lang.road_freight', [], 'ar'),
                    'en' => trans('lang.road_freight', [], 'en')
                ],
                'parent_id' => $parent->id
            ]
        );

        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => SHIPPING_WAY,
                'name' => [
                    'ar' => trans('lang.sea_freight', [], 'ar'),
                    'en' => trans('lang.sea_freight', [], 'en')
                ],
                'value' => [
                    'ar' => trans('lang.sea_freight', [], 'ar'),
                    'en' => trans('lang.sea_freight', [], 'en')
                ],
                'parent_id' => $parent->id
            ]
        );
        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => SHIPPING_WAY,
                'name' => [
                    'ar' => trans('lang.air_freight', [], 'ar'),
                    'en' => trans('lang.air_freight', [], 'en')
                ],
                'value' => [
                    'ar' => trans('lang.air_freight', [], 'ar'),
                    'en' => trans('lang.air_freight', [], 'en')
                ],
                'parent_id' => $parent->id
            ]
        );


    }
}
