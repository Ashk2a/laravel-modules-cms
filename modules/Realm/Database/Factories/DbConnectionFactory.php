<?php

namespace Modules\Realm\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Realm\Models\DbConnection;

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
