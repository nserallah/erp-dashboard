<?php

namespace App;

use Core\Account\Models\Account;
use Core\Account\Models\TempAccount;
use Core\Payment\Models\Transaction;
use Core\Settings\Models\Resources\ConstantsResource;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Company extends BaseModel
{
    use SoftDeletes, HasTranslations;

    public $translatable = ['name'];
    const FILLABLE = [
        'user_id',
        'name',
        'start_date',
        'branch_no',
        'size_id',
        'inventory_no',
        'employee_no',
        'tax_no',

        'contribution_type_id',
        'activity_type_id',
        'product_type_id',

        'business_record_no',

        'country_id',
        'city_id',


        'email',
        'mobile',
        'fax',
        'address',
        'latitude',
        'longitude',
        'logo',
        'notes',
        'custom_url',
        'is_active',
        'remember_token',
        'activity_id',
        "business_name",
        'brief_name',
        'plan_id'
    ];
    protected $fillable = self::FILLABLE;
//    protected $attributes = [
//        'name'
//    ];

    public static $columns = [

        [
            'label' => '#',
            'field' => 'id',
        ],
        [
            'label' => 'Name',
            'field' => 'name',
        ],
        [
            'label' => 'Activity Type',
            'field' => 'activity_type',
        ],
        [
            'label' => 'Plan Level',
            'field' => 'plan_level',
        ],
        [
            'label' => 'Database Settings',
            'field' => 'db_settings',
        ],
        [
            'label' => 'SubDomain Settings',
            'field' => 'sub_domain_settings',
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
    /**
     * this is the filter attributes for company's index
     * page
     *
     * @author Amr
     * @var array
     */
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

    public static $rules = [
        'name',
        'start_date' => 'required',
        'branch_no' => 'required',
        'size_id' => 'required',
        'inventory_no' => 'required',
        'employee_no' => 'required',
        'tax_no' => 'required',
        'contribution_type_id',
        'business_record_no' => 'required',
        'country_id.id' => 'required',
        'city_id.id' => 'required',
        'email' => 'required|email|unique:companies,email',
        'mobile' => 'required|unique:companies,mobile',
        'fax' => 'required|unique:companies,fax',
        'address' => 'required',
        'custom_url' => 'required|url',
        "business_name" => 'required',
        'brief_name' => 'required|unique:companies,brief_name',
    ];


    protected $appends = ['activity', 'avatar'];
    protected $with = ['plan', 'account', 'tempAccount', 'transaction'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function activityType()
    {
        return $this->belongsTo(Constant::class, 'activity_type_id', 'id')->withDefault();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function contributionType()
    {
        return $this->belongsTo(Constant::class, 'contribution_type_id', 'id')->withDefault();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function productType()
    {
        return $this->belongsTo(Constant::class, 'product_type_id', 'id')->withDefault();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function size()
    {
        return $this->belongsTo(Constant::class, 'size_id', 'id')->withDefault();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id', 'id')->withDefault();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function city()
    {
        return $this->belongsTo(City::class, 'city_id', 'id')->withDefault();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function trials()
    {
        return $this->hasMany(TrialAccount::class, 'company_id', 'id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function trial()
    {
        return $this->hasOne(TrialAccount::class, 'company_id', 'id')->latest();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function upgrades()
    {
        return $this->hasMany(PlanUpgrade::class, 'company_id', 'id');
    }

    /**
     * get company's plan
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author Amr
     */
    public function plan()
    {
        return $this->belongsTo(Plan::class, 'plan_id', 'id')->withoutGlobalScopes();
    }

    /**
     * get company's account
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author Amr
     */
    public function account()
    {
        return $this->hasOne(Account::class, 'company_id', 'id')->withoutGlobalScopes();
    }

    /**
     * get company's account
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author Amr
     */
    public function tempAccount()
    {
        return $this->hasOne(TempAccount::class, 'company_id', 'id')->withoutGlobalScopes();
    }


    public function getActivityAttribute()
    {
        return new ConstantsResource($this->activityType);
    }

    public function transaction()
    {
        return $this->hasOne(Transaction::class)->withoutGlobalScopes();
    }

    /**
     * company's generated access code
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     * @author Amr
     */
    public function accessCode()
    {
        return $this->morphOne(AccessCode::class, 'accessable');
    }

    /**
     * return the suitable rules
     * for the company's model
     *
     * @param null $id
     * @return array
     * @author Amr
     */
    public static function getRules($id = null)
    {
        $rules = self::$rules;
        if (!$id)
            return $rules;
        $rules['email'] .= ',' . $id;
        $rules['mobile'] .= ',' . $id;
        $rules['fax'] .= ',' . $id;
        $rules['brief_name'] .= ',' . $id;
        return $rules;
    }

    /**
     * return  the full path of logo
     *
     * @param $value
     * @return string
     * @author Amr
     */
    public function getAvatarAttribute($value)
    {

        return !isset($this->attributes['logo']) ? '' : asset('storage/' . $this->attributes['logo']);
    }

}
