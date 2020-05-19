<?php

use Illuminate\Database\Seeder;

class GenderConstantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Constant::create([
            'user_id' => 0,
            'key' => 'GENDER',
            'name' => ['ar' => 'ذكر', 'en' => 'Male'],
            'value' => ['ar' => 'ذكر', 'en' => 'Male'],
        ]);
        \App\Constant::create([
            'user_id' => 0,
            'key' => 'GENDER',
            'name' => ['ar' => 'أنثى', 'en' => 'Female'],
            'value' => ['ar' => 'أنثى', 'en' => 'Female'],
        ]);
    }
}
