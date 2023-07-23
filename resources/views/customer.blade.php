@extends('semantic')
@section('title','الزبائن')
@section('pageName','الزبائن')


@section('content')

    <div class="modal container fadeIn" id="customerModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">

        <div class="modal-body">
            <div class="row">
                <div class="col-md-12">
                    <!-- BEGIN SAMPLE FORM PORTLET-->

                    <div class="portlet-title">
                        <div class="caption font-green-haze">
                            <i class="icon-wallet font-green-haze"></i>
                            <span class="caption-subject bold uppercase"></span>الزبائن
                        </div>
                    </div>


                    <form method="POST" action="" data-toggle="validator" id="customerForm" accept-charset="UTF-8"
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
                                                    <input required="" type="text" name="full_name" value=""
                                                           class="form-control" placeholder="الإسم">
                                                    <div class="form-control-focus"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-md-line-input">
                                                <label for="address" class="col-md-4  control-label">العنوان
                                                </label>
                                                <div class="col-md-8">
                                                    <input required="" type="text" name="address" value=""
                                                           class="form-control" placeholder="العنوان">
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
                                                <label for="email" class="col-md-4  control-label">الإيميل
                                                </label>
                                                <div class="col-md-8">
                                                    <input required="" type="text" name="email" value=""
                                                           class="form-control" placeholder="الإيميل">
                                                    <div class="form-control-focus"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group form-md-line-input">
                                                <label for="phone" class="col-md-4  control-label">رقم الجوال
                                                </label>
                                                <div class="col-md-8">
                                                    <input required="" type="text" name="phone" value=""
                                                           class="form-control" placeholder="رقم الجوال">
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
            <button type="button" onclick="submitForm('customer')" class="btn green ok">حفظ التغييرات</button>
            <button type="button" data-dismiss="modal" class="btn btn-default">اغلاق</button>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <div class="portlet box green">
                <div class="portlet-title">
                    <div class="caption">
                        <i class="fa fa-globe"></i>الزبائن
                    </div>
                    <div class="tools">

                    </div>
                </div>

                <div class="portlet-body">
                    <div class="table-toolbar">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="btn-group">
                                    <button onclick="showModal('customer',null)" class="btn sbold red"> إضافة جديد
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="table-container">

                        <table class="table table-striped  table-hover" id="customerTable">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th> إسم المستخدم</th>
                                <th>الإيميل</th>
                                <th>الجوال</th>
                                <th>العنوان</th>
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

    <script>

        var customer = $('#customerTable').DataTable({
            processing: true,
            serverSide: true,
            order: [[1, 'asc']],

            ajax: {
                url: "{{url('customer/{customer}')}}",

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
                    className: 'btn green reload customerTable',
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
                {className: 'text-center', data: 'full_name', name: 'full_name', searchable: true},
                {className: 'text-center', data: 'email', name: 'email', searchable: true},
                {className: 'text-center', data: 'phone', name: 'phone', searchable: true},
                {className: 'text-center', data: 'address', name: 'address', searchable: true},
                {className: 'text-left', data: 'action', name: 'action', searchable: false},
            ],
        });

        $('.offer').on('click', function (e) {
            $(this).toggleClass("yellow");

            var hiddenField = $('#offer'),
                val = hiddenField.val();

            hiddenField.val(val === "true" ? "false" : "true");
            customer.draw();

        });

        $('#public_search').on('click', function (e) {
            customer.draw();
            e.preventDefault();
        });
    </script>
@endsection
