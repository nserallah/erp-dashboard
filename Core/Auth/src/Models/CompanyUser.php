<?php

namespace Core\Auth\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyUser extends CompanyPerson
{
    /**
     * model's database table
     *
     * @author Amr
     * @var string
     */
    protected $table = 'company_users';

    /**
     * get the admin who has added this user
     *
     * @return mixed
     * @author Amr
     */
    public function user()
    {
        return $this->belongsTo(Admin::class);
    }
}
