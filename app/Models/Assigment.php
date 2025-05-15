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
    ];
    public function machines(): HasMany
    {

        return $this->hasMany(Machine::class);
    }
    public function works(): HasMany
    {
        return $this->hasMany(Work::class);
    }
    public function reasonends(): HasMany
    {
        return $this->hasMany(ReasonEnd::class);
    }
    public function provinces(): HasMany
    {

        return $this->hasMany(Province::class);
    }
}
