<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ChatUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
        'profile_picture',
        'active'
    ];
    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ];
    function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }
}
