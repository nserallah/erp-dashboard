<?php

namespace App\Http\Middleware;

use App\Company;
use App\Database\DatabaseManager;
use Closure;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class FiltersMiddleware
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
//        if ($request->has('filter')) {
//            $request['filter'] = $filters = app()->makeWith(\App\Filters\Filter::class, $request->all())->reformStructure();
//            if ($filters['query'] == '' && empty($filters['values']) && empty($filters['relations'])) {
//                unset($request['filter']);
//            }
//        }
        return $next($request);
    }
}
