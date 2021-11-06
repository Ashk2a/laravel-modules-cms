<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use JetBrains\PhpStorm\Pure;
use Spatie\Translatable\HasTranslations;

/**
 * App\Models\MenuItem
 *
 * @property int $id
 * @property int $type
 * @property int $position
 * @property int|null $parent_id
 * @property string $name
 * @property string|null $href
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection|MenuItem[] $categories
 * @method static Builder|MenuItem newModelQuery()
 * @method static Builder|MenuItem newQuery()
 * @method static Builder|MenuItem query()
 * @mixin Eloquent
 * @property-read MenuItem|null $category
 * @property-read Collection|MenuItem[] $items
 * @property-read MenuItem|null $root
 * @property-read array $translations
 */
class MenuItem extends Model
{
    use HasTranslations;

    public const TYPE_ROOT_SIDE_LEFT = 0;
    public const TYPE_ROOT_SIDE_RIGHT = 1;
    public const TYPE_CATEGORY = 2;
    public const TYPE_NORMAL_ITEM = 3;

    public array $translatable = ['name'];

    /**
     * @var array
     */
    protected $fillable = [
        'type',
        'position',
        'parent_id',
        'name',
        'href'
    ];

    /**
     * @return Collection|array|MenuItem[]
     */
    public static function buildTree(array $types): Collection|array
    {
        return self::query()
            ->with(['categories', 'categories.items'])
            ->whereIn('type', $types)
            ->get();
    }

    /**
     * @param int $type
     * @return bool
     */
    public function isTypeOf(int $type): bool {
        return $this->type === $type;
    }

    /**
     * @return bool
     */
    #[Pure] public function isRootSideLeft(): bool
    {
        return $this->isTypeOf(self::TYPE_ROOT_SIDE_LEFT);
    }

    /**
     * @return bool
     */
    #[Pure] public function isRootSideRight(): bool
    {
        return $this->isTypeOf(self::TYPE_ROOT_SIDE_RIGHT);
    }

    /**
     * @return bool
     */
    #[Pure] public function isCategory(): bool
    {
        return $this->isTypeOf(self::TYPE_CATEGORY);
    }

    /**
     * @return bool
     */
    #[Pure] public function isItem(): bool
    {
        return $this->isTypeOf(self::TYPE_NORMAL_ITEM);
    }

    /**
     * @return HasMany
     */
    public function categories(): HasMany
    {
        return $this->hasMany(__CLASS__, 'parent_id', 'id')
            ->where('type', self::TYPE_CATEGORY);
    }

    /**
     * @return HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(__CLASS__, 'parent_id', 'id')
            ->where('type', self::TYPE_NORMAL_ITEM);
    }

    /**
     * @return BelongsTo
     */
    public function root(): BelongsTo
    {
        return $this->belongsTo(__CLASS__, 'parent_id', 'id')
            ->whereIn('type', [self::TYPE_ROOT_SIDE_LEFT, self::TYPE_ROOT_SIDE_RIGHT]);
    }

    /**
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(__CLASS__, 'parent_id', 'id')
            ->where('type', self::TYPE_CATEGORY);
    }
}
