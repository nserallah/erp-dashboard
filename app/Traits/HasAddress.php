<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 02/02/2020
 * Time: 8:57 PM
 */

namespace App\Traits;


use Core\Company\Models\Address;

trait HasAddress
{

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function address()
    {
        return $this->morphOne(Address::class, 'address')->latest();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function addresses()
    {
        return $this->morphMany(Address::class, 'address')->latest();
    }

}