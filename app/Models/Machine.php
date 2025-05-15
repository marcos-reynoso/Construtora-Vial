<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Machine extends Model
{
    /** @use HasFactory<\Database\Factories\MachineFactory> */
    use HasFactory;

    protected $fillable = [
        'num_ser',

    ];
    public function assigment(): BelongsTo
    {
        return $this->belongsTo(Assigment::class);
    }
    public function types(): BelongsTo
    {

        return $this->belongsTo(Type::class);
    }

    public function brands(): BelongsTo
    {

        return $this->belongsTo(Brand::class);
    }

    public function provinces(): BelongsTo
    {

        return $this->belongsTo(Province::class);
    }

    public function maintenaces(): BelongsTo
    {

        return $this->belongsTo(Maintenance::class);
    }
}
