<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PlanModule extends BaseModel
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 'plan_id', 'module_id', 'is_active',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function plan()
    {
        return $this->belongsTo(Plan::class,'plan_id','id')->withDefault();
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function module()
    {
        return $this->belongsTo(Constant::class,'module_id','id')->withDefault();
    }

}
