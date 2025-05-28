<?php

namespace App\Http\Requests;

use App\Models\Assigment;
use App\Models\ReasonEnd;
use App\Models\Work;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\ValidationException;

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
            'machine_id' => [
                'required',
                'exists:machines,id',
                function ($attribute, $value, $fail) {

                    $enProcesoReason = ReasonEnd::where('name', 'En Proceso')->orWhere('name', 'Avería técnica')->orWhere('name', 'Averia')->first();

                    $active = Assigment::where('machine_id', $value)
                        ->where(function ($query) use ($enProcesoReason) {
                            $query->whereNull('end_date');
                            if ($enProcesoReason) {
                                $query->orWhere('reason_end_id', $enProcesoReason->id);
                            }
                        })
                        ->exists();

                    if ($active) {
                        $fail('La máquina ya está asignada a una obra activa y no puede ser asignada a otra hasta finalizar.');
                    }
                }
            ],
            'work_id' => 'required|exists:works,id',
        ];
    }
}
