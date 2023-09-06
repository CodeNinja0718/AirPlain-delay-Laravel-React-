<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class airportinfo extends Model
{
    protected $fillable = [
        'id',
        'name',
        'city',
        'country',
        'iata',
        'lat',
        'lon',
        ];

    protected $table = 'airportinfo';
    use HasFactory;
}
