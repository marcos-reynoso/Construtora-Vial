<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Province extends Model
{
    /** @use HasFactory<\Database\Factories\ProvinceFactory> */
    use HasFactory;
    protected $fillable = [
        'name'
    ];
    public function machine(): HasMany
    {
        return $this->hasMany(Machine::class);
    }


    public function works(): HasMany
    {
        return $this->hasMany(Work::class);
    }
}
