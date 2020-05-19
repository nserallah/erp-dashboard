<?php

namespace App\Http\Middleware;

use Closure;

class LanguageMiddleware
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
        /**
         * check if the languages is sent with
         * request, if so change the dashboard language
         * @author Amr
         */
        if ($lang = $request->header('lang')) {
            app()->setLocale($lang);                    // update the language @author Amr
        }
        return $next($request);
    }
}
