<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function addUser(Request $request){
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string',
            'active' => 'required|boolean',
            'profile_picture' => 'nullable|image'
        ]);
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => $fields['password'],
            'active' => $fields['active'],
            'profile_picture' => $fields['profile_picture']
        ]);
        return response($user, 201);
    }
    public function getAllUsers(){
        $users = User::all();
        return response($users, 200);
    }
    public function getUserById($id){
        $user = User::find($id);
        return response($user, 200);
    }
    public function modifyUserById($id, $request){
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->active = $request->active;
        $user->profile_picture = $request->profile_picture;
        $user->timestamp = $request->timestamp;
        $user->save();
        return response($user, 200);
    }
}
