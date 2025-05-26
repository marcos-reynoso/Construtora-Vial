<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ReasonEnd extends Model
{
    /** @use HasFactory<\Database\Factories\ReasonEndFactory> */
    use HasFactory;
    protected $fillable = [
        'name'
    ];
    public function assigment(): HasMany
    {
        return $this->hasMany(Assigment::class);
    }
}
