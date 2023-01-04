<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/getCourseFeatures',[HomeController::class, 'getCourseFeatures']);
Route::get('/getCoursePlan',[HomeController::class, 'getCoursePlan']);
Route::get('/getPaymentGuide',[HomeController::class, 'getPaymentGuide']);
Route::get('/getMoreSeries',[HomeController::class, 'getMoreSeries']);
Route::get('/getFreeClass',[HomeController::class, 'getFreeClass']);


Route::get('/{any?}', function () {
    return view('index');
})->where('any','.*');
