<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class step12 extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'indexOfPayforDistruption',
        'moneyOfPaymentforDistruption',
        'step12_filename',
        'step12_filepath',
        'commentOfRebook'
    ];
}
