<?php


namespace Core\Auth\Controllers;


use App\Database\DatabaseManager;
use App\Exceptions\DatabaseBackupException;
use App\Exceptions\UserNotActiveException;
use App\Exceptions\UserNotFoundException;
use Core\Auth\Models\SuperAdmin;
use Core\Auth\Requests\AuthRequest;
use Illuminate\Http\Request;
use Mockery\Exception;
use Tymon\JWTAuth\Exceptions\JWTException;

class SuperAdminController extends AuthController
{

    private $databaseManager;

    public function __construct(DatabaseManager $databaseManager)
    {
        $this->databaseManager = $databaseManager;
    }

    /**
     * superAdmin Login
     * check superAdmin credentials
     * and if he is active or not
     *
     * @param AuthRequest $request
     * @return mixed
     * @author Amr
     */
    public function login(AuthRequest $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            $token = parent::loginCore($credentials, SuperAdmin::class, SUPER_ADMIN_GUARD);
            return response()->json($token);
        } catch (UserNotFoundException $userNotFoundException) {
            return response()->api(ERROR_RESPONSE, $userNotFoundException->getMessage(), [], USER_NOT_FOUND);
        } catch (UserNotActiveException $userNotActiveException) {
            return response()->api(ERROR_RESPONSE, $userNotActiveException->getMessage(), [], USER_NOT_ACTIVE);
        } catch (JWTException $JWTException) {
            return response()->api(ERROR_RESPONSE, trans('Auth::lang.user_not_found'), [], USER_NOT_FOUND);
        }
    }

    /**
     * create new backup
     *
     * @param Request $request
     * @param $company
     * @return mixed
     */
    public function backup(Request $request, $company)
    {

        try {
            $this->databaseManager->setDatabase($company);
            $this->databaseManager->setUpConnectionConfiguration();
            $this->databaseManager->createBackup();
            return response()->api(SUCCESS_STATUS, trans('Auth::lang.backup_created_successfully'));
        } catch (DatabaseBackupException $exception) {
            return response()->api(ERROR_RESPONSE, $exception->getMessage(), [], BACKUP_ERROR);
        }
    }

    /**
     * check database existence
     *
     * @param $company
     * @return mixed
     * @author Amr
     */
    public function checkDatabase($company)
    {
        $this->databaseManager->setDatabase($company);
        $result = $this->databaseManager->isDatabaseExisted();
        return response()->api(SUCCESS_STATUS, trans($result ? 'Auth::lang.database_existed' : 'Auth::lang.database_not_existed'), $result);

    }
}