<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMachineRequest;
use App\Http\Requests\UpdateMachineRequest;
use App\Models\Brand;
use App\Models\Machine;
use App\Models\Maintenance;
use App\Models\Province;
use App\Models\Type;

use Inertia\Inertia;

class MachineController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()

    {
        $machines = Machine::with(['type', 'province', 'brand', 'maintenance'])->get();
        return Inertia::render('Machines/Index', [
            'machines' => $machines
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Machines/Create', [
            'types' => Type::all(),
            'provinces' => Province::all(),
            'brands' => Brand::all(),
            'maintenances' => Maintenance::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMachineRequest $request)
    {
        Machine::create($request->validated());

        return redirect()->route('machines.index')
            ->with('message', 'Máquina registrada con éxito');
        return redirect()->back()->with('error', 'Ocurrio un error al registrar la maquina.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Machine $machine) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Machine $machine)
    {
        return Inertia::render('Machines/Edit', [
            'machine' => $machine->load(['type', 'province', 'brand', 'maintenance']),
            'types' => Type::all(),
            'provinces' => Province::all(),
            'brands' => Brand::all(),
            'maintenances' => Maintenance::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMachineRequest $request, Machine $machine)
    {

        $machine->update($request->validated());

        return redirect()->route('machines.index')
            ->with('message', 'Máquina actualizada con éxito');
        return redirect()->back()->with('error', 'Ocurrió un error al actualizar la máquina.');
    }

    public function destroy(Machine $machine)
    {
        $machine->delete();
        return redirect()->route('machines.index')->with('message', 'Máquina eliminada con éxito');
        return redirect()->back()->with('error', 'Ocurrio un error al eliminar la maquina.');
    }
}
