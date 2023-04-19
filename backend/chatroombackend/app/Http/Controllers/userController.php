<?php

namespace App\Http\Controllers;

use App\Models\ChatUser;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function addNewUser(Request $request){
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string',
            'username' => 'required|string',
            'active' => 'required|boolean',
            'profile_picture' => 'nullable|image'
        ]);
        $user = ChatUser::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'username' => $fields['username'],
            'password' => $fields['password'],
            'active' => $fields['active'],
            'profile_picture' => $fields['profile_picture']
        ]);
        return response($user, 201);
    }
    public function getAllUsers(){
        $users = ChatUser::all();
        return response($users, 200);
    }
    public function getUserByUserName($userName){
        $user = ChatUser::where('username', $userName)->first();
        return response($user, 200);
    }
    public function modifyUserById($id, $request){
        $user = ChatUser::find($id);
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
