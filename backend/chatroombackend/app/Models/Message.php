<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Message extends Model
{
    use HasFactory;
    protected $fillable = [
        'message',
        'sender_id',
        'sender_username',
        'image'
    ];

    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ];
    function sender(): BelongsTo
    {
        return $this->belongsTo(ChatUser::class, 'sender_id');
    }
}
