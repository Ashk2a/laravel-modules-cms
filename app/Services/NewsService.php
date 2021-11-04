<?php

namespace App\Services;

use App\Models\News;
use App\Models\NewsCategory;
use App\Models\User;

class NewsService
{
    /**
     * @param User $author
     * @param array $title
     * @param array $description
     * @param array $content
     * @param NewsCategory|null $category
     * @return News
     */
    public function create(
        User          $author,
        array         $title,
        array        $description,
        array        $content,
        ?NewsCategory $category = null,
    ): News
    {
        $news = new News();
        $news->author()->associate($author);
        $news->category()->associate($category);

        $news->fill([
            'title' => $title,
            'description' => $description,
            'content' => $content,
        ]);

        $news->save();

        return $news;
    }
}
