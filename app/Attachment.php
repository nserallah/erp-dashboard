<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attachment extends BaseModel
{
    protected $fillable = ['display_name', 'file_name', 'extension', 'size'];


    /**
     * @param $q
     * @param $attribute
     * @param $value
     * @return mixed
     */
    public function scopeFindBy($q, $attribute, $value)
    {
        return $q->where($attribute, 'LIKE', $value)->first();
    }


}
