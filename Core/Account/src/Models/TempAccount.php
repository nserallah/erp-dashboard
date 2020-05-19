<?php

namespace Core\Account\Models;

use App\BaseModel;
use App\Company;
use App\Email;
use Core\Auth\Models\Admin;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TempAccount extends BaseModel
{
    use SoftDeletes;
    /**
     * Database table
     *
     * @var string
     */
    protected $table = 'temp_accounts';

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
    protected $fillable = ['company_name', 'db_name', 'db_user', 'db_password', 'db_connection', 'is_active', 'company_id', 'last_payment', 'email', 'password'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['db_name', 'db_user', 'db_password', 'db_connection', 'is_active'];

    /**
     * temp account's company
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     * @author Amr
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    /**
     * get all emails related to this object
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     * @author Amr
     */
    public function emails()
    {
        return $this->morphOne(Email::class, 'email');
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
