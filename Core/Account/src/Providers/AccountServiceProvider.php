<?php

namespace Core\Account\Providers;

use App\Company;
use Core\Account\Interfaces\AccountInterface;
use Core\Account\Interfaces\CompanyInterface;
use Core\Account\Interfaces\TempAccountInterface;
use Core\Account\Observers\CompanyObserver;
use Core\Account\Repository\AccountRepository;
use Core\Account\Repository\CompanyRepository;
use Core\Account\Repository\TempAccountRepository;
use Core\Settings\Repository\Constants\ConstantsRepository;
use Illuminate\Support\Facades\Route;
use \Illuminate\Support\ServiceProvider;

class AccountServiceProvider extends ServiceProvider
{

    // route base path for the package
    private $routeBasePath = __DIR__ . '/../routes/';

    public function boot()
    {
        // publish package's routes
        $this->loadRoutesFrom($this->routeBasePath . 'web.php');
        //public packages resources
        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'Account');
        //public packages migrations
        $this->loadMigrationsFrom(__DIR__ . '/../Migrations');
        // load package's translation files
        $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'Account');
        // public package's configurations
        $this->publishes([
            __DIR__ . '/../Config/AccountConfig.php' => config_path('AccountConfig.php'),
        ]);
        // publish package's api routes
        $this->mapApiRoutes();

        Company::observe(CompanyObserver::class);
    }


    public function register()
    {
        $this->app->bind(CompanyInterface::class, CompanyRepository::class);                       // bing the interface with Company @author Amr
        $this->app->bind(AccountInterface::class, AccountRepository::class);                       // bing the interface with Account @author Amr
        $this->app->bind(TempAccountInterface::class, TempAccountRepository::class);               // bind the interface with TempAccount @author Amr

    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->group($this->routeBasePath . 'api.php');
    }

}