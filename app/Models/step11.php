<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step11 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'step11_filename',
        'step11_filepath'
    ];
}
