<?php

namespace App\Http\Controllers;

use App\Models\CryptoData; 


use Illuminate\Http\Request; 
use App\Http\Controllers\Controller;  
use Carbon\Carbon;
use Illuminate\Support\Str;
use Session;
use DB;  
use Mail;

class CyrptoController extends Controller
{
    function all_cyrpto(){
        $currentMonth = Carbon::now()->month;
        $currentYear = Carbon::now()->year;

        // Fetch records for the current month
        return CryptoData::whereMonth('datetime', $currentMonth)
                        ->whereYear('datetime', $currentYear)
                        ->get();
    }

    function cyrpto_7_days() {
        // Get the current date
        $currentDate = Carbon::now();
    
        // Calculate the date 7 days ago
        $sevenDaysAgo = $currentDate->subDays(7);
    
        // Fetch records 7 days old from the calculated date
        return CryptoData::where('datetime', '>=', $sevenDaysAgo)
                         ->get();
    }

    function cyrpto_1_days() {
        // Get the current date
        $currentDate = Carbon::now();
    
        // Calculate the date 7 days ago
        $oneDayAgo = $currentDate->subDays(1);
    
        // Fetch records 7 days old from the calculated date
        return CryptoData::whereDate('datetime', '=', $oneDayAgo->toDateString())
                     ->get();
    }

    function cyrpto_1_year() {
        // Get the current date
        $currentDate = Carbon::now();
    
        // Calculate the date 7 days ago
        $oneYearAgo = $currentDate->subYears(1);
    
        // Fetch records 7 days old from the calculated date
        return CryptoData::where('datetime', '>=', $oneYearAgo)
                     ->get();
    }
    
}
