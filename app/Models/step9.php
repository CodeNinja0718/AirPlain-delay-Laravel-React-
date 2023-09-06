<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step9 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'step9_filename',
        'step9_filepath'
    ];
}
