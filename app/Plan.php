<?php

namespace App;

use App\Exceptions\UnAuthorizedActionException;
use App\Exceptions\UnexpectedInputException;
use Carbon\Carbon;
use Core\Settings\Models\Resources\ConstantsResource;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Spatie\Translatable\HasTranslations;

class Plan extends BaseModel
{
    use SoftDeletes, HasTranslations;
    public $translatable = ['title', 'description'];

    const UPDATE = [
        'level_id', 'title', 'description', 'currency_id', 'branch_no',
        'inventory_no', 'pos_no', 'emp_no', 'item_no', 'max_trail_no', 'is_trial', 'interval_trail', 'is_active'
    ];

    const FILLABLE = [
        'user_id', 'level_id', 'title', 'description', 'currency_id', 'branch_no',
        'inventory_no', 'pos_no', 'emp_no', 'item_no', 'max_trail_no', 'is_trial', 'interval_trail', 'is_active'
    ];

    protected $fillable = self::FILLABLE;

    protected $attributes = [
        'title' => '',
    ];

    protected $with = ['planIntervals'];

    protected $appends = ['plan_level'];

    public static $columns = [

        [
            'label' => '#',
            'field' => 'id',
            'hidden' => true
        ],
        [
            'label' => 'plan',
            'field' => 'title',
        ],
        [
            'label' => 'branch_no',
            'field' => 'branch_no',
        ],
        [
            'label' => 'inventory_no',
            'field' => 'inventory_no',
        ],
        [
            'label' => 'status',
            'field' => 'is_active',
            'type' => 'status',
            'html' => true,
//            'component' => 'v-status'
        ],
        [
            'label' => 'actions',
            'field' => 'actions',
            'html' => true,
        ]
    ];


    public static $actions = [
        [
            'slug' => 'edit',
            'route' => 'plan.edit',
            'params' => [
                'id' => 'id'
            ]
        ],
//        [
//            'slug' => 'delete',
//            'route' => 'subscription.plan.delete',
//            'params' => [
//                'id' => 'id'
//            ]
//        ],
    ];

    /**
     * @return Plan|bool
     * @throws UnexpectedInputException
     */
    public function attachModules()
    {
        if (request()->has(MODULES) && @count(request()->get(MODULES)) > 0) {
            foreach (request()->get(MODULES) as $module) {
                $this->modules()->attach($module['id'], [
                    'user_id' => auth(SUPER_ADMIN_GUARD)->id(),
                ]);
            }
            return $this;
        }
        $this->delete();
        throw new UnexpectedInputException(__('Subscription::lang.incorrect_modules'), INVALID_INPUT);
    }

