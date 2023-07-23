<?php

namespace App\Http\Controllers\main;

use App\Category;
use App\Folder;
use App\Http\Controllers\Controller;
use App\Research;
use App\Version;
use Illuminate\Database\Eloquent\Builder;
use View;
use Yajra\Datatables\Enginges\EloquentEngine;

class homeController extends Controller
{


    public function index()
    {



        return View::make('user');

    }


}
