<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Alam Baka',
            'identity_id' => '11223344',
            'gender' => '1',
            'address' => 'Gresik surabaya',
            //'photo' => 'default.png',
            'email' => 'alam.baka.99@yahoo.com',
            'password' => app('hash')->make('okeokeoke'),
            'phone_number' => '08222222222',
            'api_token' => Str::random(40),
            'role' => 0,
            'status' => 1
        ]);
    }
}
