<?php

use Illuminate\Database\Seeder;

class AccountNatureSeeder extends Seeder
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
                'key' => ACCOUNT_NATURE,
                'name' => [
                    'ar' => ACCOUNT_NATURE,
                    'en' => ACCOUNT_NATURE
                ],
                'value' => [],
            ]
        );
        $data = $this->getSeededData($parent_id->id);
        foreach ($data as $accountNature) {
            \App\Constant::create($accountNature);
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
                'key' => ACCOUNT_NATURE,
                'name' => [
                    'ar' => 'مدين',
                    'en' => 'Debit'
                ],
                'value' => DEBIT,
                'parent_id' => $parent_id
            ],
            [
                'user_id' => 0,
                'key' => ACCOUNT_NATURE,
                'name' => [
                    'ar' => 'دائن',
                    'en' => 'Credit'
                ],
                'value' => CREDIT,
                'parent_id' => $parent_id
            ]
        ];
    }
}
