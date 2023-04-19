<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Message extends Model
{
    protected $fillable = [
        'message',
        'sender_id',
        'image'
    ];
    use HasFactory;
    function user(): BelongsTo
    {
        return $this->belongsTo(ChatUser::class);
    }
}
