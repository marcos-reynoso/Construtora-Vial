<?php

use App\Http\Controllers\MachineController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/machines', [MachineController::class, 'index'])->name('machines.index');

    Route::get('/machines/create', [MachineController::class, 'create'])->name('machines.create');

    Route::post('/machines', [MachineController::class, 'store'])->name('machines.store');

    Route::get('/machines/{machine}/edit', [MachineController::class, 'edit'])->name('machines.edit');
    Route::put('/machines/{machine}', [MachineController::class, 'update'])->name('machines.update');
    Route::delete('/machines/{machine}', [MachineController::class, 'destroy'])->name('machines.destroy');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
