<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;

class PlanIntervalPrice extends BaseModel
{
    use SoftDeletes;
    const FILLABLE = [
        'interval_id', 'plan_id', 'price', 'is_active',
    ];
    protected $fillable = self::FILLABLE;
    protected $with = ['interval'];

    protected $appends = ['name'];


    /**
     * @author WeSSaM
     * @return string
     */
    public function getNameAttribute()
    {
        return isset($this->interval->name) ? $this->interval->name : '';
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function interval()
    {
        return $this->belongsTo(Constant::class, 'interval_id', 'id');
    }
}
