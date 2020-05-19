<?php

use Illuminate\Database\Seeder;

class CompanyConstantsSeeder extends Seeder
{


    /**
     * constantsFileName which is saved in database file
     *
     * @author Amr
     * @var string
     */
//    private $file_name = 'basic.json';
    private $seeds_path = 'config' . DIRECTORY_SEPARATOR . 'company-constants' . DIRECTORY_SEPARATOR;


    /**
     * Run the database seeds.
     *
     * @return void
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function run()
    {
        $constantFiles = $this->getDirectoryContent(database_path($this->seeds_path));
        if (count($constantFiles) > 0) {
            foreach ($constantFiles as $file) {
                $constants = (array)json_decode($this->loadFile($file));
                if (isset($constants) && count($constants) > 0) {
                    foreach ($constants as $constant) {
                        $this->save($constant);
                    }
                }
            }
        }
//        dd($constantFiles);
//        $constants = (array)json_decode($constants);
//        $this->fill($constants);
    }

    private function save($constant)
    {
        return \App\Constant::create([
            'parent_id' => $constant->parent_id,
            'key' => $constant->key,
            'name' => (array)json_decode($constant->name),
            'value' => (array)json_decode($constant->value),
            'is_active' => $constant->is_active,
        ]);
    }

    /**
     * @param $path
     * @return array
     */
    public function getDirectoryContent($path)
    {
        return array_diff(scandir($path), ['.', '..']);
    }


    /**
     * load the content of file after reading it
     * and converting the content from json
     * to Array
     *
     * @param $fileName
     * @return string
     * @author Amr
     */
    public function loadFile($fileName)
    {
        return file_get_contents(database_path($this->seeds_path . DIRECTORY_SEPARATOR . $fileName));
    }


    /**
     * fill database with currencies
     *
     * @param array $constants
     * @author Amr
     */
    public function fill(array $constants)
    {
        foreach ($constants as $index => $constant) {
            dd((array)json_decode($constant->name));
            $newConstant = \App\Constant::create([
                'parent_id' => $constant->parent_id,
                'key' => $constant->key,
                'name' => $constant->name,
                'value' => (array)json_decode($constant->value),
                'is_active' => $constant->is_active,
            ]);
            $this->setTranslations($newConstant, $constant, 'name');
//            $this->setTranslations($constant1, $constant, 'value');
//            $this->setTranslations($constant1, $constant, 'value');
        }
    }

    /**
     * @param $model
     * @param $jsonConstant
     * @param string $attribute
     */
    public function setTranslations($model, $jsonConstant, $attribute = 'name')
    {
        $tmp = json_decode($jsonConstant->$attribute);
        $model->setTranslations($attribute, ['ar' => @$tmp->ar, 'en' => @$tmp->en]);
        $model->save();
    }


