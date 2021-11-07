<?php

namespace Database\Seeders;

use App\Abstractions\Database\Seeders\BaseSeeder;

class DatabaseSeeder extends BaseSeeder
{
    /**
     * @return void
     */
    public function run(): void
    {
        $this->call([
            ServerSeeder::class,
            RbacSeeder::class,
            UserSeeder::class,
            MenuSeeder::class,
            NewsSeeder::class
        ]);
    }
}
