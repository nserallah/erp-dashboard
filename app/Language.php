<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Spatie\Translatable\HasTranslations;

class Language extends BaseModel
{
    use SoftDeletes, HasTranslations;
    public $translatable = ['name'];

    const FILLABLE = [
        'user_id', 'name', 'locale', 'icon', 'is_rtl', 'is_default', 'is_active',
    ];
    protected $fillable = self::FILLABLE;

    protected $attributes = [
        'name' => '',
    ];

    /**
     * @param $q
     * @return mixed
     */
    public function scopeActive($q)
    {
        return $q->where('is_active', 1);
    }

    /**
     * @param $q
     * @param Request $request
     * @return mixed
     */
    public function scopeFilter($q, Request $request)
    {
        return $q;
    }
}