    /**
     * @return Plan|bool
     * @throws UnexpectedInputException
     */
    public function attachIntervals()
    {
        if (request()->has(INTERVALS) && @count(request()->get(INTERVALS)) > 0) {
            foreach (request()->get(INTERVALS) as $interval) {
                $this->intervals()->attach($interval['interval']['id'], [
                    'price' => $interval['price'],
                ]);
            }
            return $this;
        }
        $this->delete();
        throw new UnexpectedInputException(__('Subscription::lang.incorrect_intervals'), INVALID_INPUT);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function trials()
    {
        return $this->hasMany(TrialAccount::class, 'plan_id', 'id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function upgrades()
    {
        return $this->hasMany(PlanUpgrade::class, 'plan_id', 'id');
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
        if (isset($request->search) && !empty($request->search)) {
            $q->where('title', 'LIKE', '%' . $request->search . '%');
        }
        return $q;
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function level()
    {
        return $this->belongsTo(Constant::class, 'level_id', 'id')
            ->withDefault();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function modules()
    {
        return $this->belongsToMany(Constant::class, 'plan_modules', 'plan_id', 'module_id', 'id', 'id')
//            ->wherePivot('user_id', auth(SUPER_ADMIN_GUARD)->id())
//            ->wherePivot('is_active', 1)
            ->withTimestamps();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function planModules()
    {
        return $this->hasMany(PlanModule::class, 'plan_id', 'id');
    }


    /**
     * @return bool
     */
    public function hasUsers()
    {
        return $this->upgrades()->count() > 0;
    }


    /**
     * @return mixed
     */
    public function createPriceLog()
    {
        return PlanOfferPriceLog::create([
            'user_id' => $this->user_id,
            'currency_id' => $this->currency_id,
            'owner_id' => $this->id,
            'starts_at' => $this->created_at,
            'ends_at' => Carbon::now(),
            'model_type' => 'plan',
            'data' => $this
        ]);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function planIntervals()
    {
        return $this->hasMany(PlanIntervalPrice::class, 'plan_id', 'id')->withoutGlobalScopes();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function intervals()
    {
        return $this->belongsToMany(Constant::class, 'plan_interval_prices', 'plan_id', 'interval_id', 'id', 'id')
            ->withTimestamps();
    }


    /**
     * @return $this
     * @throws UnexpectedInputException
     * @throws UnAuthorizedActionException
     */
    public function updateModules()
    {
        $ids = [];
        if (request()->has(MODULES) && @count(request()->get(MODULES)) > 0) {
            $modules = request()->get(MODULES);
            foreach ($modules as $module) {
                $ids[] = $module['id'];
                $this->planModules()->updateOrCreate(['module_id' => $module['id']], [
                    'is_active' => 1,
                    'user_id' => auth(SUPER_ADMIN_GUARD)->id(),
                ]);
            }
            $this->deActiveModules($ids);
            return $this;
        }
        throw new UnexpectedInputException(__('Subscription::lang.incorrect_modules'), INVALID_INPUT);
    }


    /**
     * @param $modules
     * @return int
     * @throws UnAuthorizedActionException
     */
    public function deActiveModules($modules)
    {
        if (!$this->hasUsers()) {
            return $this->planModules()->whereNotIn('module_id', $modules)->update(['is_active' => 0]);
        }
        throw new UnAuthorizedActionException(__('Subscription::lang.cannot_deactivate_modules'), NOT_AUTHORIZED_ACCESS);
    }

    /**
     * @param $intervals
     * @return int
     * @throws UnAuthorizedActionException
     */
    public function deActiveIntervals($intervals)
    {
        if (!$this->hasUsers()) {
            return $this->planIntervals()->whereNotIn('interval_id', $intervals)->update(['is_active' => 0]);
        }
        throw new UnAuthorizedActionException(__('Subscription::lang.cannot_deactivate_intervals'), NOT_AUTHORIZED_ACCESS);
    }


    /**
     * @return $this
     * @throws UnAuthorizedActionException
     * @throws UnexpectedInputException
     */
    public function updateIntervals()
    {
        if (request()->has(INTERVALS) && @count(request()->get(INTERVALS)) > 0) {
            $ids = [];
            foreach (request()->get(INTERVALS) as $interval) {
                $ids[] = $interval['id'];
                $this->planIntervals()->updateOrCreate(['interval_id' => $interval['interval']['id']], [
                    'price' => $interval['price'],
                    'user_id' => auth(SUPER_ADMIN_GUARD)->id(),
                ]);
            }
            $this->deActiveIntervals($ids);
            return $this;
        }
        throw new UnexpectedInputException(__('Subscription::lang.incorrect_intervals'), INVALID_INPUT);
    }


    public function changeStatus()
    {
        if ($this->hasUsers()) {
            return $this->update(['is_active' => !$this->is_active]);
        }

    }

    /**
     * use ConstantsResource to fetch the level's data
     *
     * this is used to solve translation problem
     *
     * @return ConstantsResource
     * @author Amr
     */
    public function getPlanLevelAttribute()
    {
        return new ConstantsResource($this->level);
    }


    public function migrations()
    {
        $migrations = [];
        if (isset($this->modules) && count($this->modules) > 0)
            foreach ($this->modules as $module) {
                if (isset($module->migrations) && count($module->migrations) > 0)
                    foreach ($module->migrations as $migration) {
                        $migrations[] = $migration;
                    }
            }
        return $migrations;
    }

//return $this->belongsToMany(TableMigration::class, 'module_migrations', 'module_id', 'migration_id', 'id', 'id');


}
