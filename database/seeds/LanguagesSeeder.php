<?php

use Illuminate\Database\Seeder;

class LanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $languages = $this->languages();                // get the list of supported languages @author Amr
        foreach ($languages as $language) {
            \App\Language::create([
                'name' => $language['name'],
                'locale' => $language['locale'],
                'is_default' => $language['is_default'],
                'is_rtl' => $language['is_rtl'],
                'icon' => $language['icon'],
                'is_active' => 1,
                'user_id' => 1
            ]);
        }
    }

    /**
     * System's default supported languages
     *
     * @return array
     * @author Amr
     */
    public function languages()
    {

        return [
            [
                "name" => [
                    'ar' => trans('lang.arabic', [], 'ar'),
                    'en' => trans('lang.arabic', [], 'en')
                ],
                'locale' => 'ar',
                'is_default' => 1,
                'is_rtl' => 1,
                'is_active' => 1,
                'icon'=> '/assets/media/flags/008-saudi-arabia.svg'
            ],
            [
                "name" => [
                    'ar' => trans('lang.english', [], 'ar'),
                    'en' => trans('lang.english', [], 'en')
                ],
                'locale' => 'en',
                'is_default' => 0,
                'is_rtl' => 0,
                'is_active' => 1,
                'icon'=> '/assets/media/flags/020-flag.svg'
            ]

        ];
    }
}
