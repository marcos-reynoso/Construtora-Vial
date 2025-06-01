<?php

use App\Http\Controllers\AssigmentController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\MachineController;
use App\Http\Controllers\MaintenanceController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\ReasonEndController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\WorkController;
use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    /*    Machines */
    Route::get('/machines', [MachineController::class, 'index'])->name('machines.index');

    Route::get('/machines/search', [MachineController::class, 'search'])->name('machines.search');
    Route::get('/machines/create', [MachineController::class, 'create'])->name('machines.create');

    Route::post('/machines', [MachineController::class, 'store'])->name('machines.store');

    Route::get('/machines/{machine}/edit', [MachineController::class, 'edit'])->name('machines.edit');
    Route::put('/machines/{machine}', [MachineController::class, 'update'])->name('machines.update');
    Route::delete('/machines/{machine}', [MachineController::class, 'destroy'])->name('machines.destroy');

    /* Types */
    Route::get('/types', [TypeController::class, 'index'])->name('types.index');
    Route::get('types/create', [TypeController::class, 'create'])->name('types.create');
    Route::post('types', [TypeController::class, 'store'])->name('types.store');
    Route::get('types/{type}/edit', [TypeController::class, 'edit'])->name('types.edit');
    Route::put('types/{type}', [TypeController::class, 'update'])->name('types.update');
    Route::delete('types/{type}', [TypeController::class, 'destroy'])->name('types.destroy');

    /* Brands */
    Route::get('/brands', [BrandController::class, 'index'])->name('brands.index');
    Route::get('brands/create', [BrandController::class, 'create'])->name('brands.create');
    Route::post('brands', [BrandController::class, 'store'])->name('brands.store');
    Route::get('brands/{brand}/edit', [BrandController::class, 'edit'])->name('brands.edit');
    Route::put('brands/{brand}', [BrandController::class, 'update'])->name('brands.update');
    Route::delete('brands/{brand}', [BrandController::class, 'destroy'])->name('brands.destroy');

    /*  ReasonEnd */
    Route::get('/reasonend', [ReasonEndController::class, 'index'])->name('reasons-end.index');
    Route::get('/reasonend/create', [ReasonEndController::class, 'create'])->name('reasons-end.create');
    Route::post('/reasonend', [ReasonEndController::class, 'store'])->name('reasons-end.store');
    Route::get('/reasonend/{reasonEnd}/edit', [ReasonEndController::class, 'edit'])->name('reasons-end.edit');
    Route::put('/reasonend/{reasonEnd}', [ReasonEndController::class, 'update'])->name('reasons-end.update');
    Route::delete('/reasonend/{reasonEnd}', [ReasonEndController::class, 'destroy'])->name('reasons-end.destroy');

    /*  Maintenance */
    Route::get('/maintenances', [MaintenanceController::class, 'index'])->name('maintenances.index');
    Route::get('/maintenances/create', [MaintenanceController::class, 'create'])->name('maintenances.create');
    Route::post('/maintenances', [MaintenanceController::class, 'store'])->name('maintenances.store');
    Route::get('/maintenances/{maintenance}/edit', [MaintenanceController::class, 'edit'])->name('maintenances.edit');
    Route::put('/maintenances/{maintenance}', [MaintenanceController::class, 'update'])->name('maintenances.update');
    Route::delete('/maintenances/{maintenance}', [MaintenanceController::class, 'destroy'])->name('maintenances.destroy');

    /*   Work */
    Route::get('/works', [WorkController::class, 'index'])->name('works.index');
    Route::get('/works/create', [WorkController::class, 'create'])->name('works.create');
    Route::post('/works', [WorkController::class, 'store'])->name('works.store');
    Route::get('/works/{work}/edit', [WorkController::class, 'edit'])->name('works.edit');
    Route::put('/works/{work}', [WorkController::class, 'update'])->name('works.update');
    Route::delete('/works/{work}', [WorkController::class, 'destroy'])->name('works.destroy');

    /* Assigment */
    Route::get('/assigments', [AssigmentController::class, 'index'])->name('assigments.index');
    Route::get('/assigments/create', [AssigmentController::class, 'create'])->name('assigments.create');
    Route::post('/assigments', [AssigmentController::class, 'store'])->name('assigments.store');
    Route::get('assigments/{assigment}/edit', [AssigmentController::class, 'edit'])->name('assigments.edit');
    Route::put('/assigments/{assigment}', [AssigmentController::class, 'update'])->name('assigments.update');
    Route::delete('/assigments/{assigment}', [AssigmentController::class, 'destroy'])->name('assigments.destroy');

    Route::get('/provinces/report/month', [ProvinceController::class, 'monthlyReport'])->name('provinces.report.month');
    Route::get('provinces', [ProvinceController::class, 'index'])->name('provinces.index');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
