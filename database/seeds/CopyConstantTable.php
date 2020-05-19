<?php

use Illuminate\Database\Seeder;

class CopyConstantTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $constant = new \App\Constant();
        $constant->setConnection(DEFAULT_CONNECTION);
        $constant->get()->each(function ($item) {
            $temp = $item->toArray();
            unset($temp['locale_name']);
            unset($temp['children']);
            \App\Constant::create($temp);
        });
    }
}
