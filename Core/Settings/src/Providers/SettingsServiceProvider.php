<?php


namespace Core\Settings\Providers;

use App\Logic\ImageRepository;
use App\Repositories\ModelRepository;
use Core\Settings\Interfaces\CategoryInterface;
use Core\Settings\Interfaces\Constants\ConstantsInterface;
use Core\Settings\Models\Category;
use Core\Settings\Observers\CategoryObserver;
use Core\Settings\Repository\CategoryRepository;
use Core\Settings\Repository\Constants\ConstantsRepository;
use Core\Settings\Repository\GeneralAddressRepository;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class SettingsServiceProvider extends ServiceProvider
{

    // route base path for the package
    private $routeBasePath = __DIR__ . '/../routes/';

    public function boot()
    {
        // publish package's routes
        $this->loadRoutesFrom($this->routeBasePath . 'web.php');
        //public packages resources
        $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'Settings');
        //public packages migrations
        $this->loadMigrationsFrom(__DIR__ . '/../Migrations');
        // load package's translation files
        $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'Settings');
        // public package's configurations
        $this->publishes([
            __DIR__ . '/../Config/SettingsConfig.php' => config_path('SettingsConfig.php'),
        ]);
        // publish package's api routes
        $this->mapApiRoutes();
        $this->registerHelpers();
        $this->bindObservers();


    }


    public function register()
    {
        $this->app->bind(ConstantsInterface::class, ConstantsRepository::class);                       // bing the interface with Constants
         $this->app->bind(GeneralAddressRepository::class,GeneralAddressRepository::class);
        Route::pattern('constant', '[0-9]+');
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

    /**
     * Register helpers file
     * @author Amr
     */
    public function registerHelpers()
    {
        // Load the helpers in app/Http/helpers.php
        if (file_exists($file = __DIR__ . '/../Helpers/CommonFunctions.php')) {
            require $file;
        }
    }

    function bindObservers()
    {
    }
}