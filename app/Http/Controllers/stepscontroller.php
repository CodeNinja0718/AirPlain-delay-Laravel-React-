<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\userprofile;
use App\Models\step1;
use App\Models\step2;
use App\Models\step3;
use App\Models\step4;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class stepscontroller extends Controller
{
    //------------- Step data register one by one-----------
   
    public function index($request , $newuserid){
        // return $newuserid;
        return $this->step1($request , $newuserid);
    }
    // Step 1
    public function step1($request , $newuserid){
        $data1 = $request->step1_data;
        $st1data = new step1([
            'user_id' => $newuserid,
            'from' => $data1['from'],
            'to'=> $data1['to'],
            'directFlight'=>$data1['directFlight'],
            'countOfStops'=>$data1['countOfStops'],
            'placeOfStops'=>implode(', ', $data1['placeOfStops'])
        ]);
        $st1data->save();
        return $this->step2($request , $newuserid);
    }
    // Step 2
    public function step2($request , $newuserid){
        $data2 = $request->step2_data;
        $st2data = new step2([
            'user_id' => $newuserid,
            'indexOfStops' => $data2['indexOfStops'],
            'issueOfFlight'=> $data2['issueOfFlight'],
            'indexOfDelayingTime'=>$data2['indexOfDelayingTime'],
            'volunteerSeat'=>$data2['volunteerSeat'],
        ]);
        $st2data->save();
        return $this->step3($request , $newuserid);
    }
    // Step 3
    public function step3($request , $newuserid){
        $data3 = $request->step3_data;
        $st3data = new step3([
            'user_id' => $newuserid,
            'indexOfFlightCancellation' => $data3['indexOfFlightCancellation'],
            'indexOfDistruptOfAirline'=> $data3['indexOfDistruptOfAirline'],
            'indexOfReasonOfAirline'=>$data3['indexOfReasonOfAirline'],
            'indexOfServiceFromAirline'=>implode(', ', $data3['indexOfServiceFromAirline']),
        ]);
        $st3data->save();
        return $this->step4($request , $newuserid);
    }
    // Step 4
    public function step4($request , $newuserid){
        $data4 = $request->step4_data;
        $st4data = new step4([
            'user_id' => $newuserid,
            'airlinesName'=>implode(', ', $data4['airlinesName']),
            'airlinesDate'=>implode(', ', $data4['airlinesDate']),
            'airlinesFlightNumber'=>implode(', ', $data4['airlinesFlightNumber']),
        ]);
        $st4data->save();
        // return $this->step3($request , $newuserid);
    }
    
    //----- Step5 & Step6 are User & userprofile ----
    
    // Step 7

}
