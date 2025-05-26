<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWorkRequest;
use App\Http\Requests\UpdateWorkRequest;
use App\Models\Province;
use App\Models\Work;
use Inertia\Inertia;

class WorkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()

    {
        $works = Work::with('province')->get();
        return Inertia::render('Works/Index', [
            'works' => $works
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Works/Create', [
            'provinces' => Province::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWorkRequest $request)
    {
        Work::create($request->validated());

        return redirect()->route('works.index')->with('message', 'Obra Registrada con Exito');
        return redirect()->back()->with('error', 'Error al Registrar la Obra');
    }

    /**
     * Display the specified resource.
     */
    public function show(Work $work)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Work $work)

    {
        $work->load('province');
        return Inertia::render('Works/Edit', [
            'work' => $work,
            'provinces' => Province::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWorkRequest $request, Work $work)
    {
        $work->update($request->validated());

        return redirect()->route('works.index')->with('message', 'Obra Actualizada con Exito');
        return redirect()->back()->with('error', 'Error al Actualizar la Obra');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Work $work)
    {
        $work->delete();

        return redirect()->route('works.index')->with('message', 'Obra Eliminada con Exito');
        return redirect()->back()->with('error', 'Error al Eliminar la Obra');
    }
}
