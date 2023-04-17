<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Message extends Model
{
    protected $fillable = [
        'name',
        'email',
        'password',
        'active',
        'profile_picture',
        'timestamp'
    ];
    use HasFactory;

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}
