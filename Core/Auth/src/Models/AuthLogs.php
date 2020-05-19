<?php


namespace Core\Auth\Models;


use Illuminate\Database\Eloquent\Model;

class AuthLogs extends Model
{
    /**
     * model's table
     *
     * @author Amr
     * @var string
     */
    protected $table = 'auth_logs';
    /**
     * table's attribute
     *
     * @author Amr
     * @var array
     */
    protected $fillable = ['user_id', 'model', 'navigator', 'logged_at', 'type'];
}