@extends('semantic')
@section('title','المنتجات')
@section('pageName','المنتجات')


@section('content')

    <div class="modal container fadeIn" id="productModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">

        <div class="modal-body">
            <div class="row">
                <div class="col-md-12">
                    <!-- BEGIN SAMPLE FORM PORTLET-->

                    <div class="portlet-title">
                        <div class="caption font-green-haze">
                            <i class="icon-wallet font-green-haze"></i>
                            <span class="caption-subject bold uppercase"></span>المنتجات
                        </div>
                    </div>


                    <form method="POST" action="" data-toggle="validator" id="productForm" accept-charset="UTF-8"
                          class="form-horizontal form" role="form" enctype="multipart/form-data">

                        <input name="id" type="hidden" value="">

                        <div class="portlet-body form">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group form-md-line-input">
                                                <label for="name" class="col-md-4  control-label">الإسم
                                                </label>
                                                <div class="col-md-8">
                                                    <input required="" type="text" name="name" value=""
                                                           class="form-control" placeholder="الإسم">
                                                    <div class="form-control-focus"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-md-line-input">
                                                <label for="barcode" class="col-md-4  control-label">الباركود
                                                </label>
                                                <div class="col-md-8">
                                                    <div id="qr-reader"></div>

                                                    <input type="hidden" name="barcode">
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group form-md-line-input">
                                                <label for="category_id" class="col-md-4  control-label">التصنيف
                                                </label>
                                                <div class="col-md-8">
                                                    <select required name="category_id"
                                                            data-placeholder="التصنيف" data-allow-clear="true"
                                                            class="form-control select2 ">
                                                        <option value=""></option>
                                                        @foreach($data['ctg'] as $value)
                                                            <option value="{{$value->id}}">{{$value->name}}</option>

                                                        @endforeach
                                                    </select>
                                                    <div class="form-control-focus"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-md-line-input">
                                                <label for="image" class="col-md-4  control-label">صورة المنتج
                                                </label>
                                                <div class="col-md-8">
                                                    <input required="" type="file" name="image" value=""
                                                           class="form-control" placeholder="صورة المنتج">
                                                    <div class="form-control-focus"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group form-md-line-input">
                                                <label for="status" class="col-md-4  control-label">الحالة
                                                </label>
                                                <div class="col-md-8">
                                                    <select required name="status"
                                                            data-placeholder="الحالة" data-allow-clear="true"
                                                            class="form-control select2 ">
                                                        <option value=""></option>
                                                        <option value="1">فعال</option>
                                                        <option value="0">عير فعال</option>

                                                    </select>
                                                    <div class="form-control-focus"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-md-line-input">
                                                <label for="name" class="col-md-4  control-label">سعر البيع
                                                </label>
                                                <div class="col-md-8">
                                                    <input required="" type="number" name="price" value=""
                                                           class="form-control" placeholder="سعر البيع">
                                                    <div class="form-control-focus"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <!--
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <div class="col-md-6">
                                                                            <div class="form-group form-md-line-input ">
                                                                                <label class="col-md-4 control-label" for="orph_degre">
                                                                                    النوع</label>

                                                                                <div class="col-md-8">
                                                                                    <select required name="cust_type"
                                                                                            data-placeholder="النوع" data-allow-clear="true"
                                                                                            class="form-control select2 ">
                                                                                        <option value=""></option>
                                                                                        <option value="0">مورد</option>
                                                                                        <option value="1">زبون</option>

                                                                                    </select>
                                                                                    <div class="form-control-focus"></div>

                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                -->
                            </div>
                            <div class="clearfix"></div>
                        </div>

                    </form>

                    <!-- END SAMPLE FORM PORTLET-->
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" onclick="submitForm('product')" class="btn green ok">حفظ التغييرات</button>
            <button type="button" data-dismiss="modal" class="btn btn-default">اغلاق</button>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="portlet box green">
                <div class="portlet-title">
                    <div class="caption">
                        <i class="fa fa-globe"></i>المنتجات
                    </div>
                    <div class="tools">

                    </div>
                </div>

                <div class="portlet-body">
                    <div class="table-toolbar">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="btn-group">
                                    <button onclick="showModal('product',null)" class="btn sbold red"> إضافة جديد
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="table-container">

                        <table class="table table-striped  table-hover" id="productTable">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th> إسم المنتج</th>
                                <th>السعر</th>
                                <th>صورة المنتج</th>
                                <th>التصنيف</th>
                                <th>الحالة</th>
                                <th>الباركود</th>
                                <th> إجراء</th>

                            </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection





@section('myScript')
    <script src="https://unpkg.com/html5-qrcode@2.0.9/dist/html5-qrcode.min.js"></script>

    <script>

        var product = $('#productTable').DataTable({
            processing: true,
            serverSide: true,
            order: [[1, 'asc']],

            ajax: {
                url: "{{url('product/{product}')}}",

                data: function (d) {
                    d.date_from = $('#date_from').val();
                    d.date_to = $('#date_to').val();
                    d.offer = $('#offer').val();
                }
            },
            dom: "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
            buttons: [
                {
                    text: 'تحديث',
                    className: 'btn green reload productTable',
                    action: function (e, dt, node, config) {
                        dt.ajax.reload();
                    }
                },
                /*{
                    text: 'الحملة',
                    className: 'btn red reload offer',

                },*/
            ],
            columns: [
                {className: 'text-center', data: 'id', name: '', searchable: true},
                {className: 'text-center', data: 'name', name: 'name', searchable: true},
                {className: 'text-center', data: 'price', name: 'price', searchable: true},
                {className: 'text-center', data: 'image', name: 'image', searchable: true},
                {className: 'text-center', data: 'category.name', name: 'category.name', searchable: true},
                {className: 'text-center', data: 'status', name: 'status', searchable: true},
                {className: 'text-center', data: 'barcode', name: 'barcode', searchable: true},
                {className: 'text-left', data: 'action', name: 'action', searchable: false},
            ],
        });

        $('.offer').on('click', function (e) {
            $(this).toggleClass("yellow");

            var hiddenField = $('#offer'),
                val = hiddenField.val();

            hiddenField.val(val === "true" ? "false" : "true");
            product.draw();

        });

        $('#public_search').on('click', function (e) {
            product.draw();
            e.preventDefault();
        });

        $(document).ready(function () {

            $("#qr-reader").find("button").click()

        });

        function onScanSuccess(decodedText, decodedResult) {
            console.log(`Code scanned = ${decodedText}`, decodedResult);
            $("[name='barcode']").val(decodedText);
            alert(decodedText)
        }

        var html5QrcodeScanner = new Html5QrcodeScanner(
            "qr-reader", {fps: 10, qrbox: 250});
        html5QrcodeScanner.render(onScanSuccess);
    </script>
@endsection
