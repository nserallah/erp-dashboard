<?php

namespace App\Providers;

use App\BaseModel;
use App\Database\DatabaseManager;
use App\Filters\Filter;
use App\Interfaces\AttachmentInterface;
use App\Observers\ModelObserver;
use App\Repositories\ImageRepository;
use Core\Auth\Models\SuperAdmin;
use function foo\func;
use Illuminate\Cache\Repository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use mysql_xdevapi\Exception;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Schema::defaultStringLength(191);
        $this->app->singleton(DatabaseManager::class, function ($app) {
            return DatabaseManager::getInstance();
        });
        $this->app->singleton(Filter::class, function ($app, $param) {
            return new Filter($param);
        });
        $this->app->bind(AttachmentInterface::class, ImageRepository::class);

//
//        $this->app->afterResolving(function ($object, $t) {
//            if (gettype($object) == 'object' && strpos(strtolower(get_class($object)), 'repository') && get_class($object) != Repository::class) {
//                $reflection = new \ReflectionClass($object);
//                if ($reflection->getConstructor() && !empty($attributes = $reflection->getConstructor()->getParameters()) && request()['resource_path'] == null) {
//                    request()['resource_path'] = $attributes[0]->getClass()->getName();
//                    return;
//                }
//            }
//        });

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

    }

//    private function priventedTypes()
//    {
//        return [
//            'string',
//
//        ];
//    }
}
