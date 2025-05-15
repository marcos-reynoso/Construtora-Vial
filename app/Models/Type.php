<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Type extends Model
{
    /** @use HasFactory<\Database\Factories\TypeFactory> */
    use HasFactory;
    protected $fillable = [
        'name'
    ];
    public function machine(): BelongsTo
    {
        return $this->belongsTo(Machine::class);
    }
}
