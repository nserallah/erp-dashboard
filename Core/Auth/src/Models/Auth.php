<?php

namespace Core\Auth\Models;

use Illuminate\Database\Eloquent\Model;

class Auth extends Model
{


    /**
     * Database table
     *
     * @var string
     */
    protected $table = 'auths';

    /**
     * table's primary key
     *
     * @var string
     */
    protected $primaryKey = 'id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];
}
