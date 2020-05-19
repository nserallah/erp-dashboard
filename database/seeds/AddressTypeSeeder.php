<?php

use Illuminate\Database\Seeder;

class AddressTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $parent = \App\Constant::create([
            'user_id' => 0,
            'key' => 'ADDRESS_TYPE',
            'name' => ['en' => trans('lang.custom', [], 'en'), 'ar' => trans('lang.custom', [], 'ar')],
            'value' => ['ar' => 'ذكر', 'en' => 'Male'],
        ]);
        \App\Constant::create([
            'user_id' => 0,
            'key' => 'ADDRESS_TYPE',
            'name' => ['en' => trans('lang.custom', [], 'en'), 'ar' => trans('lang.custom', [], 'ar')],
            'value' => ['hash' => 1, 'slug' => 'address'],
            'parent_id' => $parent->id
        ]);
        \App\Constant::create([
            'user_id' => 0,
            'key' => 'ADDRESS_TYPE',
            'name' => ['en' => trans('lang.general', [], 'en'), 'ar' => trans('lang.general', [], 'ar')],
            'value' => ['hash' => 2, 'slug' => 'general_address'],
            'parent_id' => $parent->id
        ]);
    }
}