    /**
     * Run the database seeds.
     *
     * @return void
     */
    /**
     * Run the database seeds.
     *
     * @return void
     */
//    public function run()
//    {


//
//        try {
//            $size = \App\Constant::create([
//                'key' => 'BRANCH_SIZE',
//                'name' => [
//                    'en' => 'Branch Size',
//                    'ar' => 'حجم الفرع'
//                ],
//                'value' => [
//                    'en' => '',
//                    'ar' => '',
//                ],
//
//            ]);
//            $size->children()->create([
//                'key' => 'BRANCH_SIZE',
//                'name' => [
//                    'en' => 'Large',
//                    'ar' => 'كبير'
//                ],
//                'value' => [
//                    'en' => 'Large',
//                    'ar' => 'كبير'
//                ],
//            ]);
//            $size->children()->create([
//                'key' => 'BRANCH_SIZE',
//                'name' => [
//                    'en' => 'Mid',
//                    'ar' => 'متوسط'
//                ],
//                'value' => [
//                    'en' => 'Mid',
//                    'ar' => 'متوسط'
//                ],
//            ]);
//            $size->children()->create([
//                'key' => 'BRANCH_SIZE',
//                'name' => [
//                    'en' => 'Small',
//                    'ar' => 'صغير'
//                ],
//                'value' => [
//                    'en' => 'Small',
//                    'ar' => 'صغير'
//                ],
//            ]);
//            /////
//
//            $type = \App\Constant::create([
//                'key' => 'BRANCH_TYPE',
//                'name' => [
//                    'en' => 'Branch Type',
//                    'ar' => 'نوع الفرع'
//                ],
//                'value' => [
//                    'en' => 'Branch Type',
//                    'ar' => 'نوع الفرع'
//                ],
//
//            ]);
//            $type->children()->create([
//                'key' => 'BRANCH_TYPE',
//                'name' => [
//                    'en' => 'Type 1',
//                    'ar' => ' نوع 1'
//                ],
//                'value' => [
//                    'en' => 'Type 1',
//                    'ar' => ' نوع 1'
//                ],
//            ]);
//            $type->children()->create([
//                'key' => 'BRANCH_TYPE',
//                'name' => [
//                    'en' => 'Type 2',
//                    'ar' => ' نوع 2'
//                ],
//                'value' => [
//                    'en' => 'Type 2',
//                    'ar' => ' نوع 2'
//                ],
//            ]);
//            $type->children()->create([
//                'key' => 'BRANCH_TYPE',
//                'name' => [
//                    'en' => 'Type 3',
//                    'ar' => ' نوع 3'
//                ],
//                'value' => [
//                    'en' => 'Type 3',
//                    'ar' => ' نوع 3'
//                ],
//            ]);
//        } catch (Exception $exception) {
//            dd($exception);
//        }
//
//        //////
//
//        $size = \App\Constant::create([
//            'key' => 'CONTENT_TYPE',
//            'name' => [
//                'en' => 'Content Type',
//                'ar' => 'نوع المحتوى'
//            ],
//            'value' => [
//                'en' => 'Content Type',
//                'ar' => 'نوع المحتوى'
//            ],
//
//        ]);
//        $size->children()->create([
//            'key' => 'CONTENT_TYPE',
//            'name' => [
//                'en' => 'Content 1',
//                'ar' => 'محتوى 1'
//            ],
//            'value' => [
//                'en' => 'Content 1',
//                'ar' => 'محتوى 1'
//            ],
//        ]);
//        $size->children()->create([
//            'key' => 'CONTENT_TYPE',
//            'name' => [
//                'en' => 'Content 2',
//                'ar' => 'محتوى 2'
//            ],
//            'value' => [
//                'en' => 'Content 2',
//                'ar' => 'محتوى 2'
//            ],
//        ]);
//        $size->children()->create([
//            'key' => 'CONTENT_TYPE',
//            'name' => [
//                'en' => 'Content 3',
//                'ar' => 'محتوى 3'
//            ],
//            'value' => [
//                'en' => 'Content 3',
//                'ar' => 'محتوى 3'
//            ],
//        ]);
//
//        ///////
//
//        $days = \App\Constant::create([
//            'key' => 'DAYS',
//            'name' => [
//                'en' => 'Days',
//                'ar' => 'الأيام'
//            ],
//            'value' => [
//                'en' => 'Days',
//                'ar' => 'الأيام'
//            ],
//
//        ]);
//        $days->children()->create([
//            'key' => 'DAYS',
//            'name' => [
//                'en' => 'Sat',
//                'ar' => 'السبت'
//            ],
//            'value' => [
//                'en' => 'Sat',
//                'ar' => 'السبت'
//            ],
//        ]);
//        $days->children()->create([
//            'key' => 'DAYS',
//            'name' => [
//                'en' => 'Sun',
//                'ar' => 'الأحد'
//            ],
//            'value' => [
//                'en' => 'Sun',
//                'ar' => 'الأحد'
//            ],
//        ]);
//
//        $days->children()->create([
//            'key' => 'DAYS',
//            'name' => [
//                'en' => 'Mon',
//                'ar' => 'الإثنين'
//            ],
//            'value' => [
//                'en' => 'Mon',
//                'ar' => 'الإثنين'
//            ],
//        ]);
//        $days->children()->create([
//            'key' => 'DAYS',
//            'name' => [
//                'en' => 'Tue',
//                'ar' => 'الثلاثاء'
//            ],
//            'value' => [
//                'en' => 'Tue',
//                'ar' => 'الثلاثاء'
//            ],
//        ]);
//
//        $days->children()->create([
//            'key' => 'DAYS',
//            'name' => [
//                'en' => 'Wed',
//                'ar' => 'الأربعاء'
//            ],
//            'value' => [
//                'en' => 'Wed',
//                'ar' => 'الأربعاء'
//            ],
//        ]);
//
//        $days->children()->create([
//            'key' => 'DAYS',
//            'name' => [
//                'en' => 'Thu',
//                'ar' => 'الخميس'
//            ],
//            'value' => [
//                'en' => 'Thu',
//                'ar' => 'الخميس'
//            ],
//        ]);
//
//        $days->children()->create([
//            'key' => 'DAYS',
//            'name' => [
//                'en' => 'Fri',
//                'ar' => 'الجمعة'
//            ],
//            'value' => [
//                'en' => 'Fri',
//                'ar' => 'الجمعة'
//            ],
//        ]);
//
//        ///
//
//        $size = \App\Constant::create([
//            'key' => 'INVENTORY_SIZE',
//            'name' => [
//                'en' => 'Inventory Size',
//                'ar' => 'حجم المخزن'
//            ],
//            'value' => [
//                'en' => 'Inventory Size',
//                'ar' => 'حجم المخزن'
//            ],
//
//        ]);
//        $size->children()->create([
//            'key' => 'INVENTORY_SIZE',
//            'name' => [
//                'en' => 'Large',
//                'ar' => 'كبير'
//            ],
//            'value' => [
//                'en' => 'Large',
//                'ar' => 'كبير'
//            ],
//        ]);
//        $size->children()->create([
//            'key' => 'INVENTORY_SIZE',
//            'name' => [
//                'en' => 'Mid',
//                'ar' => 'متوسط'
//            ],
//            'value' => [
//                'en' => 'Mid',
//                'ar' => 'متوسط'
//            ],
//        ]);
//        $size->children()->create([
//            'key' => 'INVENTORY_SIZE',
//            'name' => [
//                'en' => 'Small',
//                'ar' => 'صغير'
//            ],
//            'value' => [
//                'en' => 'Small',
//                'ar' => 'صغير'
//            ],
//        ]);
//    }


}
