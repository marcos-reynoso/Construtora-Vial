<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Work extends Model
{
    /** @use HasFactory<\Database\Factories\WorkFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'start_date',
        'end_date',
        'province_id',
    ];
    public function assigment(): HasMany
    {
        return $this->hasMany(Assigment::class);
    }
    public function province(): BelongsTo
    {
        return $this->belongsTo(Province::class);
    }
}
