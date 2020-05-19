<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Image extends Attachment
{
    use SoftDeletes;

    public static $rules = 'required|mimes:png,gif,jpeg,jpg,bmp,svg,ico';

    protected $fillable = ['image_type', 'image_id', 'display_name', 'file_name', 'extension', 'size',];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function image()
    {
        return $this->morphTo();
    }



}
