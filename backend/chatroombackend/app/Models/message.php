<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class message extends Model
{
    protected $fillable = [
        'name',
        'email',
        'password',
        'active',
        'profile_picture'
    ];
    use HasFactory;
}