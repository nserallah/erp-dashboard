<?php

use Illuminate\Database\Seeder;

class CopyCountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $country = new \App\Country();
        $country->setConnection(DEFAULT_CONNECTION);
        $country->get()->each(function ($item) {
            $temp = $item->toArray();
            unset($temp['localeName']);
            \App\Country::create($temp);
        });
    }
}
