<?php

namespace App\Http\Middleware;

use App\Database\DatabaseManager;
use Closure;
use Core\Auth\Models\Admin;
use Illuminate\Support\Facades\DB;

class DatabaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        /*
         * this function is used to establish connection
         * with company's database.
         *
         * if database we used was wrong,
         *  it will throw an exception
         *
         * @author Amr
         */
        database_connection();
        return $next($request);
    }
}
