<?php

namespace Core\Auth\Providers;

use Illuminate\Support\Facades\Route;
use \Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{

    // route base path for the package
    private $routeBasePath = __DIR__ . '/../routes/';

    public function boot()
    {
        // publish package's routes
        $this->loadRoutesFrom($this->routeBasePath.'web.php');
        //public packages resources
        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'Auth');
        //public packages migrations
         $this->loadMigrationsFrom(__DIR__.'/../Migrations');
         // load package's translation files
         $this->loadTranslationsFrom(__DIR__.'/../Resources/lang', 'Auth');
        // public package's configurations
        $this->publishes([
            __DIR__ . '/../Config/AuthConfig.php' => config_path('AuthConfig.php'),
        ]);
        // publish package's api routes
         $this->mapApiRoutes();
    }


    public function register()
    {

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
             ->group($this->routeBasePath.'api.php');
    }

}