<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step1 extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'user_id',
        'from',
        'to',
        'directFlight',
        'countOfStops',
        'placeOfStops',
        'admincheck'
    ];
}
