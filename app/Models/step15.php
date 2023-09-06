<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step15 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'urlOfConnection1',
        'urlOfConnection2'
    ];
}
