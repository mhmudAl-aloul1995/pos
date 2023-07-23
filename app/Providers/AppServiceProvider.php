<?php

namespace App\Providers;

use App\Version;
use Illuminate\Support\ServiceProvider;
use Schema;
use View;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (Schema::hasTable('users')) {

            $lastVersion = null;


            View::share(['lastVersion' => $lastVersion]);
        }
        Schema::defaultStringLength(191);
    }
}
