<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * @return void
     */
    public function run(): void
    {
        $this->call([
            ServerSeeder::class,
            UserSeeder::class,
            MenuSeeder::class,
            NewsSeeder::class
        ]);
    }
}
