<?php

namespace Modules\Ui\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use JetBrains\PhpStorm\Pure;
use Mcamara\LaravelLocalization\Exceptions\UnsupportedLocaleException;
use Spatie\Permission\Models\Permission;
use Spatie\Translatable\HasTranslations;

/**
 * Modules\Ui\Models\MenuItem
 *
 * @property int $id
 * @property int $type
 * @property int $position
 * @property int|null $parent_id
 * @property string $name
 * @property string|null $href
 * @property-read MenuItem|null $category
 * @property-read Collection|MenuItem[] $items
 * @property-read MenuItem|null $root
 * @property-read array $translations
 * @property int|null $type_href
 * @property int $auth_condition
 * @property int|null $required_permission_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Collection|MenuItem[] $categories
 * @method static Builder|MenuItem newModelQuery()
 * @method static Builder|MenuItem newQuery()
 * @method static Builder|MenuItem query()
 * @mixin Eloquent
 */
class MenuItem extends Model
{
    use HasTranslations;

    public const TYPE_ROOT_SIDE_LEFT = 0;
    public const TYPE_ROOT_SIDE_RIGHT = 1;
    public const TYPE_ROOT_ADMIN = 2;
    public const TYPE_CATEGORY = 3;
    public const TYPE_NORMAL_ITEM = 4;

    public const TYPE_HREF_INTERNAL = 0;
    public const TYPE_HREF_EXTERNAL = 1;

    public const AUTH_CONDITION_NONE = 0;
    public const AUTH_CONDITION_ONLY_GUEST = 1;
    public const AUTH_CONDITION_ONLY_AUTHENTICATED = 2;

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
     * @return string
     */
    public function getUrl(): string
    {
        $default = '/';

        try {
            return match ($this->type_href) {
                self::TYPE_HREF_INTERNAL => locale()->localizeURL($this->href),
                self::TYPE_HREF_EXTERNAL => $this->href,
                default => locale()->localizeURL(),
            };
        } catch (UnsupportedLocaleException $e) {
            return $default;
        }
    }

    /**
     * @return bool
     */
    public function canShowed(): bool
    {
        $user = Auth::user();

        if (null === $user) {
            return ($this->auth_condition === self::AUTH_CONDITION_NONE && $this->required_permission_id === null)
                || $this->auth_condition === self::AUTH_CONDITION_ONLY_GUEST;
        }

        $can = true;

        if ($this->required_permission_id !== null) {
            $can = $user->can($this->requiredPermission->name);
        }

        return $can && $this->auth_condition !== self::AUTH_CONDITION_ONLY_GUEST;
    }

    /**
     * @return bool
     */
    #[Pure] public function isRootSideLeft(): bool
    {
        return $this->isTypeOf(self::TYPE_ROOT_SIDE_LEFT);
    }

    /**
     * @param int $type
     * @return bool
     */
    public function isTypeOf(int $type): bool
    {
        return $this->type === $type;
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
            ->whereIn('type', [self::TYPE_ROOT_SIDE_LEFT, self::TYPE_ROOT_SIDE_RIGHT, self::TYPE_ROOT_ADMIN]);
    }

    /**
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(__CLASS__, 'parent_id', 'id')
            ->where('type', self::TYPE_CATEGORY);
    }

    /**
     * @return BelongsTo
     */
    public function requiredPermission(): BelongsTo
    {
        return $this->belongsTo(Permission::class, 'required_permission_id');
    }
}
