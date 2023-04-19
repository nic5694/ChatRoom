<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class messageController extends Controller
{
    function sendMessage(Request $request){
        $fields = $request->validate([
            'sender_id' => 'required|integer',
            'receiver_id' => 'required|integer',
            'message' => 'required|string',
            'timestamp' => 'required|date'
        ]);
        $message = Message::create([
            'sender_id' => $fields['sender_id'],
            'receiver_id' => $fields['receiver_id'],
            'message' => $fields['message'],
            'timestamp' => $fields['timestamp']
        ]);
        return response($message, 201);
    }
    function getAllMessages(){
        $messages = Message::all();
        return response($messages, 200);
    }
    function getMessagesInTheLast3Seconds(){
        $messages = Message::where('timestamp', '>=', now()->subSeconds(3))->get();
        return response($messages, 200);
    }
}
