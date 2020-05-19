<?php

use Illuminate\Database\Seeder;

class CurrenciesSeeder extends Seeder
{
    /**
     * currencyFileName which is saved in storage file
     *
     * @author Amr
     * @var string
     */
    private $file_name = 'currencies.json';
    private $seeds_path = 'config';

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currencies = $this->loadFile();                 // get the content of $currencyFileName fields @author Amr
        $currencies = (array)json_decode($currencies);
        $this->fill($currencies);
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
        return file_get_contents(database_path($this->seeds_path . '/' . $this->file_name));
    }

    /**
     * fill database with currencies
     *
     * @param array $currencies
     * @author Amr
     */
    public function fill(array $currencies)
    {
        foreach ($currencies as $index => $currency) {
            \App\Currency::create([
                'name' => $this->getName($currency->name),
                'user_id' => 1,
                'is_active' => 1,
                'icon' => $currency->cc
            ]);
        }
    }

    /**
     * format the value of name
     * according to its type
     *
     * @param $currency
     * @author Amr
     * @return array
     */
    private function getName($country)
    {
        return [
            'en' => $country,
            'ar' => $country
        ];
    }
}
