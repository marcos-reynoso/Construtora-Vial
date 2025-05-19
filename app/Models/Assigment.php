<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
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
        'province_id',
    ];
    public function machine(): HasMany
    {

        return $this->hasMany(Machine::class);
    }
    public function work(): HasMany
    {
        return $this->hasMany(Work::class);
    }
    public function reasonend(): HasMany
    {
        return $this->hasMany(ReasonEnd::class);
    }
    public function province(): HasMany
    {

        return $this->hasMany(Province::class);
    }
}
