<?php


namespace App\Database;


use AccountNatureSeeder;
use App\Company;
use App\Exceptions\DatabaseBackupException;
use App\Exceptions\MigrationException;
use App\Scopes\FilterScope;
use ChartTypeSeeder;
use Core\Account\Models\Account;
use FinalAccountType;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;

class DatabaseManager
{
    /**
     * the path of tenant migrations
     *
     * @author Amr
     * @var string
     */
    private $migrationPath = 'database/migrations/multi_tenant/';
    /**
     * database name
     *
     * @author Amr
     * @var $database
     */
    private $database;
    /**
     * database connection
     * @author Amr
     * @var $connection
     */
    private $connection;
    /**
     * Singleton instance
     * @author Amr
     * @var null
     */
    private static $INSTANCE = null;
    /**
     * database user
     *
     * @author Amr
     * @var $user
     */
    private $user;
    /**
     * database password
     *
     * @author Amr
     * @var $password
     */
    private $password;

    /**
     * company object
     *
     * @author WeSSaM
     * @var $company
     */

    private $company;

    /**
     * DatabaseManager constructor.
     * @param String $database
     * @author Amr
     */
    private function __construct(String $database = null)
    {
        if ($database)
            $this->setDatabase($database);                                                                                  // setup database Name @author Amr
    }

    /**
     * this function is used to create a single
     * instance of DatabaseManager at run time
     *
     * Singleton pattern
     *
     * @param String $database
     * @return DatabaseManager|null
     * @author Amr
     */
    public static function getInstance(String $database = null)
    {
        if (!self::$INSTANCE)                                                                                           // check if the $INSTANCE has value or not @author Amr
            self::$INSTANCE = new self($database);                                                                      // if $INSTANCE has not value, crate new object @author Amr
        return self::$INSTANCE;                                                                                         // return the instance @author Amr

    }

    /**
     * this function is used to create
     * new database by checking if there
     * is any existed one, if not
     * create new one otherwise
     * leave the function without any
     * action
     *
     * @return bool
     * @author Amr
     */
    public function createDatabase()
    {
        $databaseName = $this->getDatabase();                                                                           // get the name of tenant database @author amr
        $databaseResult = DB::statement("CREATE DATABASE IF NOT EXISTS $databaseName ; ");                       // create new database if is not existed @author Amr
        $userResult = $this->createDatabaseUser();
        return $databaseResult && $userResult;
    }

    /**
     * this function is used to setup the unified prefix
     * for any new database
     *
     * @param String $database
     * @return $this
     * @author Amr
     */
    public function setDatabase(String $database)
    {
        $this->database = DATABASE_NAME_PREFIX . $database;
        $this->setConnection();                                                                                         // setup connection name @author Amr
        $this->setUser();
        $this->setPassword();
        return $this;
    }

    /**
     * get Database name
     * @return mixed
     * @author Amr
     */
    public function getDatabase()
    {
        return $this->database;
    }

    /**
     * set up a prefix for any new connection
     *
     * @return $this
     * @author Amr
     */
    public function setConnection($connection = null)
    {
        $this->connection = $connection ? $connection : DATABASE_CONNECTION_PREFIX . $this->database;
        return $this;
    }

    /**
     * get connection name
     *
     * @return mixed
     * @author Amr
     */
    public function getConnection()
    {
        return $this->connection;
    }

