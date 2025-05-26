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
        'type_id',
        'province_id',
        'brand_id',
        'maintenance_id',

    ];
    public function assigment(): HasMany
    {
        return $this->hasMany(Assigment::class);
    }
    public function type(): BelongsTo
    {

        return $this->belongsTo(Type::class);
    }

    public function brand(): BelongsTo
    {

        return $this->belongsTo(Brand::class);
    }

    public function province(): BelongsTo
    {

        return $this->belongsTo(Province::class);
    }

    public function maintenance(): BelongsTo
    {

        return $this->belongsTo(Maintenance::class);
    }
}
