<?php
///php artisan krlove:generate:model User --table-name=users
use App\Http\Controllers\main\homeController;
use App\Http\Controllers\main\signupController;
use App\Http\Controllers\categoryController;
use App\Http\Controllers\loginController;
use App\Http\Controllers\userController;
use App\Http\Controllers\posController;
use App\Http\Controllers\customerController;
use App\Http\Controllers\productController;
Route::resource('/', loginController::class);

Route::resource('home', homeController::class);

Route::resource('signup', signupController::class);
Route::post('register', [signupController::class, 'registration']);
Route::get('qr', function () {
    return view('research');

});

/*********************************/


Route::group(['middleware' => ['web', 'auth']], function () {


    Route::resource('user', userController::class);
    Route::resource('customer', customerController::class);
    Route::resource('pos', posController::class);
    Route::resource('product', productController::class);

    /*********************************/


    Route::resource('category', categoryController::class);


    /*********************************/

    Route::get('logout', [loginController::class, 'logout']);


    /*********************************/


});


/*********************************/
Route::get('/migrate', function () {
    ini_set('max_execution_time', 300);
    Artisan::call('migrate:fresh --seed', []);


    return redirect('/');
});

Route::get('/seed', function () {
    ini_set('max_execution_time', 300);

    Artisan::call('db:seed', []);

    return redirect('/');
});

/*********************************/

Route::get('/reset', function () {
    ini_set('max_execution_time', 300);
    Artisan::call('migrate:reset', ['--force' => true]);
    echo "migration done.";
    return redirect('/');
});

Route::post('login', [loginController::class, 'login']);
Route::get('admin', [loginController::class, 'index'])->name('login');
