<?php

namespace Modules\Realm\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\Realm\Models\Server;

class ServerFactory extends Factory
{
    /**
     * @var string
     */
    protected $model = Server::class;

    /**
     * @return array
     */
    public function definition(): array
    {
        return [];
    }
}
