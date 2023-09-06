<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class fileuploadcontroller extends Controller
{
    public function index()
    {
        return view('file-upload');
    }
 
    public function store(Request $request)
    {
         
        $validatedData = $request->validate([
         'file' => 'required|csv,txt,xlx,xls,pdf|max:2048',
 
        ]);
        
        $userfolder = 'public/case/' . $request->userid . '/claim' ;

        $name = $request->file('file')->getClientOriginalName();
 
        $path = $request->file('file')->store($userfolder);
 
        $save = new File;
 
        $save->name = $name;
        $save->path = $path;
 
        return redirect('file-upload')->with('status', 'File Has been uploaded successfully in laravel 8');
 
    }
}
