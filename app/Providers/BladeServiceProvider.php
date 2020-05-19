<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class BladeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::directive('wrap_pdf_string', function ($string) {
            return "<?php echo wordwrap($string, PDF_STRING_MAX_LENGTH, PDF_STRING_DELIMITER, true) ?>";
        });
    }
}
