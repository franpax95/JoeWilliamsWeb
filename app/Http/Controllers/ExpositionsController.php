<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Expositions;

class ExpositionsController extends Controller
{
    public function index()
    {
        $allExpositions = Expositions::all();

        foreach($allExpositions as $exposition) {
            $exposition->img = json_decode($exposition->img);
        };

        return $allExpositions;
    }
 
    public function show(Expositions $exposition)
    {
        $exposition->img = json_decode($exposition->img);
        return $exposition;
    }
}
