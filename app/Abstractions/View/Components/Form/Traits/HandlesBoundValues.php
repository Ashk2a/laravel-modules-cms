<?php

namespace App\Abstractions\View\Components\Form\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use App\Contracts\View\FormDataBinder as FormDataBinderContract;

trait HandlesBoundValues
{
    /**
     * Wether to retrieve the default value as a single
     * attribute or as a collection from the database.
     */
    protected bool $manyRelation = false;

    /**
     * Get an instance of FormDataBinder.
     * @return FormDataBinderContract
     */
    private function getFormDataBinder(): FormDataBinderContract
    {
        return app(FormDataBinderContract::class);
    }

    /**
     * Get the latest bound target.
     * @return mixed
     */
    private function getBoundTarget(): mixed
    {
        return $this->getFormDataBinder()->get();
    }

    /**
     * Get an item from the latest bound target.
     * @param mixed $bind
     * @param string $name
     * @return mixed
     */
    private function getBoundValue(mixed $bind, string $name): mixed
    {
        if ($bind === false) {
            return null;
        }

        $bind = $bind ?: $this->getBoundTarget();

        return $this->manyRelation
            ? $this->getAttachedKeysFromRelation($bind, $name)
            : data_get($bind, $name);
    }

    /**
     * Returns an array with the attached keys.
     *
     * @param mixed $bind
     * @param string $name
     * @return array|null
     */
    private function getAttachedKeysFromRelation(mixed $bind, string $name): ?array
    {
        if (!$bind instanceof Model) {
            return data_get($bind, $name);
        }

        $relation = $bind->{$name}();

        if ($relation instanceof BelongsToMany) {
            $relatedKeyName = $relation->getRelatedKeyName();

            return $relation->getBaseQuery()
                ->get($relation->getRelated()->qualifyColumn($relatedKeyName))
                ->pluck($relatedKeyName)
                ->all();
        }

        if ($relation instanceof MorphMany) {
            $parentKeyName = $relation->getLocalKeyName();

            return $relation->getBaseQuery()
                ->get($relation->getQuery()->qualifyColumn($parentKeyName))
                ->pluck($parentKeyName)
                ->all();
        }

        return data_get($bind, $name);
    }
}
