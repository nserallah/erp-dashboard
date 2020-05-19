<?php
/**
 * Created by PhpStorm.
 * User: WeSSaM
 * Date: 08/03/2020
 * Time: 6:24 PM
 */

namespace App\Install;


use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use mysqli;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class App
{


    public function setup()
    {
        $this->setupEnvFile();
//        $this->generateAppKey();
//        $this->setupJWT();
    }

    public function createNewDatabase($user, $password, $db_name = 'unified_accounting')
    {
        echo("Creating Database\n");
        $conn = new mysqli(env('DB_HOST'), $user, $password);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $sql = "CREATE DATABASE $db_name ;";
        if ($conn->query($sql) === TRUE) {
            echo("Database Created Successfully\n");
        } else {
            echo "the chosen database is already existed \n" . $conn->error;
            throw new \Exception('the chosen database is already existed');
        }
        $conn->close();
    }

    /**
     * @param $user
     * @param $password
     * @param $db_name
     */
    public function setupEnvFile($user = 'root', $password = '', $db_name = 'unified_accounting')
    {
        echo("Creating Env File \n");

        $this->changeEnvironmentVariable('DB_USERNAME', $user);
        $this->changeEnvironmentVariable('DB_PASSWORD', $password);
        $this->changeEnvironmentVariable('DB_DATABASE', $db_name);
        $envExamplePath = base_path(".env.example");
        $envPath= base_path(".env");
//        dd($envExamplePath);

        echo copy($envExamplePath,$envPath);
//
//        $process = new Process(['cp', '.env.example', '.env']);
//        $process->run();
//        if (!$process->isSuccessful()) {
//            throw new ProcessFailedException($process);
//        }
//
//
//        echo $process->getOutput();
        echo("Env File Created Successfully \n");


        $this->clearCache();
        $this->setupConfig($db_name, $user, $password);
        $this->createNewDatabase($user, $password, $db_name);


    }

    public function setupConfig($db_name, $user, $password)
    {
        Config::set("database.connections.setUp", array(                                                      // setup the new configuration of database connection @author Amr
            'driver' => 'mysql',
            'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', 'localhost'),
            'port' => env('DB_PORT', '3306'),
            'database' =>$db_name,
            'username' => $user,
            'password' => $password,
            'unix_socket' => env('DB_SOCKET', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'prefix_indexes' => true,
            'strict' => true,
            'engine' => null,
            'options' => extension_loaded('pdo_mysql') ? array_filter([
                \PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
            ]) : [],
        ));
        /**
         * change the default connection at run time
         * @author Amr
         */
        DB::setDefaultConnection("setUp");


    }
//    private function create


    /**
     * @param $key
     * @param $value
     */
    private function changeEnvironmentVariable($key, $value)
    {
        $path = base_path('.env.example');

        if (is_bool(env($key))) {
            $old = env($key) ? 'true' : 'false';
        } elseif (env($key) === null) {
            $old = 'null';
        } else {
            $old = env($key);
        }

        if (file_exists($path)) {
            file_put_contents($path, str_replace(
                "$key=" . $old, "$key=" . $value, file_get_contents($path)
            ));
        }
    }


    public function generateAppKey()
    {
        echo "Generating App Key \n";
        Artisan::call('key:generate');
        echo "App Key generated successfully \n";
    }

    public function setupJWT()
    {
        echo "Generating JWT secret \n";
        Artisan::call('jwt:secret');
        echo "JWT secret key generated successfully \n";
    }


    public function clearCache()
    {
        Artisan::call('cache:clear');
    }


    public function migrate()
    {
        echo "Make migrations \n";
        Artisan::call('migrate --force');
        echo "Successfully migrated \n";
    }

    public function seed()
    {
        echo "Make seeding \n";
        Artisan::call('db:seed --force');
        echo "Seeding Completed Successfully  \n";
    }

}
