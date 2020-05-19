<?php

use Illuminate\Database\Seeder;

class PaymentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $constant = \App\Constant::create([
            'key' => 'PAYMENT_PROCESS_TYPE',
            'name' => [
                'en' => trans('Payment::lang.process_type', [], 'en'),
                'ar' => trans('Payment::lang.process_type', [], 'ar')
            ],
            'value' => [
                'type' => 'PAYMENT_PROCESS_TYPE',
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
                'key' => 'PAYMENT_PROCESS_TYPE',
                'name' => [
                    'en' => trans('Payment::lang.new_account', [], 'en'),
                    'ar' => trans('Payment::lang.new_account', [], 'ar')
                ],
                'value' => [
                    'type' => 'NEW_ACCOUNT',
                    'component' => 'new-account'
                ],
            ],
            [
                'key' => 'PAYMENT_PROCESS_TYPE',
                'name' => [
                    'en' => trans('Payment::lang.conversion', [], 'en'),
                    'ar' => trans('Payment::lang.conversion', [], 'ar')
                ],
                'value' => [
                    'type' => 'CONVERSION',
                    'component' => 'payment-conversion'
                ],
            ],
            [
                'key' => 'PAYMENT_PROCESS_TYPE',
                'name' => [
                    'en' => trans('Payment::lang.renewal', [], 'en'),
                    'ar' => trans('Payment::lang.renewal', [], 'ar')
                ],
                'value' => [
                    'type' => 'RENEWAL',
                    'component' => 'payment-renewal'
                ],
            ],
            [
                'key' => 'PAYMENT_PROCESS_TYPE',
                'name' => [
                    'en' => trans('Payment::lang.upgrade', [], 'en'),
                    'ar' => trans('Payment::lang.upgrade', [], 'ar')
                ],
                'value' => [
                    'type' => 'UPGRADE',
                    'component' => 'payment-upgrade'
                ],
            ],


        ];
    }
}
