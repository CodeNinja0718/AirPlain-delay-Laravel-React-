<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\userprofile;

class usercontroller extends Controller
{
   public function userprofile( $request, $data5 , $data6){
         // register profile
        $newuserid = User::where('email', $data5['compansationEmail'])->first()->id;
        $newprofile =  new userprofile([
            'user_id' => $newuserid,
            'first_Name' => $data6['firstNameOfPassenger'],
            'last_Name' => $data6['lastNameOfPassenger'],
            'birthday' => $data6['birthdayOfPassenger'],
            'phone' => $data5['compansationPhone'],
            'address' => $data6['addressOfPassenger'],
            'city' => $data6['cityOfPassenger'],
            'country' =>$data6['countryOfPassenger'],
            'language'=>'English'
        ]);
        $newprofile->save();
      //Steps data save....
        $stepController = app(stepscontroller::class);
        return $stepController->index($request , $newuserid);
   }
}
