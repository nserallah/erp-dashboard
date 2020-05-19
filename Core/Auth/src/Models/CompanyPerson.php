<?php

namespace Core\Auth\Models;

use App\Exceptions\UnknownDatabaseException;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Mockery\Exception;
use Tymon\JWTAuth\Contracts\JWTSubject;

abstract class CompanyPerson extends Authenticatable implements JWTSubject
{
    use SoftDeletes;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->connection = database_connection();
    }

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
        'username', 'email', 'password', 'is_active',
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
     * every child should own his user
     * as belongsTo relation
     *
     * @return mixed
     * @author Amr
     */
    public abstract function user();

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

}
