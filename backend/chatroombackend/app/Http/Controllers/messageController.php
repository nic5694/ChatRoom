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
            'chat_image' => 'nullable|image'
        ]);
        $message = Message::create([
            'sender_id' => $fields['sender_id'],
            'message' => $fields['message'],
            'image' => $fields['chat_image']
        ]);
        return response($message, 201);
    }
    public function getAllMessages(){
        $messages = Message::all();
        return response($messages, 200);
    }
    public function getMessagesInTheLast3Seconds(){
        $messages = Message::where('timestamp', '>=', now()->subSeconds(3))->get();
        return response($messages, 200);
    }
}
