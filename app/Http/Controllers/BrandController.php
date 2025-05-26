<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;
use App\Models\Brand;
use Inertia\Inertia;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands = Brand::all();
        return Inertia::render('Brands/Index', [
            'brands' => $brands
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Brands/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBrandRequest $request)
    {
        $validated = $request->validated();
        Brand::create($validated);
        return redirect()->route('brands.index')->with('message', 'Marca Creada con Exito');
        return redirect()->back()->with('error', 'Error al Crear Marca');
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Brand $brand)
    {
        return Inertia::render('Brands/Edit', [
            'brands' => $brand
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBrandRequest $request, Brand $brand)
    {
        $brand->update($request->validated());
        return redirect()->route('brands.index')->with('message', 'Marca Actualizada con Exito');
        return redirect()->back()->with('error', 'Error al Actualizar Marca');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        $brand->delete();
        return redirect()->route('brands.index')->with('message', 'Marca Eliminada con Exito');
        return redirect()->back()->with('error', 'Error al Eliminar Marca');
    }
}
