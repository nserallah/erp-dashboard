<?php

use Illuminate\Database\Seeder;

class DiscountTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $parentId = \App\Constant::create(
            [
                'user_id' => 0,
                'key' => DISCOUNT_TYPE,
                'name' => [
                    'ar' => trans('lang.discount_type', [], 'ar'),
                    'en' => trans('lang.discount_type', [], 'en')
                ],

                'value' => [
                    'value' => DISCOUNT_TYPE
                ],
            ]
        );

        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => DISCOUNT_TYPE,
                'name' => [
                    'ar' => trans('lang.contractual_discounts', [], 'ar'),
                    'en' => trans('lang.contractual_discounts', [], 'en')
                ],

                'value' => [
                    'value' => CONTRACTUAL_DISCOUNT
                ],
                'parent_id' => $parentId->id
            ]
        );

        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => DISCOUNT_TYPE,
                'name' => [
                    'ar' => trans('lang.free_shipping', [], 'ar'),
                    'en' => trans('lang.free_shipping', [], 'en')
                ],

                'value' => [
                    'value' => FREE_SHIPPING
                ],
                'parent_id' => $parentId->id
            ]
        );
    }
}
