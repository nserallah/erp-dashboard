<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 02/02/2020
 * Time: 8:57 PM
 */

namespace App\Traits;


use Core\Company\Models\FinanceInfoSetting;

trait HasFinancialInfo
{

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function financialInfo()
    {
        return $this->morphOne(FinanceInfoSetting::class, 'finance')->withoutGlobalScopes()->latest();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function financialInfos()
    {
        return $this->morphMany(FinanceInfoSetting::class, 'finance')->withoutGlobalScopes()->latest();
    }

}