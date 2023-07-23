<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        \App\Models\Category::insert([
            ['name' => 'بلايز',],
            ['name' => 'بلاطين',],
            ['name' => 'قمصان',],
            ['name' => 'أطقم',],
            ['name' => 'فساتين',]
        ]);
        \App\Models\User::factory()->create([
            'name' => 'admin',
            'email' => 'test@example.com',
            'password' => Hash::make('qqq111'),
        ]);
        \App\Models\User::factory(10)->create();
        \App\Models\Product::factory(100)->create();
        \App\Models\Customer::factory(10)->create();

    }
}
