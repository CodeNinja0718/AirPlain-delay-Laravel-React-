<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\step1;
use App\Models\step2;
use App\Models\step3;
use App\Models\step4;
use App\Models\step5;
use App\Models\step6;
use App\Models\step7;
use App\Models\step8;
use App\Models\step9;
use App\Models\test;
use App\Models\userprofile;
use Illuminate\support\Facades\Auth;
use Illuminate\support\Facades\Hash;
use Carbon\Carbon;
use App\Http\Controllers\Controller; 
use Illuminate\Support\Str;
 
class AuthController extends Controller
{
    public function index(Request $request)
    {
        $au = Auth::User();
        $user1 = new step2([
            'user_id' => $au,
            'indexOfStops' => $request->ios,
            'issueOfFlight' => $request->iof,
            'indexOfDelayingTime' =>$request->iodt,
            'volunteerSeat' =>$request->v
        ]);
        return $user1;
    }  
      
    public function customLogin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
   
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->intended('dashboard')
                        ->withSuccess('Signed in');
        }
  
        return redirect("login")->withSuccess('Login details are not valid');
    }

    // Register in first page.
    public function register(Request $request)
    {
        $user = new User([
            'name' => "",
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'remember_token' =>"",

        ]);
        $token = Str::random(80);

        $user->forceFill([
            'remember_token' => hash('sha256', $token),
        ])->save();

        $user->save();
        return response()->json([
            'user' => $user,
            'token' => $user->remember_token,
            'message' => 'success'
        ], 200);
    }

    // Another register ,that is, Step6's register.
    public function step6_reg(Request $request){
        $data5 = $request->step5_data;
        $data6 = $request->step6_data;
        // email verify
        if( User::where('email',$data5['compansationEmail'])->exists()){
            $olduserid = User::where('email', $data5['compansationEmail'])->first()->id;
            return $this->regprofile($request , $data5  , $data6 , $olduserid);
        }
        // register new 
        $user = new User([
            'name' => $data6['firstNameOfPassenger'] ." ". $data6['lastNameOfPassenger'],
            'email' => $data5['compansationEmail'],
            'password' => Hash::make($data6['passportNumberOfPassenger']),
            'remember_token' =>"",
        ]);
        $token = Str::random(80);
        $user->forceFill([
            'remember_token' => hash('sha256', $token),
        ])->save();
        $user->save();
        $userController = app(userController::class);
        return $userController->userprofile($request , $data5 , $data6);
    }

    // when Email already exist, update Password from Passport.
    public function regprofile($request, $data5 , $data6 , $olduserid){
        $user = User::find($olduserid);  
        $user->password = Hash::make($data6['passportNumberOfPassenger']); 
        $user->save();
        $userController = app(userController::class);
        return $userController->userprofile($request , $data5  , $data6);
    }
    
    public function login(Request $request)
    {

        $user = User::where('email', $request->email)->first();
        if($user){
            if(Hash::check($request->password, $user->password)){
                return response()->json([
                    'user' => $user,
                    'token' => $user->remember_token,
                    'message' => 'success',
                ], 200);
            }
            else{
                return response()->json([
                    'message' => 'Invalid password'
                ], 401);
            }
        }
        else{
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        }
    }    
    
    public function dashboard()
    {
        if(Auth::check()){
            return view('dashboard');
        }
        else{ 
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return Redirect('login');
    }
}
