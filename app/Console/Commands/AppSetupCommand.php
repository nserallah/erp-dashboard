<?php

namespace App\Console\Commands;

use App\Install\App;
use Illuminate\Console\Command;

class AppSetupCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:setup {mysql_user} {db_name} {mysql_password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setup Application';

    private $app;

    /**
     * Create a new command instance.
     *
     * @param App $app
     * @author WeSSaM
     */
    public function __construct(App $app)
    {
        $this->app = $app;
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $user = $this->argument('mysql_user');
        $password = $this->argument('mysql_password');
        $db_name = $this->argument('db_name');
        shell_exec("npm install");
        shell_exec("npm rebuild node-sass");
        shell_exec("npm install node-pre-gyp -g");
        shell_exec("npm install firebase@latest");
        try {
            $this->app->setupEnvFile($user, $password, $db_name);
            $this->app->migrate();
            $this->app->seed();
        } catch (\Exception $exception) {
        }

        $this->app->generateAppKey();
        $this->app->setupJWT();
        $this->app->clearCache();


//        $this->app->setupConfig($user, $password, $db_name);
//        $this->app->createNewDatabase($db_name);
    }
}
