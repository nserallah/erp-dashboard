<?php

namespace Core\Settings\Models;

use App\Image;
use Core\Company\Models\CompanyBaseModel;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Brand extends CompanyBaseModel
{
    use SoftDeletes, HasTranslations;
    const FILLABLE = [
        'name', 'mother_company', 'parent_id', 'is_active', 'notes', 'user_id',
    ];
    protected $fillable = self::FILLABLE;

    public $translatable = ['name'];


    public static $filters = [
        [
            'label' => 'Name',
            'filter_name' => 'name',
            'operand' => 'like',
            'field_type' => 'input',
            'value' => '',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'Name',
            ],
        ],
        [
            'label' => 'Parent',
            'filter_name' => 'parent_id',
            'field_type' => 'cselect',
            'relation' => [
                'name' => 'parent',
                'field' => 'id'
            ],
            'value' => '',
            'operand' => '=',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'Parent',
            ],
            'options' => [
                'end_point' => [
                    'route' => 'brand.fetch',
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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function appliedCategories()
    {
        return $this->belongsToMany(Category::class, 'brand_applicants', 'brand_id', 'appliable_id',
            'id', 'id')->wherePivot('appliable_type', Category::class)
            ->wherePivot('type', 1);
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id', 'id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function icon()
    {
        return $this->morphOne(Image::class, 'image')->latest();
    }

}
