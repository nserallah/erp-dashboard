<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Spatie\Translatable\HasTranslations;

class City extends BaseModel
{
    use SoftDeletes, HasTranslations;
    public $translatable = ['name'];

    const FILLABLE = [
        'user_id', 'country_id', 'name', 'is_active',
    ];
    protected $fillable = self::FILLABLE;
    protected $attributes = [
        'name' => '',
    ];
    protected $appends = ['localeName'];
    /**
     * front-end table's columns
     *
     * this columns will be shown in the
     * front-end's table
     * @author WeSSaM
     * @var array
     *
     */
    public static $columns = [
        [
            'label' => '#',
            'field' => 'id',
            'hidden' => true

        ],
        [
            'label' => 'name',
            'field' => 'name',
        ],
        [
            'label' => 'country',
            'field' => 'country',
        ],
        [
            'label' => 'Operations',
            'field' => 'actions',
            'html' => true,
        ]
    ];

    /**
     *
     * @author WeSSaM
     * @var array
     *
     */
    public static $actions = [
        [
            'slug' => 'edit',
            'route' => 'cities.edit',
            'params' => [
                'city_id' => 'id'
            ]
        ],
        [
            'slug' => 'delete',
            'route' => 'settings.cities.delete',
            'params' => [
                'id' => 'country_id'
            ]
        ]
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id', 'id')->withDefault();
    }

    /**
     * @param $q
     * @param Request $request
     * @return mixed
     */
    public function scopeFilter($q, Request $request)
    {
        if (isset($request->is_active)) {
            $q->where('is_active', $request->is_active);
        }
        if (isset($request->country_id)) {
            $q->where('country_id', $request->country_id);
        }
        if (isset($request->search) && !empty($request->search)) {
            $q->where('name', 'LIKE', '%' . $request->search . '%');
        }
        return $q;
    }

    public function getLocaleNameAttribute()
    {
        $name = $this->attributes['name'];
        return ((array)json_decode($name))[app()->getLocale()];
    }
}
