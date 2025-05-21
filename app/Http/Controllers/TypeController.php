<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTypeRequest;
use App\Http\Requests\UpdateTypeRequest;
use App\Models\Type;
use Inertia\Inertia;

class TypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $types = Type::all();
        return Inertia::render('Types/Index', [
            'types' => $types
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Types/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTypeRequest $request)
    {
        Type::create($request->only('name'));

        return redirect()->route('types.index')->with(
            'message',
            'Tipo de Máquina creado con éxito.'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Type $type) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Type $type)
    {
        return Inertia::render('Types/Edit', [
            'types' => $type
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTypeRequest $request, Type $type)
    {
        $type->update($request->validated());
        return redirect()->route('types.index')->with(
            'message',
            'Tipo de Maquina Actualizada con Exito'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Type $type)
    {
        $type->delete();
        return redirect()->route('types.index')->with(
            'message',
            'Tipo de Maquina Eliminada con Exito'
        );
    }
}
