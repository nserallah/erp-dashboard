<?php

namespace Core\Settings\Models;

use App\City;
use App\Constant;
use App\Country;
use Core\Company\Models\CompanyBaseModel;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Tax extends CompanyBaseModel
{
    use SoftDeletes, HasTranslations;
    const FILLABLE = [
        'name', 'type_id', 'value_type_id', 'apply_start_date',
        'value', 'is_active', 'notes', 'user_id'
    ];
    protected $fillable = self::FILLABLE;
    public $translatable = ['name'];

    public static $filters = [
        [
            'label' => 'Name',
            'filter_name' => 'name',
            'field_type' => 'input',
            'value' => '',
            'operand' => 'like',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'Name',
            ],
        ],
        [
            'label' => 'Type',
            'filter_name' => 'type_id',
            'field_type' => 'cselect',
            'relation' => [
                'name' => 'type',
                'field' => 'id'
            ],
            'value' => '',
            'operand' => '=',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'To ...',

            ],
            'options' => [
                'end_point' => [
                    'route' => 'settings.constants.fetch',
                    'params' => [
                        "no_pagination" => 'true',
                        'per_page' => '1000'
                    ],

                ],
                'condition' => '{item}.key == "TAX_TYPE" && {item}.parent_id == null',
                'field' => 'locale_name'
            ]
        ],
        [
            'label' => 'Start date',
            'filter_name' => 'apply_start_date',
            'field_type' => 'datepicker',
            'value' => '',
            'operand' => '>=',
            'attributes' => [
                'placeholder' => 'Start date',
                "pattern" => 'Y-m-d',
                'id' => 'apply-start-date',
                'type' => 'date',
            ],
        ],
        [
            'label' => 'Status',
            'filter_name' => 'is_active',
            'field_type' => 'select',

            'operand' => '=',
            'attributes' => [
                'value' => null,
                'options' => [
                    [
                        'value' => '',
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

    public static $columns = [
        [
            'label' => '#',
            'field' => 'id',
            'hidden' => true
        ],
        [
            'label' => 'Name',
            'field' => 'name',
        ],
        [
            'label' => 'Type',
            'field' => 'type_name',
        ],
        [
            'label' => 'Start Date',
            'field' => 'apply_start_date',
        ],
        [
            'label' => 'Status',
            'field' => 'is_active',
        ],
        [
            'label' => 'Operations',
            'field' => 'actions',
            'html' => true,
        ]
    ];

    public static $actions = [
        [
            'slug' => 'edit',
        ],
        [
            'slug' => 'delete',
        ],
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function type()
    {
        return $this->belongsTo(Constant::class, 'type_id', 'id')
            ->withDefault();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function valueType()
    {
        return $this->belongsTo(Constant::class, 'value_type_id', 'id')
            ->withDefault()->withoutGlobalScopes();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function appliedCountries()
    {
        return $this->belongsToMany(Country::class, 'tax_applicants', 'tax_id', 'appliable_id',
            'id', 'id')
            ->wherePivot('appliable_type', Country::class)
            ->wherePivot('type', 1)->withoutGlobalScopes();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function exceptCountries()
    {
        return $this->belongsToMany(Country::class, 'tax_applicants', 'tax_id', 'appliable_id',
            'id', 'id')
            ->wherePivot('appliable_type', Country::class)
            ->wherePivot('type', 2)->withoutGlobalScopes();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function appliedCities()
    {
        return $this->belongsToMany(City::class, 'tax_applicants', 'tax_id', 'appliable_id',
            'id', 'id')->wherePivot('appliable_type', City::class)
            ->wherePivot('type', 1)->withoutGlobalScopes();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function exceptCities()
    {
        return $this->belongsToMany(City::class, 'tax_applicants', 'tax_id', 'appliable_id',
            'id', 'id')
            ->wherePivot('appliable_type', City::class)
            ->wherePivot('type', 2)->withoutGlobalScopes();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function appliedCategories()
    {
        return $this->belongsToMany(Category::class, 'tax_applicants', 'tax_id', 'appliable_id',
            'id', 'id')
            ->wherePivot('appliable_type', Category::class)
            ->wherePivot('type', 1)->withoutGlobalScopes();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function exceptCategories()
    {
        return $this->belongsToMany(Category::class, 'tax_applicants', 'tax_id', 'appliable_id',
            'id', 'id')
            ->wherePivot('appliable_type', Category::class)
            ->wherePivot('type', 2)->withoutGlobalScopes();
    }


}
