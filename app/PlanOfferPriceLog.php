<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PlanOfferPriceLog extends BaseModel
{
    use SoftDeletes;

    protected $fillable = [
        'user_id', 'currency_id', 'owner_id', 'starts_at', 'ends_at', 'price_month',
        'price_year', 'model_type', 'data'
    ];




    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function plan()
    {
        return $this->belongsTo(Plan::class, 'owner_id', 'id')->where('model_type','plan');
    }



    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function offer()
    {
        return $this->belongsTo(Plan::class, 'owner_id', 'id')->where('model_type','offer');
    }




}
