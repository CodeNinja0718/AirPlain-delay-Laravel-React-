<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step14 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'indexOfRecommend',
        'indexOfSite',
        'shareurl'
    ];
}
