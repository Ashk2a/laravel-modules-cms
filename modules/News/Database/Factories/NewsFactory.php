<?php

namespace Modules\News\Database\Factories;

use Modules\News\Models\News;
use Modules\News\Models\NewsCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

class NewsFactory extends Factory
{
    /**
     * @var string
     */
    protected $model = News::class;

    /**
     * @return array
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->text(30),
            'content' => $this->faker->text(1500),
            'description' => $this->faker->text(100),
            'category_id' => NewsCategory::inRandomOrder()->first()->id
        ];
    }
}
