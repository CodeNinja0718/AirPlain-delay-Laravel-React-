<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step16 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'step16_filename',
        'step16_filepath'
    ];
}
