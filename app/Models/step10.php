<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step10 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'step10_filename',
        'step10_filepath'
    ];
}
