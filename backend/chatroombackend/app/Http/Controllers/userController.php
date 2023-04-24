<?php

namespace App\Http\Controllers;

use App\Models\ChatUser;
use Illuminate\Http\Request;
use function Psy\debug;

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

    /*public function modifyUserById($id, $request){
        $user = ChatUser::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = $request->password;
        $user->active = $request->active;
        $user->profile_picture = $request->profile_picture;
        $user->timestamp = $request->timestamp;
        $user->save();
        return response($user, 200);
    }*/

    // fixed the modify user by id by accepting a request
    public function modifyUserById($id, Request $request){
        // Use $request to access the parameters sent with the request
        $user = ChatUser::find($id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->username = $request->input('username');
        $user->password = $request->input('password');
        $user->active = $request->input('active');
        $user->profile_picture = $request->input('profile_picture');
        $user->updated_at = $request->input('updated_at');
        $user->save();
        return response($user, 200);
    }
    
    public function findUserById($id){

        $user = ChatUser::find($id);
        return response($user, 200);
    }
}
