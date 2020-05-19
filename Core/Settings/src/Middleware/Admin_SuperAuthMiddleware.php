<?php


namespace Core\Settings\Middleware;


use Closure;
use Illuminate\Auth\AuthenticationException;

class Admin_SuperAuthMiddleware
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
        if (auth(SUPER_ADMIN_GUARD)->check())
            return $next($request);
        if (auth(ADMIN_GUARD)->check())
            return $next($request);
        throw new AuthenticationException();
    }
}