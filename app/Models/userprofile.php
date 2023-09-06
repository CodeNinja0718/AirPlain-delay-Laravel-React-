<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userprofile extends Model
{
    protected $fillable = [
        'user_id',
        'first_Name',
        'last_Name',
        'birthday',
        'phone',
        'address',
        'city' ,
        'country',
        'language'
    ];
    use HasFactory;

}