    /**
     * this method is used to change the configuration
     * of database at run time according to the given
     * database name and connection
     *
     * @return $this
     *
     * @throws \App\Exceptions\UnknownDatabaseException
     * @author Amr
     */
    public function setUpConnectionConfiguration()
    {
        if ($company = request()->header('company')) {
            DB::setDefaultConnection('mysql');
            $account = Company::withoutGlobalScope(FilterScope::class)->orWhere('brief_name', 'like', "%$company%")->first()->account;

            if (!$account) {
                throw new \App\Exceptions\UnknownDatabaseException(trans('Auth::lang.unknown_database'));
            }
            $connectionName = $account->db_connection;                                                                   // get connection name @author Amr
            $databaseName = $account->db_name;                                                                         // get database name @author Amr
            $userName = $account->db_user;
            $password = $account->db_password;
        } else {
            $connectionName = $this->getConnection();                                                                       // get connection name @author Amr
            $databaseName = $this->getDatabase();                                                                           // get database name @author Amr
            $userName = $this->isDatabaseExisted() ? $this->getUser() : "root";
            $password = $this->isDatabaseExisted() ? $this->getPassword() : "root";
        }
        Config::set("database.connections.$connectionName", array(                                                      // setup the new configuration of database connection @author Amr
            'driver' => 'mysql',
            'host' => env('DB_HOST', '127.0.0.1'),
            'database' => strstr($databaseName, DATABASE_NAME_PREFIX) ? $databaseName : DATABASE_NAME_PREFIX . $databaseName,                                                                                // set the name of new database @author Amr
            'username' => $userName,
            'password' => $password,
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'unix_socket' => env('DB_SOCKET', '')
        ));

        /*
         * after push up the connections into app configurations
         * set the new connection as the default one
         * so application deals with this default one
         *
         * @author Amr
         */
        DB::setDefaultConnection($connectionName);
        return $this;
    }

