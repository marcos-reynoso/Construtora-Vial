<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMaintenanceRequest;
use App\Http\Requests\UpdateMaintenanceRequest;
use App\Models\Maintenance;
use Inertia\Inertia;

class MaintenanceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $maintenances = Maintenance::all(['id', 'name', 'mileage_application']);
        return Inertia::render('Maintenance/Index', [
            'maintenances' => $maintenances
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Maintenance/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMaintenanceRequest $request)
    {
        $validated = $request->validated();
        Maintenance::create($validated);
        return redirect()->route('maintenances.index')->with('message', 'Mantenimiento Creado con Exito');
        return redirect()->back()->with('error', 'Error al Crear Mantenimiento');
    }

    /**
     * Display the specified resource.
     */
    public function show(Maintenance $maintenance)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Maintenance $maintenance)
    {
        return Inertia::render('Maintenance/Edit', [
            'maintenance' => $maintenance
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMaintenanceRequest $request, Maintenance $maintenance)
    {
        $validated = $request->validated();
        $maintenance->update($validated);
        return redirect()->route('maintenances.index')->with('message', 'Mantenimiento Actualizado con Exito');
        return redirect()->back()->with('error', 'Error al Actualizar Mantenimiento');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Maintenance $maintenance)
    {
        $maintenance->delete();
        return redirect()->route('maintenances.index')->with('message', 'Mantenimiento Eliminado con Exito');
        return redirect()->back()->with('error', 'Error al CEelinar Mantenimiento');
    }
}
