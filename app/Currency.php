<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Currency extends BaseModel
{
    use SoftDeletes, HasTranslations;
    public $translatable = ['name'];

    const FILLABLE = [
        'user_id', 'name', 'icon', 'is_active',
    ];

    protected $fillable = self::FILLABLE;

    protected $attributes = [
        'name' => '',
    ];

    protected $appends = ['locale_name'];

    protected $hidden = ['user_id', 'parent_id', 'created_at', 'updated_at', 'deleted_at'];


    /**
     * @return mixed
     */
    public function getLocaleNameAttribute()
    {
        $name = @$this->attributes['name'];
//        dd($name);
        return ((array)json_decode($name))[app()->getLocale()];
    }

    /**
     * @param $q
     * @return mixed
     */
    public function scopeActive($q)
    {
        return $q->where('is_active', 1);
    }
}
