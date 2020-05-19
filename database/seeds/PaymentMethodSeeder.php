<?php

use Illuminate\Database\Seeder;

class PaymentMethodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $constant = \App\Constant::create([
            'key' => 'PAYMENT_METHOD',
            'name' => [
                'en' => trans('Settings::lang.constants.payment_method', [], 'en'),
                'ar' => trans('Settings::lang.constants.payment_method', [], 'ar')
            ],
            'value' => [
                'en' => trans('Settings::lang.constants.payment_method', [], 'en'),
                'ar' => trans('Settings::lang.constants.payment_method', [], 'ar'),
            ],

        ]);
        foreach ($this->children() as $child) {
            $constant->children()->create($child);
        }
    }

    /**
     * payment method's children
     *
     * @return array
     * @author Amr
     */
    private function children()
    {
        return [
            [
                'key' => 'PAYMENT_METHOD',
                'name' => [
                    'en' => trans('Settings::lang.constants.cash', [], 'en'),
                    'ar' => trans('Settings::lang.constants.cash', [], 'ar')
                ],
                'value' => [
                    'type' => 'CASH',
                    'component'=> 'cash-form'
                ],
//                    'parent_id' => \App\Constant::where(['key' => 'PAYMENT_METHOD', 'parent_id' => 0])->first()
            ],
            [
                'key' => 'PAYMENT_METHOD',
                'name' => [
                    'en' => trans('Settings::lang.constants.cards', [], 'en'),
                    'ar' => trans('Settings::lang.constants.cards', [], 'ar')
                ],
                'value' => [
                    'type' => 'CARD',
                    'component'=> 'card-form'
                ],
//                    'parent_id' => \App\Constant::where(['key' => 'PAYMENT_METHOD', 'parent_id' => 0])->first()
            ],
            [
                'key' => 'PAYMENT_METHOD',
                'name' => [
                    'en' => trans('Settings::lang.constants.paypal', [], 'en'),
                    'ar' => trans('Settings::lang.constants.paypal', [], 'ar')
                ],
                'value' => [
                    'type' => 'PAYPAL',
                    'component'=> 'paypal-form'
                ],
//                    'parent_id' => \App\Constant::where(['key' => 'PAYMENT_METHOD', 'parent_id' => 0])->first()
            ],
            [
                'key' => 'PAYMENT_METHOD',
                'name' => [
                    'en' => trans('Settings::lang.constants.bank_transfer', [], 'en'),
                    'ar' => trans('Settings::lang.constants.bank_transfer', [], 'ar')
                ],
                'value' => [
                    'type' => 'BANK_TRANSFER',
                    'component'=> 'bank-transfer-form'
                ],
//                    'parent_id' => \App\Constant::where(['key' => 'PAYMENT_METHOD', 'parent_id' => 0])->first()
            ],
            [
                'key' => 'PAYMENT_METHOD',
                'name' => [
                    'en' => trans('Settings::lang.constants.cheque', [], 'en'),
                    'ar' => trans('Settings::lang.constants.cheque', [], 'ar')
                ],
                'value' => [
                    'type' => 'CHEQUE',
                    'component'=> 'cheque-form'
                ],
//                    'parent_id' => \App\Constant::where(['key' => 'PAYMENT_METHOD', 'parent_id' => 0])->first()
            ]
        ];
    }
}
