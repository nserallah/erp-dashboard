<?php

use Illuminate\Database\Seeder;

class CountriesSeeder extends Seeder
{
    /**
     * $countriesFileName which lies in the storage
     * folder
     *
     * @author Amr
     * @var string
     */
    private $countriesFileName = 'countries.json';

    private $seeds_path = 'config';

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $countries = $this->loadFile();                 // get the content of $nationalitiesFileName fields
        $countries = (array)json_decode($countries);
        $this->fill($countries);
    }

    /**
     * load the content of file after reading it
     * and converting the content from json
     * to Array
     *
     * @return string
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     * @author Amr
     */
    public function loadFile()
    {
        return file_get_contents(database_path($this->seeds_path . '/' . $this->countriesFileName));
    }

    /**
     * @param array $countries
     */
    public function fill(array $countries)
    {
        foreach ($countries as $country) {
            \App\Country::create([
                'name' => $this->getName($country),
                'nationality' => $this->getName($country),
                'language_id' => $country->language_id,
                'currency_id' => $country->currency_id,
                'is_active' => 1,
                'user_id' => 1,
                'mobile_prefix' => '00970',
                'postal_code' => '000',
            ]);
        }
    }

    /**
     * get country's currency
     *
     * @param array $country
     * @return mixed
     * @author Amr
     */
    private function getCurrency(array $country)
    {
        return \App\Currency::where('name->en', $country['code'])->first();
    }

    /**
     * format the name of country
     *
     * @param array $country
     * @author Amr
     * @return array
     */
    private function getName($country)
    {
        $name = @json_decode($country->name)->en;
        return [
            'en' => $name,
            'ar' => $name
        ];
    }
}
