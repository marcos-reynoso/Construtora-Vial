<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Maintenance extends Model
{
    /** @use HasFactory<\Database\Factories\MaintenanceFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'mileage_application',
    ];
    public function machine(): HasMany
    {
        return $this->hasmany(Machine::class);
    }
}
