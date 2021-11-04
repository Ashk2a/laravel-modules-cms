<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Spatie\Translatable\HasTranslations;

/**
 * App\Models\NewsCategory
 *
 * @property int $id
 * @property array $name
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read array $translations
 * @method static Builder|NewsCategory newModelQuery()
 * @method static Builder|NewsCategory newQuery()
 * @method static Builder|NewsCategory query()
 * @mixin Eloquent
 */
class NewsCategory extends Model
{
    use HasTranslations;

    public array $translatable = ['name'];

    protected $fillable = [
        'name'
    ];
}
