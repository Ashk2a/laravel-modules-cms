<?php

namespace Database\Factories;

use App\Models\DbConnection;
use Illuminate\Database\Eloquent\Factories\Factory;

class DbConnectionFactory extends Factory
{
    /**
     * @var string
     */
    protected $model = DbConnection::class;

    /**
     * @return array
     */
    public function definition(): array
    {
        return [
            'prefix' => ''
        ];
    }
}
