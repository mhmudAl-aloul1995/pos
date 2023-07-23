<?php

namespace App\Http\Controllers;

use App\Models\Customer;

use Illuminate\Http\Request;
use phpDocumentor\Reflection\Project;
use Yajra\Datatables\Datatables;
use Yajra\Datatables\Enginges\EloquentEngine;
use Illuminate\Support\Facades\DB;
use View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;

class customerController extends Controller
{


    public function index()
    {


        return View::make('customer');

    }


    public function show(Request $request)
    {
        $data = $request->all();


        $users = Customer::query();

        return Datatables::of($users)
            ->addColumn('action', function ($ctr) {

                return '<div class="btn-group">
                                                        <button  class="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false"> إجراء
                                                            <i class="fa fa-angle-down"></i>
                                                        </button>
                                                        <ul  class="dropdown-menu" role="menu">
                                                            <li>
                                                                <a onclick="showModal(`customer`,' . $ctr->id . ')" href="javascript:;">
                                                                    <i class="icon-pencil"></i> تعديل </a>
                                                            </li>
                                                            <li>
                                                                <a onclick="deleteThis(`customer`,' . $ctr->id . ')"  href="javascript:;">
                                                                    <i class="icon-trash"></i> حذف  </a>
                                                            </li>
                                                            </ul>
                                                    </div>';
            })
            ->rawColumns(['action' => 'action', 'customer_img' => 'customer_img'])
            ->make(true);
    }

    public function edit(Request $request, $id)
    {

        $customer = Customer::find($id);
        if ($customer) {
            return response()->json([
                'customer' => $customer
            ]);
        }
        return response(['message' => 'فشلت العملية'], 500);

    }

    public function store(Request $request)
    {
        $data = $request->all();
        unset($data['id']);
        $data['user_id'] = Auth::id();
        $customer = Customer::create($data);

        if (!$customer) {

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

    public function update(Request $request)
    {
        $data = $request->all();
        $customer = Customer::find($data['id']);
        $customer->update($data);


        if (!$customer) {
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

    public function destroy(Request $request, $id)
    {


        if (Customer::find($id)->delete()) {
            return response()->json([
                'success' => TRUE,
                'message' => "تم الحذف بنجاح"
            ]);
        }

        return response(['message' => 'فشلت العملية'], 500);
    }


}
