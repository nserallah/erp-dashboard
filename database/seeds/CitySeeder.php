<?php

use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * $countriesFileName which lies in the storage
     * folder
     *
     * @author Amr
     * @var string
     */
    private $file_name = 'cities.json';

    private $seeds_path = 'config';

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $countries = $this->loadFile();
        $countries = (array)json_decode($countries);
        $this->fill($countries);
    }

    /**
     * load the content of file after reading it
     * and converting the content from json
     * to Array
     *
     * @return string
     * @author Amr
     */
    public function loadFile()
    {
        return file_get_contents(database_path($this->seeds_path . '/' . $this->file_name));
    }

    /**
     * @param array $items
     */
    public function fill(array $items)
    {
//        `user_id`, `country_id`, `name`, `is_active`,
        foreach ($items as $item) {
            \App\City::create([
                'name' => $this->getName($item),
                'country_id' => $item->country_id,
                'user_id' => 1,
            ]);
        }
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
