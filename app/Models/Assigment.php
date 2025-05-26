<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Assigment extends Model
{
    /** @use HasFactory<\Database\Factories\AssigmentFactory> */
    use HasFactory;
    protected $fillable = [
        'start_date',
        'end_date',
        'mileage',
        'reason_end_id',
        'machine_id',
        'work_id',

    ];
    public function machine(): BelongsTo
    {

        return $this->belongsTo(Machine::class);
    }
    public function work(): BelongsTo
    {
        return $this->belongsTo(Work::class);
    }
    public function reasonend(): BelongsTo
    {
        return $this->belongsTo(ReasonEnd::class, 'reason_end_id');
    }
}
