<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Spatie\Translatable\HasTranslations;

class PlanOffer extends BaseModel
{
    use SoftDeletes, HasTranslations;
    public $translatable = ['title',];

    const FILLABLE = [
        'user_id', 'plan_id', 'title', 'starts_at', 'ends_at', 'discount_percentage_per_year',
        'discount_percentage_per_month', 'is_active'
    ];
    protected $fillable = self::FILLABLE;

    public static $columns = [

        [
            'label' => '#',
            'field' => 'id',
            'hidden' => true
        ],
        [
            'label' => 'Plan',
            'field' => 'plan_title',
        ],
        [
            'label' => 'Start Date',
            'field' => 'starts_at',
        ],
        [
            'label' => 'End Date',
            'field' => 'ends_at',
        ],
        [
            'label' => 'Discount / Month',
            'field' => 'discount_percentage_per_month',
        ],
        [
            'label' => 'Discount / Year',
            'field' => 'discount_percentage_per_year',
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

    public static $filters = [
        [
            'label' => 'Title',
            'filter_name' => 'title',
            'field_type' => 'input',
            'value' => '',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'Title',

            ],
        ],
        [
            'label' => 'Value',
            'filter_name' => 'value',
            'field_type' => 'input',
            'value' => '',
            'attributes' => [
                'type' => 'text',
                'placeholder' => 'Value',

            ],
        ]
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function plan()
    {
        return $this->belongsTo(Plan::class, 'plan_id', 'id')->withDefault();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function upgrades()
    {
        return $this->hasMany(PlanUpgrade::class, 'offer_id', 'id');
    }

    /**
     * @param array $data
     * @return PlanOffer
     */
    public static function store($data = array())
    {
        $instance = new self;
        $instance->fill($data);
        $instance->user_id = auth(SUPER_ADMIN_GUARD)->id();
        $instance->save();
        return $instance;
    }


    /**
     * @return mixed
     */
    public function createLog()
    {
        return PlanOfferPriceLog::create([
            'user_id' => $this->user_id,
            'currency_id' => @$this->plan->currency_id,
            'owner_id' => $this->id,
            'starts_at' => $this->created_at,
            'ends_at' => Carbon::now(),
            'data' => $this,
            'model_type' => 'offer',
        ]);
    }

    /**
     * @param $q
     * @param Request $request
     * @return mixed
     */
    public function scopeFilter($q, Request $request)
    {
        if (isset($request->plan_id)) {
            $q->where('plan_id', $request->plan_id);
        }
        if (isset($request->is_active)) {
            $q->where('is_active', $request->is_active);
        }
        if (isset($request->search) && !empty($request->search)) {
            $q->where('title', 'LIKE', '%' . $request->search . '%');
        }
        return $q;
    }


    public static $actions = [
        [
            'slug' => 'edit',
            'route' => 'offer.edit',
            'params' => [
                'id' => 'id'
            ]
        ],
        [
            'slug' => 'delete',
        ],
    ];
}
