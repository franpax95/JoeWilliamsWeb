<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Mail;

class MailController extends Controller
{
    public function send(Request $request) 
    {
        $destinatario = "diabeticman666@gmail.com";
        $name           = $request->name;
        $subject        = $request->subject;
        $email          = $request->email;
        $messageBody    = $request->message;

        $correo = new \App\Mail\Mail($name,$email,$messageBody,$subject);
        \Mail::to($destinatario)->send($correo);
        abort(500);
        return $request;
    }
}
