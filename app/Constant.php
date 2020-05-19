<?php

namespace App;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Constant extends BaseModel
{
    use SoftDeletes, HasTranslations;


    public $translatable = ['name', 'value'];
    public $with = ['children'];

    const FILLABLE = [
        'id', 'user_id', 'parent_id', 'key', 'name', 'value', 'is_active',
    ];
    protected $fillable = self::FILLABLE;
    protected $attributes = [
        'name' => '',
//        'value' => '',
    ];
    protected $hidden = ['user_id', 'created_at', 'updated_at', 'deleted_at'];

    protected $table = 'constants';

    protected $appends = ['locale_name', 'locale_value'];

    /**
     * front-end table's columns
     *
     * this columns will be shown in the
     * front-end's table
     * @author Amr
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
            'label' => 'Key',
            'field' => 'key',
        ],
        [
            'label' => 'Name',
            'field' => 'name',
        ],
        [
            'label' => 'Value',
            'field' => 'locale_value',
        ],
        [
            'label' => 'Operations',
            'field' => 'actions',
            'html' => true,
        ]
    ];
    /**
     * front-end filters
     *
     * @author Amr
     * @var array
     */
    public static $filters = [
        [
            'label' => 'Key',
            'filter_name' => 'key',
            'field_type' => 'input',
            'value' => '',
            'operand' => 'like',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'Key',
            ],
        ],
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
        [
            'label' => 'Value',
            'filter_name' => 'value',
            'field_type' => 'input',
            'value' => '',
            'operand' => 'like',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'Value',

            ],
        ],
        [
            'label' => 'Active',
            'filter_name' => 'is_active',
            'field_type' => 'select',

            'operand' => '=',
            'attributes' => [
                'value' => null,
                'options' => [
                    [
                        'value' => null,
                        'text' => 'Please select',

                    ],
                    [
                        'value' => '1',
                        'text' => 'active',

                    ],
                    [
                        'value' => '0',
                        'text' => 'inactive',
                    ]
                ]

            ],
        ]
    ];

//    public static $actions = [
//        [
//            'slug' => 'edit',
//            'route' => 'plan.edit',
//            'params' => [
//                'id' => 'id'
//            ]
//        ],
////        [
////            'slug' => 'delete',
////            'route' => 'subscription.plan.delete',
////            'params' => [
////                'id' => 'id'
////            ]
////        ],
//    ];

    public static $actions = [
        [
            'slug' => 'edit',
            'route' => 'constant.edit',
            'params' => [
                'id' => 'id'
            ]
        ],
        [
            'slug' => 'delete',
            'route' => 'constant.delete',
            'params' => [
                'id' => 'id'
            ]
        ]
    ];

    /**
     * @return mixed
     */
    public function getLocaleNameAttribute()
    {
        return $this->name;
    }

    /**
     * show values in suitable way
     * @return mixed
     * @author Amr
     */
    public function getLocaleValueAttribute()
    {
        try {
            return $this->value;
        } catch (\Exception $exception) {
            if (is_array($this->value) && empty($this->value))
                return '';
            return @implode((array)$this->value, ',');
        }
    }

    /**
     * get the children of constants
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     * @author Amr
     */
    public function children()
    {
        return $this->hasMany(self::class, 'parent_id', 'id')->withoutGlobalScopes();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id', 'id')->withoutGlobalScopes();
    }

    /**
     * @param array $children
     */
    public function saveChildren($children = array())
    {
        foreach ($children as $child) {
            Constant::create([
                'user_id' => $this->user_id,
                'key' => $this->key,
                'parent_id' => $this->id,
                'name' => @$child['name'],
                'value' => @$child['value'],
                'is_active' => 1,
            ]);
        }
    }

    public function getValueAttribute()
    {
        return json_decode(@$this->attributes['value']);

//        try {
//            $lang = app()->getLocale();
//            return json_decode($this->attributes['value'])->$lang;
//        } catch (\Exception $exception) {
//            return json_attributes($this->attributes['value']);
//
////            return array_key_first(get_object_vars(json_decode()));
//        }
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function migrations()
    {
        return $this->belongsToMany(TableMigration::class, 'module_migrations', 'module_id', 'migration_id', 'id', 'id');
    }

    /**
     * this function connects the name
     * of fields with the real name of database columns
     *
     * @return array
     * @author Amr
     */
    static function getFilterMap()
    {
        return [
            'name' => 'name',
            'key' => 'key',
            'value' => 'value',
            'active' => 'is_active',
        ];
    }

    /**
     * @param null $key
     * @return mixed
     * @author WeSSaM
     */
    public function getJsonValueByKey($key = null)
    {
        return isset($this->value->$key) ? $this->value->$key : $this->value;
    }

    /**
     * @param $q
     * @param string $key
     * @param string $value
     * @return mixed
     */
    public function scopeSearchInJson($q, $key = 'value', $value = '')
    {
        return $q->whereJsonContains('value->' . $key, $value);
    }

    /**
     * @param string $key
     * @param string $value
     * @param string $json_key
     * @return mixed
     */
    public static function findByJson($key, $json_key = 'value', $value = '')
    {
        $constant = self::where('key', $key)->searchInJson($json_key, $value)->first();
        if (isset($constant->value->$json_key))
            return $constant;

        throw  new ModelNotFoundException(trans('lang.model_not_found'), RESOURCE_NOT_FOUND);
    }


    function getEnglishName()
    {
        return json_decode($this->attributes['name'])->en;
    }


}
