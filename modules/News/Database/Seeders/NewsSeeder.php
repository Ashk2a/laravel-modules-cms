<?php

namespace Modules\News\Database\Seeders;

use Modules\User\Models\User;
use Modules\Core\Database\Seeders\AbstractSeeder;
use Modules\News\Models\News;
use Modules\News\Models\NewsCategory;
use Modules\News\Services\NewsService;

class NewsSeeder extends AbstractSeeder
{
    private const NEWS_CATEGORIES = [
        ['en' => 'News', 'fr' => 'Nouveautés'],
        ['en' => 'Events', 'fr' => 'Évènements'],
        ['en' => 'Competition', 'fr' => 'Concours'],
    ];

    private User $adminUser;

    /**
     * @param NewsService $newsService
     */
    public function __construct(private NewsService $newsService)
    {
        $this->adminUser = $this->fetchAdminUser();
    }

    /**
     * @return void
     */
    public function run(): void
    {
        $this->createNewsCategories();
        $this->createNews(10);
    }

    /**
     * @return void
     */
    private function createNewsCategories(): void
    {
        foreach (self::NEWS_CATEGORIES as $categoryNames) {
            NewsCategory::create([
                'name' => $categoryNames
            ]);
        }
    }

    /**
     * @param int $count
     * @return void
     */
    private function createNews(int $count = 30): void
    {
        /**
         * @var $allNews News[]
         */
        $allNews = News::factory()
            ->count($count)
            ->for($this->adminUser, 'author')
            ->make();

        foreach ($allNews as $news) {
            $this->newsService->create(
                $news->author,
                $news->getTranslations('title'),
                $news->getTranslations('description'),
                $news->getTranslations('content'),
                $news->category
            );
        }
    }
}
