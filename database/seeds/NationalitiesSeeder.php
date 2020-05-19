<?php

use Illuminate\Database\Seeder;
use \Illuminate\Support\Facades\Storage;

class NationalitiesSeeder extends Seeder
{
    /**
     * contain all nationalities
     *
     * @author Amr
     * @var string
     */
    private $nationalitiesFileName = 'nationalities.json';

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nationalities = $this->loadFile();                 // get the content of $nationalitiesFileName files
        $nationalities = (array)json_decode($nationalities);
        $this->fillNationalities($nationalities);
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
        return Storage::disk('storage')->get($this->nationalitiesFileName);
    }

    /**
     * this function is used to fill constant table
     * with all available nationalities
     *
     * @param array $nationalities
     * @author Amr
     */
    public function fillNationalities(array $nationalities)
    {
        foreach ($nationalities as $nationality) {
            $nationality = (array)$nationality;
            $values = [
                'en' => $nationality['nationality'],
                'ar' => $nationality['nationality']
            ];
            $values = json_encode($values);
            \App\Constant::create([
                'name' => NATIONALITY_CONSTANT,
                'value' => $values
            ]);
        }

    }

}
