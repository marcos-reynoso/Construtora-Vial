<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAssigmentRequest;
use App\Http\Requests\UpdateAssigmentRequest;
use App\Models\Assigment;
use App\Models\Machine;
use App\Models\ReasonEnd;
use App\Models\Work;
use Inertia\Inertia;

class AssigmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $assigments = Assigment::with(['machine', 'work', 'reasonend'])->get();
        return Inertia::render('Assigments/Index', [
            'assigments' => $assigments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Assigments/Create', [
            'machines' => Machine::all(),
            'works' => Work::all(),
            'reasonends' => ReasonEnd::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAssigmentRequest $request)
    {

        Assigment::create($request->validated());

        return redirect()->route('assigments.index')
            ->with('message', 'Asignación registrada con éxito');
    }

    /**
     * Display the specified resource.
     */
    public function show(Assigment $assigment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Assigment $assigment)
    {

        return Inertia::render('Assigments/Edit', [
            'assigment' => $assigment->load(['machine', 'work', 'reasonend']),
            'machines' => Machine::all(),
            'works' => Work::all(),
            'reasonends' => ReasonEnd::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAssigmentRequest $request, Assigment $assigment)
    {
        if (!$request->input('end_date') || !$request->input('mileage') || !$request->input('reason_end_id')) {
            return redirect()->back()->with('error', 'Debe ingresar fecha de finalización, motivo y kilometraje.');
        }
        $assigment->update($request->validated());
        return redirect()->route('assigments.index')
            ->with('message', 'Asignación actualizada con éxito');
        return redirect()->back()->with('error', 'Ocurrio un error al actualizar la asignación.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Assigment $assigment)
    {
        $assigment->delete();
        return redirect()->route('assigments.index')
            ->with('message', 'Asignación eliminada con éxito');
        return redirect()->back()->with('error', 'Ocurrio un error al eliminar la asignación.');
    }
}
