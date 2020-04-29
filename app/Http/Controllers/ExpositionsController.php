<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Expositions;

class ExpositionsController extends Controller
{
    public function index()
    {
        return Expositions::all();
    }
 
    public function show(Expositions $exposition)
    {
        return $exposition;
    }
}