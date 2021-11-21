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
use Symfony\Component\Routing\Exception\RouteNotFoundException;

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
 * @property-read Permission|null $requiredPermission
 * @method static Builder|MenuItem newModelQuery()
 * @method static Builder|MenuItem newQuery()
 * @method static Builder|MenuItem query()
 * @mixin Eloquent
 */
class MenuItem extends Model
{
    use HasTranslations;

    public const SCOPE_MAIN_MANAGER = 0;
    public const SCOPE_MAIN_RIGHT = 1;
    public const SCOPE_MAIN_LEFT = 2;

    public const TYPE_CATEGORY = 2;
    public const TYPE_ITEM = 1;

    public const TYPE_HREF_URL_EXTERNAL = 0;
    public const TYPE_HREF_URL_INTERNAL = 1;
    public const TYPE_HREF_ROUTE_NAME_INTERNAL = 2;

    public const AUTH_CONDITION_NONE = 0;
    public const AUTH_CONDITION_ONLY_GUEST = 1;
    public const AUTH_CONDITION_ONLY_AUTHENTICATED = 2;

    public array $translatable = ['name'];

    /**
     * @var array
     */
    protected $fillable = [
        'scope',
        'type',
        'position',
        'parent_id',
        'name',
        'type_href',
        'href',
        'auth_condition'
    ];

    /**
     * @param array $scopes
     * @return Collection|array
     */
    public static function buildTree(array $scopes): Collection|array
    {
        return self::query()
            ->with(['categories', 'categories.items'])
            ->whereNull('parent_id')
            ->whereIn('scope', $scopes)
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
                self::TYPE_HREF_URL_EXTERNAL => $this->href,
                self::TYPE_HREF_URL_INTERNAL => locale()->localizeURL($this->href),
                self::TYPE_HREF_ROUTE_NAME_INTERNAL => locale()->localizeURL(route($this->href)),
                default => locale()->localizeURL(),
            };
        } catch (UnsupportedLocaleException|RouteNotFoundException) {
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
            ->where('type', self::TYPE_ITEM);
    }

    /**
     * @return BelongsTo
     */
    public function requiredPermission(): BelongsTo
    {
        return $this->belongsTo(Permission::class, 'required_permission_id');
    }
}
