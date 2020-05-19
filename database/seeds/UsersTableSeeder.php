<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(
            [
                'id' => 1,
                'name' => 'Admin',
                'email' => 'dev.mmarouf@hotmail.com',
                'password' => bcrypt('123123123'),
            ]
        );
    }
}
