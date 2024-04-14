<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CryptoData extends Model
{
    protected $table = 'crypto_data';
    protected $fillable = [
        'unix_time',
        'datetime',
        'symbol',
        'open_market',
        'high_market',
        'low_market',
        'close_market',
        'volume',
    ];
}
