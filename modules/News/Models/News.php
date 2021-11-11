<?php

namespace Modules\News\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Carbon;
use Modules\Auth\Models\User;
use Modules\Core\Models\Comment;
use Modules\News\Database\Factories\NewsFactory;
use Spatie\Translatable\HasTranslations;

/**
 * App\Models\News
 *
 * @property int $id
 * @property int $author_id
 * @property int|null $category_id
 * @property array $title
 * @property array $description
 * @property array $content
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read User $author
 * @property-read NewsCategory|null $category
 * @property-read Collection|Comment[] $comments
 * @property-read array $translations
 * @method static NewsFactory factory(...$parameters)
 * @method static Builder|News newModelQuery()
 * @method static Builder|News newQuery()
 * @method static Builder|News query()
 * @mixin Eloquent
 */
class News extends Model
{
    use HasTranslations, HasFactory;

    public array $translatable = ['title', 'description', 'content'];

    protected $fillable = [
        'title',
        'description',
        'content',
    ];

    /**
     * @return Factory
     */
    protected static function newFactory(): Factory
    {
        return NewsFactory::new();
    }

    /**
     * @return BelongsTo
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    /**
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(NewsCategory::class, 'category_id');
    }

    /**
     * @return MorphMany
     */
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
