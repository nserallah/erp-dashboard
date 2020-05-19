<?php

namespace Core\Auth\Controllers;

use App\Exceptions\UserNotActiveException;
use Core\Auth\Events\UserAuthentication;
use Core\Auth\Models\Admin;
use Core\Auth\Models\SuperAdmin;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Mockery\Exception;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\UserNotDefinedException;

class AuthController extends BaseController
{

    /**
     * this method is used to sign in
     * the users into the system
     *
     * it is used widely so developer should
     * pass the the auth middleware, model class path,
     * and $credentials
     *
     *
     * @param $credentials
     * @param $modelPath
     * @param string $auth
     * @return Array
     * @throws JWTException
     * @throws UserNotFoundEception
     * @throws UserNotActiveException
     * @author Amr
     */
    public function loginCore($credentials, $modelPath, $auth = 'api'): array
    {
        Config::set('jwt.user', $modelPath);                        // change jwt user @author Amr
        Config::set('auth.providers.users.model', $modelPath);      // load the user model @author Amr
        try {
            if (!$token = auth($auth)->attempt($credentials)) {
                throw new UserNotDefinedException(trans('Auth::lang.user_not_found'));
            }
        } catch (JWTException $JWTException) {
            throw $JWTException;
        }
        if ($this->guard($auth)->user() && $this->guard($auth)->user()->is_active == 0)
            throw new UserNotActiveException(trans('Auth::lang.user_not_active_found'));        // register user's login transaction @author Amr
        event(new UserAuthentication(LOGIN_TRANSACTION));
        return $this->authenticated($token);

    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout($auth = 'api')
    {
        if (auth($auth)->check()) {
            $user = auth($auth)->user();
            auth($auth)->logout();
        } else if (auth(ADMIN_GUARD)->check()) {
            $user = auth(ADMIN_GUARD)->user();
            auth(ADMIN_GUARD)->logout();
        } else if (auth(USER_GUARD)->check()) {
            $user = auth(USER_GUARD)->user();
            auth(USER_GUARD)->logout();
        }
        event(new UserAuthentication(LOGOUT_TRANSACTION, $user));                       // register user's logout transaction @author Amr
        return response()->api(SUCCESS_RESPONSE, trans('Auth::lang.logged_out_successfully'));
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh($auth = 'api')
    {
        $data = null;
        $token = null;
        if (auth($auth)->check()) {
            $token = auth($auth)->refresh();
        } elseif (auth(ADMIN_GUARD)->check()) {
            $token = auth($auth)->refresh();
        } elseif (auth(USER_GUARD)->check()) {
            $token = auth($auth)->refresh();
        }
        if (is_null($data))
            return response()->api(ERROR_RESPONSE, trans('Auth::lang.token_refreshed_error'));
        event(new UserAuthentication(3));                       // register user's logout transaction @author Amr
        return $this->authenticated($token);
    }

    /**
     *
     * @param $token
     * @return array
     */
    protected function authenticated($token)
    {
        $data = [
            'status' => 1,
            'expires_in' => $this->guard()->factory()->getTTL() * 60,
            'token_type' => 'Bearer',
            'access_token' => $token,
        ];
        $companyName = \request()->header('company');
        if ($companyName) {
            $data['company'] = $companyName;
        }
        return $data;
    }

    /**
     * return the auth guard according to the passed
     * guard name
     *
     * @param null $guard
     * @return mixed
     * @author Amr
     */
    protected function guard($guard = null)
    {
        if ($guard)
            return Auth::guard($guard);
        return Auth::guard('api');
    }
}
