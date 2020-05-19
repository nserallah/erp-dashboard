<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImageModel extends BaseModel
{

    /**
     * @return string
     */
    public function className()
    {
        return get_class($this);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function images()
    {
        return $this->morphMany(Image::class, 'image');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function image()
    {
        return $this->morphOne(Image::class, 'image')->latest();
    }

    /**
     * @return bool
     */
    public function canDelete()
    {
        return true;
    }

}
