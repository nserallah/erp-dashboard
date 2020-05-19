<?php

use Illuminate\Database\Seeder;

class ProductServiceConstantsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $parent_constant = \App\Constant::create([
            'key' => 'INTERVAL_TYPE',
            'name' => [
                'en' => 'Interval Type',
                'ar' => 'مدة الإشتراك'
            ],
            'value' => [
                'months' => 0
            ],

        ]);
        \App\Constant::create([
            'key' => 'INTERVAL_TYPE',
            'name' => [
                'en' => 'Month',
                'ar' => 'شهر'
            ],
            'value' => [
                'months' => 1
            ],
            'parent_id' => $parent_constant->id
        ]);
        \App\Constant::create([
            'key' => 'INTERVAL_TYPE',
            'name' => [
                'en' => '3 Months',
                'ar' => '3 أشهر'
            ],
            'value' => [
                'months' => 3
            ],
            'parent_id' => $parent_constant->id
        ]);
        \App\Constant::create([
            'key' => 'INTERVAL_TYPE',
            'name' => [
                'en' => '6 Months',
                'ar' => '6 أشهر'
            ],
            'value' => [
                'months' => 6
            ],
            'parent_id' => $parent_constant->id
        ]);
        \App\Constant::create([
            'key' => 'INTERVAL_TYPE',
            'name' => [
                'en' => '1 Year',
                'ar' => 'سنة'
            ],
            'value' => [
                'months' => 12
            ],
            'parent_id' => $parent_constant->id
        ]);

        \App\Constant::create([
            'key' => 'ACTIVITY_TYPE',
            'name' => [
                'en' => 'Product',
                'ar' => 'منتجات'
            ],
            'value' => [
                'en' => 'Product',
                'ar' => 'منتجات'
            ]
        ]);

        \App\Constant::create([
            'key' => 'ACTIVITY_TYPE',
            'name' => [
                'en' => 'Service',
                'ar' => 'خدمات'
            ],
            'value' => [
                'en' => 'Service',
                'ar' => 'خدمات'
            ]
        ]);


        \App\Constant::create([
            'key' => 'PRODUCT_TYPE',
            'name' => [
                'en' => 'Real',
                'ar' => 'حقيقي'
            ],
            'value' => [
                'en' => 'Real',
                'ar' => 'حقيقي'
            ],
            'parent_id' => \App\Constant::where('key', 'ACTIVITY_TYPE')->where('name', 'like', '%Product%')->first()->id
        ]);
        \App\Constant::create([
            'key' => 'PRODUCT_TYPE',
            'name' => [
                'en' => 'Service',
                'ar' => 'حقيقي'
            ],
            'value' => [
                'en' => 'Service',
                'ar' => 'حقيقي'
            ],
            'parent_id' => \App\Constant::where('key', 'ACTIVITY_TYPE')->where('name', 'like', '%Product%')->first()->id
        ]);
        \App\Constant::create([
            'key' => 'SERVICE_TYPE',
            'name' => [
                'en' => 'Online',
                'ar' => 'عبر الانترنت'
            ],
            'value' => [
                'en' => 'Online',
                'ar' => 'على الواقع'
            ],
            'parent_id' => \App\Constant::where('key', 'ACTIVITY_TYPE')->where('name', 'like', '%Service%')->first()->id
        ]);
        \App\Constant::create([
            'key' => 'SERVICE_TYPE',
            'name' => [
                'en' => 'Offline',
                'ar' => 'على الواقع'
            ],
            'value' => [
                'en' => 'Offline',
                'ar' => 'على الواقع'
            ],
            'parent_id' => \App\Constant::where('key', 'ACTIVITY_TYPE')->where('name', 'like', '%Service%')->first()->id

        ]);


        \App\Constant::create([
            'key' => 'ACTIVITY',
            'name' => [
                'en' => 'Fashion',
                'ar' => 'ملابس'
            ],
            'value' => [
                'en' => 'Fashion',
                'ar' => 'ملابس'
            ],
            'parent_id' => \App\Constant::where('key', 'ACTIVITY_TYPE')->where('name', 'like', '%Product%')->first()->id
        ]);
        \App\Constant::create([
            'key' => 'ACTIVITY',
            'name' => [
                'en' => 'Maintaining',
                'ar' => 'صيانة'
            ],
            'value' => [
                'en' => 'Maintaining',
                'ar' => 'صيانة'
            ],
            'parent_id' => \App\Constant::where('key', 'ACTIVITY_TYPE')->where('name', 'like', '%Product%')->first()->id

        ]);
        \App\Constant::create([
            'key' => 'ACTIVITY',
            'name' => [
                'en' => 'Cooking',
                'ar' => 'طبخ'
            ],
            'value' => [
                'en' => 'Cooking',
                'ar' => 'طبخ'
            ],
            'parent_id' => \App\Constant::where('key', 'ACTIVITY_TYPE')->where('name', 'like', '%Product%')->first()->id

        ]);
        \App\Constant::create([
            'key' => 'ACTIVITY',
            'name' => [
                'en' => 'Create hash',
                'ar' => 'تشفير'
            ],
            'value' => [
                'en' => 'Create Md5',
                'ar' => 'تشفير'
            ],
            'parent_id' => \App\Constant::where('key', 'ACTIVITY_TYPE')->where('name', 'like', '%Service%')->first()->id

        ]);

        \App\Constant::create([
            'key' => 'ACTIVITY',
            'name' => [
                'en' => 'Send SMS',
                'ar' => 'ارسال صور'
            ],
            'value' => [
                'en' => 'Twillow',
                'ar' => 'تيلو'
            ],
            'parent_id' => \App\Constant::where('key', 'ACTIVITY_TYPE')->where('name', 'like', '%Service%')->first()->id

        ]);
    }
}
