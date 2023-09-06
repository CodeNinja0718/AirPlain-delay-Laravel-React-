<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step2 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'indexOfStops',
        'issueOfFlight',
        'indexOfDelayingTime',
        'volunteerSeat'
    ];

}
