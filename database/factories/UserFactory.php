<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Hash representation of string `password`
     */
    const DEFAULT_HASH_PASSWORD = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi';

    /**
     * @var string
     */
    protected $model = User::class;

    /**
     * @return array
     */
    public function definition(): array
    {
        return [
            'nickname' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'password' => self::DEFAULT_HASH_PASSWORD,
            'remember_token' => Str::random(10),
        ];
    }
}
