<?php

namespace Modules\Core\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Carbon;

/**
 * Modules\Auth\Models\Comment
 *
 * @property int $id
 * @property int $author_id
 * @property string|null $title
 * @property string $content
 * @property string $commentable_type
 * @property int $commentable_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|Comment newModelQuery()
 * @method static Builder|Comment newQuery()
 * @method static Builder|Comment query()
 * @mixin Eloquent
 */
class Comment extends Model
{
    protected $fillable = [
        'title',
        'content'
    ];

    protected function commentable(): MorphTo
    {
        return $this->morphTo('commentable');
    }
}
