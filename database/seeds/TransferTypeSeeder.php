<?php

use Illuminate\Database\Seeder;

class TransferTypeSeeder extends Seeder
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
                'key' => 'TRANSFER_TYPE',
                'name' => [
                    'ar' => trans('lang.transfer_type', [], 'ar'),
                    'en' => trans('lang.transfer_type', [], 'en')
                ],
                'value' => [
                ],
            ]
        );
        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => 'TRANSFER_TYPE',
                'name' => [
                    'ar' => trans('lang.bank', [], 'ar'),
                    'en' => trans('lang.bank', [], 'en')
                ],
                'value' => [
                    'value' => TRANSFER_BANK_TYPE
                ],
                'parent_id' => $parent->id
            ]
        );
        \App\Constant::create(
            [
                'user_id' => 0,
                'key' => 'TRANSFER_TYPE',
                'name' => [
                    'ar' => trans('lang.save', [], 'ar'),
                    'en' => trans('lang.save', [], 'en')
                ],
                'value' => [
                    'value' => TRANSFER_SAVE_TYPE
                ],
                'parent_id' => $parent->id
            ]
        );
    }
}
