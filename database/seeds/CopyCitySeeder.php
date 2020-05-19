<?php

use Illuminate\Database\Seeder;

class CopyCitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $city = new \App\City();
        $city->setConnection(DEFAULT_CONNECTION);
        $city->get()->each(function ($item) {
            $temp = $item->toArray();
            unset($temp['localeName']);
            \App\City::create($temp);
        });
    }
}
