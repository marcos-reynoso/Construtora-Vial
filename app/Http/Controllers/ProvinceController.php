<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProvinceRequest;
use App\Http\Requests\UpdateProvinceRequest;
use App\Models\Province;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProvinceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $provinces = Province::all();
        return inertia('Provinces/Index', [
            'provinces' => $provinces
        ]);
    }
    public function monthlyReport(Request $request)
    {
        $month = $request->input('month'); // formato: YYYY-MM

        $provinces = Province::with(['works' => function ($q) use ($month) {
            $q->whereMonth('start_date', substr($month, 5, 2))
                ->whereYear('start_date', substr($month, 0, 4))
                ->with(['assigment.machine.type']);
        }])->get();

        $pdf = Pdf::loadView('reports.province-month', [
            'provinces' => $provinces,
            'month' => $month,
        ]);

        return $pdf->stream('reporte_provincias_' . $month . '.pdf');
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Provinces/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProvinceRequest $request)
    {
        Province::create($request->validated());
        return redirect()->route('provinces.index')->with(
            'message',
            'Provincia Creada con Exito'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Province $province)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Province $province)
    {
        return Inertia::render(('Provinces/Edit'), [
            'province' => $province
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProvinceRequest $request, Province $province)
    {
        $province->update($request->validated());
        return redirect()->route('provinces.index')->with(
            'message',
            'Provincia Actualizada con Exito'
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Province $province)
    {
        $province->delete();

        return redirect()->route('provinces.index')->with(
            'message',
            'Provincia eliminada con Exito'
        );
    }
}
