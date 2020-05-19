<?php

use Illuminate\Database\Seeder;

class CompanySizesSeeder extends Seeder
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
            'key' => 'COMPANY_SIZES',
            'name' => ['ar' => 'احجام الشركات', 'en' => 'Company sizes'],
            'value' => ['ar' => 'احجام الشركات', 'en' => 'Company sizes'],
        ]);

        \App\Constant::create([
            'user_id' => 0,
            'key' => 'COMPANY_SIZES',
            'name' => ['ar' => 'كبيرة', 'en' => 'Large'],
            'value' => ['ar' => 'كبيرة', 'en' => 'Large'],
            'parent_id' => $parent->id
        ]);

        \App\Constant::create([
            'user_id' => 0,
            'key' => 'COMPANY_SIZES',
            'name' => ['ar' => 'متوسطة', 'en' => 'Medium'],
            'value' => ['ar' => 'متوسطة', 'en' => 'Medium'],
            'parent_id' => $parent->id
        ]);

        \App\Constant::create([
            'user_id' => 0,
            'key' => 'COMPANY_SIZES',
            'name' => ['ar' => 'صغيرة', 'en' => 'Small'],
            'value' => ['ar' => 'صغيرة', 'en' => 'Small'],
            'parent_id' => $parent->id
        ]);
    }
}
