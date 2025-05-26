<?php

namespace App\Http\Requests;

use App\Models\Assigment;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class StoreAssigmentRequest extends FormRequest
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
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'mileage' => 'nullable|integer',
            'reason_end_id' => 'required|exists:reason_ends,id',
            'machine_id' => 'required|exists:machines,id',
            'work_id' => 'required|exists:works,id',

        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $machineId = $this->input('machine_id');

        $lastAssignment = Assigment::where('machine_id', $machineId)
            ->orderByDesc('start_date')
            ->first();


        if ($lastAssignment && is_null($lastAssignment->end_date)) {
            return redirect()->back()->with('error', 'La máquina ya tiene una asignación activa.');
        }


        if ($lastAssignment && $lastAssignment->end_date && ($lastAssignment->mileage === null || $lastAssignment->mileage <= 0)) {
            return redirect()->back()->with('error', 'Debe registrar el kilometraje de la última asignación antes de crear una nueva.');
        }
    }
}
