<?php

namespace App\Http\Endpoints;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthEndpoint extends Endpoint
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $user = $this->guard()->getProvider()->retrieveByCredentials($credentials);
        $this->hasValidCredentials($user, $credentials);
        if (! $this->hasValidCredentials($user, $credentials)) {
            return response()->json(['status' => false, 'error' => 'Unauthorized'], 401);
        }
        if (! $token = $this->guard()->login($user)) {
            return response()->json(['status' => false, 'error' => 'Unauthorized'], 401);
        }
        return $this->authenticated($request, $user, $token);
    }

    public function validateOtp(Request $request)
    {
        $credentials = $request->only('otp');
        $user = $this->guard()->getProvider()->retrieveByCredentials($credentials);
        if (! $user) {
            return response()->json(['status' => false, 'error' => 'Invalid OTP'], 401);
        }

//        dd($this->guard()->getProvider()->getHasher()->check($plain, $user->getAuthPassword()));
        if (! $token = $this->guard()->login($user)) {
            return response()->json(['status' => false, 'error' => 'Unauthorized'], 401);
        }

        return $this->authenticated($request, $user, $token);
    }

    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['status' => true, 'message' => 'Successfully logged out']);
    }




    public function login_(Request $request)
    {
        $this->validateLogin($request);

        if ($this->attemptLogin($request)) {
            return $this->authenticated($request, $this->guard()->user());
        }

        throw ValidationException::withMessages([
            'email' => [trans('auth.failed')],
        ]);
    }


    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function register(Request $request)
    {
        $this->registerValidator($request->all())->validate();

        $user = $this->create($request->all());

        return $this->registered($request, $user);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function registerValidator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    protected function validateLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
    }

    protected function attemptLogin(Request $request)
    {
        return $this->guard()->attempt($request->only('email', 'password'));
    }

    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function registered(Request $request, $user)
    {
        return [
            'status' => 1,
            'name' => $user->name,
            'email' => $user->email,
        ];
    }

    protected function authenticated(Request $request, $user, $token)
    {
        return [
            'status' => 1,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60
        ];
    }

    protected function guard()
    {
        return Auth::guard('api');
    }

    protected function hasValidCredentials($user, $credentials)
    {
        return ! is_null($user) && $this->guard()->getProvider()->validateCredentials($user, $credentials);
    }
}
