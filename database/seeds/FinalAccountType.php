<?php

use Illuminate\Database\Seeder;

class FinalAccountType extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $parent_id = \App\Constant::create(
            [
                'user_id' => 0,
                'key' => FINAL_ACCOUNT_TYPE,
                'name' => [
                    'ar' => FINAL_ACCOUNT_TYPE,
                    'en' => FINAL_ACCOUNT_TYPE
                ],
                'value' => [],
            ]
        );
        $data = $this->getSeededData($parent_id->id);
        foreach ($data as $finalAccountType) {
            \App\Constant::create($finalAccountType);
        }
    }

    /**
     * the seeded data
     *
     * @return array
     * @author Amr
     */
    private function getSeededData($parent_id)
    {
        return [
            [
                'user_id' => 0,
                'key' => FINAL_ACCOUNT_TYPE,
                'name' => [
                    'ar' => 'ميزانية',
                    'en' => 'Budget'
                ],
                'value' => BUDGET,
                'parent_id' => $parent_id
            ],
            [
                'user_id' => 0,
                'key' => FINAL_ACCOUNT_TYPE,
                'name' => [
                    'ar' => 'الأرباح والخسائر',
                    'en' => 'Profits and losses'
                ],
                'value' => PROFITS_AND_LOSSES,
                'parent_id' => $parent_id
            ],
            [
                'user_id' => 0,
                'key' => FINAL_ACCOUNT_TYPE,
                'name' => [
                    'ar' => 'متاجر',
                    'en' => 'Trading account'
                ],
                'value' => TRADING_ACCOUNT,
                'parent_id' => $parent_id
            ]
        ];

    }
}
