<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step7 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'indexOfWith',
        'firstNameOfOtherPassenge',
        'lastNameOfOtherPassenger',
        'birthdayOfOtherPassenger',
        'emailOfOtherPassenge',
        'phoneOfOtherPassenger',
    ];
}
