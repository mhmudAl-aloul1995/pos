<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;

use Illuminate\Http\Request;
use phpDocumentor\Reflection\Project;
use Yajra\Datatables\Datatables;
use Yajra\Datatables\Enginges\EloquentEngine;
use Illuminate\Support\Facades\DB;
use View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use File;
use Illuminate\Support\Facades\Storage;

class productController extends Controller
{


    public function index()
    {

        $ctg = Category::all();
        $data['ctg'] = $ctg;
        return View::make('product', compact('data'));

    }


    public function show(Request $request)
    {
        $data = $request->all();


        $users = Product::query()->with('category');

        return Datatables::of($users)
            ->addColumn('action', function ($ctr) {

                return '<div class="btn-group">
                                                        <button  class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false"> إجراء
                                                            <i class="fa fa-angle-down"></i>
                                                        </button>
                                                        <ul  class="dropdown-menu" role="menu">
                                                            <li>
                                                                <a onclick="showModal(`product`,' . $ctr->id . ')" href="javascript:;">
                                                                    <i class="icon-pencil"></i> تعديل </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="deleteThis(`product`,' . $ctr->id . ')"  href="javascript:;">
                                                                    <i class="icon-trash"></i> حذف  </a>
                                                            </li>
                                                            </ul>
                                                    </div>';
            })
            ->editColumn('image', function ($ctr) {



                return "<img height='100' width='100' src='{$ctr->img}'/>";
            })
            ->rawColumns(['action' => 'action', 'image' => 'image'])
            ->make(true);
    }

    public function edit(Request $request, $id)
    {

        $product = Product::find($id);
        if ($product) {
            return response()->json([
                'product' => $product
            ]);
        }
        return response(['message' => 'فشلت العملية'], 500);

    }

    public function store(Request $request)
    {
        $data = $request->all();
        unset($data['id']);
        //  $data['user_id'] = Auth::id();
        $data['quantity'] = 0;

        $request->validate([
            'file' => 'required'
        ]);
        $fileModel = new File;
        if ($request->file()) {

            $fileName = time() . '_' . $request->image->getClientOriginalName();
            $data['image'] = $fileName;
            Storage::putFileAs('products', $request->file('image'), $fileName);
        }
        $product = Product::create($data);

        if (!$product) {

            return response()->json([
                'success' => FALSE,
                'message' => "حدث حطأ أثناء الإدخال"

            ]);
        }
        return response()->json([
            'success' => TRUE,
            'message' => "تم الإدخال بنجاح"

        ]);
    }

    public
    function update(Request $request)
    {
        $data = $request->all();
        $fileModel = new File;


        if ($request->file()) {

            $fileName = time() . '_' . $request->image->getClientOriginalName();
            $data['image'] = $fileName;
            Storage::putFileAs('products', $request->file('image'), $fileName);
        } else {
            unset($data['image']);
        }


        $product = Product::find($data['id']);
        $product->update($data);


        if (!$product) {
            return response()->json([
                'success' => TRUE,
                'message' => "حدث حطأ أثناء التعديل"

            ]);
        }
        return response()->json([
            'success' => TRUE,
            'message' => "تم التعديل بنجاح"
        ]);
    }

    public
    function destroy(Request $request, $id)
    {


        if (Product::find($id)->delete()) {
            return response()->json([
                'success' => TRUE,
                'message' => "تم الحذف بنجاح"
            ]);
        }

        return response(['message' => 'فشلت العملية'], 500);
    }


}
