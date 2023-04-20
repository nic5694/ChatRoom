<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class messageController extends Controller
{
    public function sendMessage(Request $request){
        $fields = $request->validate([
            'sender_id' => 'required|integer',
            'message' => 'required|string',
            'sender_username' => 'required|string',
            'chat_image' => 'nullable|image',

        ]);
        $message = Message::create([
            'sender_id' => $fields['sender_id'],
            'message' => $fields['message'],
            'sender_username' => $fields['sender_username'],
            'image' => $fields['chat_image']
        ]);
        return response($message, 201);
    }
    public function getAllMessages(){
        $messages = Message::all();
        return response($messages, 200);
    }
    public function getMessagesInTheLast3Seconds(){
        $messages = Message::where('created_at', '>=', now()->subSeconds(3))->get();
        return response($messages, 200);
    }
}
