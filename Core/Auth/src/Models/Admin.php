<?php

namespace Core\Auth\Models;

use App\City;
use App\Country;
use Core\Company\Models\Address;
use Core\Company\Models\Branch;
use Core\Company\Models\Inventory;
use Core\Payment\Models\Cheque;
use Core\Settings\Models\Brand;
use Core\Settings\Models\Category;
use Core\Settings\Models\Group;
use Core\Settings\Models\Tax;
use Core\Settings\Models\Unit;
use Finance\Http\Models\CompanyBankAccount;
use Finance\Http\Models\CompanyCheque;
use Finance\Http\Models\UserBankAccount;
use SupplierRelationship\Models\Vendor;

/**
 * Class Admin
 * @package App\Models
 * @created_by Amr
 */
class Admin extends CompanyPerson
{

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
    }

    /**
     * model's database table
     *
     * @author Amr
     * @var string
     */
    protected $table = 'admins';

    protected $appends = ['company'];

    /**
     * get the parent admin
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author Amr
     */
    public function user()
    {
        return $this->belongsTo(Admin::class);
    }

    /**
     * @return mixed
     */
    public function getCompany()
    {
        return $this->company;
    }
    /**
     * @return mixed
     */
    public function getCompanyAttribute()
    {
        return $this->company;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function units()
    {
        return $this->hasMany(Unit::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function brands()
    {
        return $this->hasMany(Brand::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function taxes()
    {
        return $this->hasMany(Tax::class, 'user_id', 'id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function branches()
    {
        return $this->hasMany(Branch::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function inventories()
    {
        return $this->hasMany(Inventory::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function countries()
    {
        return $this->hasMany(Country::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function categories()
    {
        return $this->hasMany(Category::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function cities()
    {
        return $this->hasMany(City::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function groups()
    {
        return $this->hasMany(Group::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function vendors()
    {
        return $this->hasMany(Vendor::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function addresses()
    {
        return $this->hasMany(Address::class, 'user_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function companyBankAccounts()
    {
        return $this->hasMany(CompanyBankAccount::class, 'user_id', 'id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userBankAccounts()
    {
        return $this->hasMany(UserBankAccount::class, 'user_id', 'id');
    }


    /**
     * @author WeSSaM
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function cheques()
    {
        return $this->hasMany(CompanyCheque::class, 'user_id', 'id');
    }


}
