<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step3 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'indexOfFlightCancellation',
        'indexOfDistruptOfAirline',
        'indexOfReasonOfAirline',
        'indexOfServiceFromAirline'
    ];
}
