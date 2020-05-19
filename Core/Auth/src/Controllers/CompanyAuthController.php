<?php


namespace Core\Auth\Controllers;


use App\Database\DatabaseManager;
use App\Exceptions\UserNotActiveException;
use App\Exceptions\UserNotFoundException;
use Core\Auth\Models\Admin;
use Core\Auth\Models\CompanyUser;
use Core\Auth\Requests\CompanyAdminUserRequest;
use Tymon\JWTAuth\Exceptions\JWTException;

class CompanyAuthController extends AuthController
{
    /**
     * database Manager instance
     *
     * @author Amr
     * @var DatabaseManager
     */
    private $databaseManager;

    /**
     * CompanyAdminController constructor.
     *
     * @param DatabaseManager $databaseManager
     * @author Amr
     */
    function __construct(DatabaseManager $databaseManager)
    {
        $this->databaseManager = $databaseManager;                                                                      // use laravel service container to instantiate DatabaseManager @author Amr
        $this->databaseManager->setDatabase((string)request()->header('company'));
    }

    /**
     *
     * this method is used to check $credentials using
     * company Admin table and users table
     * 1. check $credentials using admin table
     * 2. check $credentials using user table
     *
     * @param CompanyAdminUserRequest $request
     * @return mixed
     * @author Amr
     */
    function login(CompanyAdminUserRequest $request)
    {
        $this->databaseManager->setDatabase(request()->header('company'));                                         // set the database name, so default connection will be changed automatically @author Amr
        $isExisted = $this->databaseManager->isDatabaseExisted();                                                       // check if the database existed @author Amr

        if (!$isExisted)
            return response()->api(ERROR_RESPONSE, trans('Auth::lang.company_no_supported'), [], UNREGISTERED_COMPANY);// database user has sent is not existed @author Amr
        $this->databaseManager->setUpConnectionConfiguration();                                                         // update the default configuration of database @author Amr
        $credentials = $request->only('email', 'password');                                                       // get the user's credentials from request @author Amr
        try {
            $token = $this->loginAdmin($credentials);                                                                   // check if credentials belong to Admin if so return a token otherwise throw UserNotFoundException @author Amr
            return response()->json(array_merge($token, ['auth' => [
                    'username' => isset(auth_user()->username) ? auth_user()->username : @explode('@',auth_user()->email)[0],
                    'email' => auth_user()->email]]
            ));       // user has authenticated successfully, his type and token will be returned as response @author Amr
        } catch (UserNotFoundException $userNotFoundException) {                                                        // if user was not found, do nothing to check these credentials for company's user @author Amr
        } catch (UserNotActiveException $userNotActiveException) {
            return response()->api(ERROR_RESPONSE, $userNotActiveException->getMessage(), [], USER_NOT_ACTIVE);         // throw exception if user is not active @author Amr
        } catch (JWTException $JWTException) {
        }                                                                                                               // this exception means user not found but it's came from JWT library @author Amr
        try {
            $token = $this->loginUser($credentials);                                                                    // if the credentials checking failed, check credentials again in the user table @author Amr
            return response()->json($token);                                                                            // if checking went right, return the generated token and type @author Amr
        } catch (UserNotFoundException $userNotFoundException) {
            return response()->api(ERROR_RESPONSE, $userNotFoundException->getMessage(), [], USER_NOT_FOUND);           // User not found @author Amr
        } catch (UserNotActiveException $userNotActiveException) {
            return response()->api(ERROR_RESPONSE, $userNotActiveException->getMessage(), [], USER_NOT_ACTIVE);         // throw exception if user is not active @author Amr
        } catch (JWTException $JWTException) {
            return response()->api(ERROR_RESPONSE, trans('Auth::lang.user_not_found'), [], USER_NOT_FOUND);        // User not found from JWT library @author Amr

        }
    }

    /**
     * check company's user credentials
     *
     * @param array $request
     * @return String
     * @throws JWTException
     * @author Amr
     */
    function loginUser(array $request)
    {
        $credentials = $request;
        return parent::loginCore($credentials, CompanyUser::class, USER_GUARD);                         // check company user's credentials @author Amr
    }

    /**
     * check company's Admin credentials
     *
     * @param array $request
     * @return String
     * @throws JWTException
     * @author Amr
     */
    function loginAdmin(array $request)
    {
        $credentials = $request;
        return parent::loginCore($credentials, Admin::class, ADMIN_GUARD);                               // check company admin's credentials @author Amr
    }

    /**
     * show company login form
     * according to the passed company brief_name
     *
     * @param $company
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @author Amr
     */
    function showCompanyLoginForm()
    {
        return view('company');
    }


    function testing($company)
    {
        $this->databaseManager->setDatabase($company);
        $this->databaseManager->createDatabase();
        $this->databaseManager->setUpConnectionConfiguration();
        $this->databaseManager->migrate();
        $this->databaseManager->seed();
    }

}