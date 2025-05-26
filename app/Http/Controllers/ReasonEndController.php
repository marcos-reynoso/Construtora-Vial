<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReasonEndRequest;
use App\Http\Requests\UpdateReasonEndRequest;
use App\Models\ReasonEnd;
use Inertia\Inertia;

class ReasonEndController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reasonEnd = ReasonEnd::all();
        return Inertia::render('ReasonEnd/Index', [
            'reasonEnd' => $reasonEnd
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ReasonEnd/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReasonEndRequest $request)
    {
        $validated = $request->validated();
        ReasonEnd::create($validated);
        return redirect()->route('reasons-end.index')->with('message', 'Motivo Creado Correctamente');
        return redirect()->back()->with('error', 'Error al Crear Motivo');
    }

    /**
     * Display the specified resource.
     */
    public function show(ReasonEnd $reasonEnd)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ReasonEnd $reasonEnd)
    {
        return Inertia::render('ReasonEnd/Edit', [
            'reasonEnd' => $reasonEnd
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReasonEndRequest $request, ReasonEnd $reasonEnd)
    {
        $validated = $request->validated();
        $reasonEnd->update($validated);
        return redirect()->route('reasons-end.index')->with('message', 'Motivo Actualizado Correctamente');
        return redirect()->back()->with('error', 'Error al Actualizar Motivo');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ReasonEnd $reasonEnd)
    {
        $reasonEnd->delete();
        return redirect()->route('reasons-end.index')->with('message', 'Motivo Eliminado Correctamente');
        return redirect()->back()->with('error', 'Error al Eliminar Motivo');
    }
}
