<?php

namespace App\Http\Controllers\main;

use App\Category;
use App\Folder;
use App\Http\Controllers\Controller;
use App\Research;
use App\Version;
use View;
use Yajra\Datatables\Enginges\EloquentEngine;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class categoryController extends Controller
{


    public function index(Request $request, $type = null, $id = null)
    {



        return View::make('main/categor');

    }


}