    /**
     * check if the database is existed or not
     *
     *
     * @return bool
     * @author Amr
     */
    public function isDatabaseExisted()
    {
        $database = $this->getDatabase();                                                                               // get database name @author Amr
        $result = DB::select("select COUNT(schema_name) as is_existed from
                                    information_schema.schemata where schema_name = '$database';");                     // select the count of database that has the same given name from mysql databases @author Amr
        return array_pop($result)->is_existed == 1;                                                              // if count 1 return database existed otherwise is not existed @author Amr
    }

    /**
     * setup new database and it migrations
     * 1. if database was not existed, create new one
     * 2. change the default configuration
     * 3. create new tables
     *
     * @throws MigrationException
     * @author Amr
     */
    public function setUpNewDatabase()
    {
        $isExisted = $this->isDatabaseExisted();
        if (!$isExisted) {
            $this->createDatabase();
        }
        $this->setUpConnectionConfiguration();
        try {
            $this->migrate();
        } catch (MigrationException $exception) {
            throw $exception;
        }
        try {
            $this->seed();
        } catch (\Exception $exception) {
        }

    }

    /**
     * create all database tables that lie in
     * the database/migrations/multi_tenant/ path
     *
     *
     * @throws MigrationException
     * @author Amr
     */
    public function migrate()
    {
        try {
            $connection = $this->getConnection();
            Artisan::call('migrate', ['--database' => $connection, '--path' => $this->migrationPath]);
        } catch (MigrationException $exception) {
            throw $exception;
        }
    }

    /**
     * @param $plan
     * @throws MigrationException
     */
    public function newMigrate($plan = null)
    {
        try {
            $this->migrate();
            $connection = $this->getConnection();
            $migrations = $this->getMigrations($plan);
            foreach ($migrations as $migration) {
                if (!Schema::hasTable(get_table_from_migration($migration))) {
                    Artisan::call('migrate', ['--database' => $connection, '--path' => db_migrations_path($migration->path . '\\' . $migration->migration)]);
                }
            }
        } catch (MigrationException $exception) {
            throw $exception;
        }
    }

    /**
     * @param null $plan
     * @return mixed
     * @throws MigrationException
     */
    public function getMigrations($plan = null)
    {
        if (isset($plan))
            return $plan->migrations();

        else {
            $this->setCompany();
            if (isset($this->company->plan))
                return $this->company->plan->migrations();
        }
        throw new MigrationException;

    }

    /**
     * this function for seeding the branch database
     * @author Amr
     */
    public function seed($class = null)
    {
        $connection = $this->getConnection();
        if ($class) {
            Artisan::call('db:seed', ['--database' => $connection, '--class' => $class]);
            return;
        }
        $seedClasses = $this->getSeedsClasses();
        foreach ($seedClasses as $class) {
            Artisan::call('db:seed', ['--database' => $connection, '--class' => $class]);
        }
    }

    /**
     * this method is used to establish new connection with
     * company's database
     *
     * @return string
     * @throws \App\Exceptions\UnknownDatabaseException
     *
     * @author Amr
     */
    public function establishConnection()
    {
        try {
            $this->setUpConnectionConfiguration();


            $this->isConnected();
            return $this->getDefaultConnection();
        } catch (\Exception $exception) {
            throw new \App\Exceptions\UnknownDatabaseException(trans('Auth::lang.unknown_database'),
                UNKNOWN_DATABASE);
        }
    }

    /**
     * this function is used to test
     * database connection
     *
     * @author Amr
     */
    public function isConnected()
    {
        return DB::connection($this->getConnection())->getPdo();
    }

    /**
     * this method is used to return the default connection
     * application uses
     *
     * @return string
     * @author Amr
     */
    public function getDefaultConnection()
    {
        return \Illuminate\Support\Facades\DB::getDefaultConnection();
    }

    /**
     * this method is used to create new user for
     * each database
     *
     * @return bool
     * @author Amr
     */
    public function createDatabaseUser()
    {
        try {
            DB::statement("DROP USER '{$this->getUser()}'@'localhost'");
        } catch (\Exception $exception) {
        }
        try {

            DB::statement("CREATE USER '{$this->getUser()}'@'localhost' IDENTIFIED BY '{$this->getPassword()}';");
            DB::statement("GRANT ALL ON `{$this->getDatabase()}`.* TO '{$this->getUser()}'@'localhost';");       // give that user a full permission on his database @author Amr
        } catch (\Exception $exception) {
            return false;
        }
        return true;
    }

    /**
     * this method for creating database's backup
     *
     * @author Amr
     */
    public function createBackup()
    {
        $userName = \config('database.connections.mysql.username');                                                // get the username of super user, it has all permissions on all databases @author Amr
        $password = \config('database.connections.mysql.password');                                                // get the password of super user, it has all permissions on all databases @author Amr
        $dataBase = $this->getDatabase();
        $backupPath = \config('database.backup_path');
        if (!File::exists($backupPath)) {
            File::makeDirectory($backupPath);
        }
        Artisan::call('db:backup', ['user' => $userName, 'password' => $password,
            'database' => $dataBase, 'backupName' => $dataBase . '_backup']);                                           // create backup using custom laravel command line @author Amr
        $result = intval(Artisan::output());
        if (!$result)
            throw new DatabaseBackupException(trans('Auth::lang.backup_created_failed'));
        return true;
    }

    /**
     * set connection's user
     *
     * @return $this
     * @author Amr
     */
    public function setUser()
    {
        $this->user = md5(DATABASE_USER_PREFIX . $this->getDatabase());
        return $this;
    }

    /**
     * get connection's user
     *
     * @return mixed
     * @author Amr
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * set connection's password
     *
     * @return $this
     * @author Amr
     */
    public function setPassword()
    {
        $this->password = md5(DATABASE_PASSWORD_PREFIX . $this->getDatabase());
        return $this;
    }

    /**
     * get connection's password
     *
     * @return mixed
     * @author Amr
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * this classes will be seeded into
     * the new created database
     *
     * @return array
     * @author Amr
     */
    private function getSeedsClasses()
    {
        return [
//            'CopyConstantTable',
            'CompanyConstantsSeeder',

            'CopyCountrySeeder',
            'CopyCitySeeder',

//            'ChartTypeSeeder',
//            'AccountNatureSeeder',
//            'FinalAccountType',
            'LanguagesSeeder',
            'CurrenciesSeeder',
            'MoneySafeTransferStatusSeeder',
            'BankTransferSeeder',
            'TransferTypeSeeder',
//            'VendorTypeSeeder',
//            'RequestTypeSeeder',
//            'SaleOrderStatus',
            'ShippingTypeSeeder',
            'DiscountTypesSeeder',
            'CompanySizesSeeder',
            'PriceListSaleTargetTypeSeeder',
            'AddressTypeSeeder'
        ];
    }

    public function setCompany()
    {
        $db_name = $this->getDatabase();
        $this->setConnection('mysql');
        $this->company = Account::where('company_name', str_replace(DATABASE_NAME_PREFIX, '', $db_name))->first();
        $this->setConnection($db_name);
        return $this->company;
    }


}
