<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step13 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'indexOfReroute',
        'dateOfArriveFinalDestination',
        'indexOfPreferedLanguageOfCommunication',
        'timeofArriveFinalDestination',
        'indexOfMissConnection',
        'indexOfticket',
        'websiteOfBuyTicket',
        'indexOfContactAirline',
        'step13_filename',
        'step13_filepath'
    ];
}
