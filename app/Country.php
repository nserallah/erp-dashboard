<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Spatie\Translatable\HasTranslations;

class Country extends BaseModel
{
    use SoftDeletes, HasTranslations;

    public $translatable = ['name', 'nationality'];

    const FILLABLE = [
        'user_id', 'currency_id', 'language_id', 'nationality', 'name', 'postal_code', 'mobile_prefix', 'is_active',
    ];
    protected $fillable = self::FILLABLE;

    protected $attributes = [
//        'name' => '',
    ];
    protected $appends = ['localeName'];

    public static $filters = [
        [
            'label' => 'Name',
            'filter_name' => "name",
            'field_type' => 'input',
            'value' => '',

            'operand' => 'like',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'Name',

            ],
        ],
    ];
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
            'label' => 'nationality',
            'field' => 'nationality',
        ],
        [
            'label' => 'mobile_prefix',
            'field' => 'mobile_prefix',
        ],
        [
            'label' => 'postal_code',
            'field' => 'postal_code',
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
            'route' => 'countries.edit',
            'params' => [
                'id' => 'id'
            ]
        ],
        [
            'slug' => 'delete',
            'route' => 'settings.countries.delete',
            'params' => [
                'id' => 'country_id'
            ]
        ]
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id')->withDefault()->withoutGlobalScopes();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function language()
    {
        return $this->belongsTo(Language::class, 'currency_id', 'id')->withDefault()->withoutGlobalScopes();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function cities()
    {
        return $this->hasMany(City::class, 'country_id', 'id')->withoutGlobalScopes();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function flag()
    {
        return $this->morphOne(Image::class, 'image')->withoutGlobalScopes()->latest();
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

    /**
     * @return mixed
     */
    public function getLocaleNameAttribute()
    {
        $name = @$this->attributes['name'];
        return @((array)json_decode($name))[app()->getLocale()];
    }
}
