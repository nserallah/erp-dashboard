<?php

namespace Core\Settings\Models;

use Core\Company\Models\CompanyBaseModel;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Unit extends CompanyBaseModel
{
    use SoftDeletes, HasTranslations;

    const FILLABLE = [
        'name', 'abbreviation', 'parent_id', 'sub_value_total', 'is_active', 'notes', 'user_id',
    ];

    public $translatable = ['name'];

    protected $fillable = self::FILLABLE;

    protected $appends = ['localeName'];


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
            'label' => 'Parent',
            'filter_name' => 'parent_id',
            'field_type' => 'cselect',
//            'relation' => [
//                'name' => 'parent',
//                'field' => 'id'
//            ],
            'value' => '',
            'operand' => '=',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'Parent',

            ],
            'options' => [
                'end_point' => [
                    'route' => 'unit.fetch',
                    'params' => [
                        "no_pagination" => 'true',
                    ],

                ],
                'field' => 'name'
            ]
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
            'label' => 'Parent',
            'field' => 'parent_name',
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
     * @author WeSSaM
     * @return mixed
     */
    public function getLocaleNameAttribute()
    {
        return (string) $this->name;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     * @author WeSSaM
     */
    public function appliedCategories()
    {
        return $this->belongsToMany(Category::class, 'unit_applicants', 'unit_id', 'appliable_id',
            'id', 'id')->wherePivot('appliable_type', Category::class)
            ->wherePivot('type', 1);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author WeSSaM
     */
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id', 'id');
    }


}
