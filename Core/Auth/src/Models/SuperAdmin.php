<?php

namespace Core\Auth\Models;

use App\City;
use App\Country;
use App\Plan;
use App\PlanOffer;
use Core\Company\Models\Vendor;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * Class SuperAdmin
 * @package App\Models
 * @created_by Amr
 */
class SuperAdmin extends Authenticatable implements JWTSubject
{
    use SoftDeletes;
    /**
     * model's database table
     *
     * @author Amr
     * @var string
     */
    protected $table = 'super_admins';
    /**
     * database table's primary key
     *
     * @author Amr
     * @var string
     */
    protected $primaryKey = 'id';
    /**
     * table's columns
     *
     * @author Amr
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password', 'mobile', 'city_id', 'address',
        'is_active', 'nationality_id',
        'user_id'
    ];
    /**
     * columns that not shown when developer fetches
     *  resource
     *
     * @author Amr
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token'
    ];

    /**
     * get the parent superAdmin
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author Amr
     */
    public function user()
    {
        return $this->belongsTo(SuperAdmin::class);
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function plans()
    {
        return $this->hasMany(Plan::class, 'user_id', 'id');
    }


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function offers()
    {
        return $this->hasMany(PlanOffer::class, 'user_id', 'id');
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
    public function cities()
    {
        return $this->hasMany(City::class, 'user_id', 'id');
    }
}
