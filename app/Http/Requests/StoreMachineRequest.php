<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMachineRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'num_ser' => 'required|string|max:255',
            'type_id' => 'required|exists:types,id',
            'province_id' => 'required|exists:provinces,id',
            'brand_id' => 'required|exists:brands,id',
            'maintenance_id' => 'nullable|exists:maintenances,id',
        ];
    }
}
