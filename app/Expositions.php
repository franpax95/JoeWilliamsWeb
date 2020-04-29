<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expositions extends Model
{
    protected $fillable = ['title', 'description', 'type', 'details', 'img'];
}
