<?php

namespace Core\Account\Models;

use App\BaseModel;
use App\Company;
use Core\Auth\Models\Admin;

class Account extends BaseModel
{

    const FILLABLE = ['company_name', 'db_name', 'db_user', 'db_password', 'db_connection', 'is_active', 'company_id', 'last_payment'];
    /**
     * Database table
     *
     * @var string
     */
    protected $table = 'accounts';

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
    protected $fillable = self::FILLABLE;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['db_name', 'db_user', 'db_password', 'db_connection', 'is_active'];

    /**
     * account's company
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     * @author Amr
     */
    function company()
    {
        return $this->belongsTo(Company::class);
    }

    /**
     * @return mixed
     */
    public function createAdmin()
    {
        return Admin::create([
            'email' => $this->email,
            'password' => $this->password,
        ]);
    }
}
