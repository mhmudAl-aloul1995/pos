<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <meta name="description" content="POS - Bootstrap Admin Template">
    <meta name="keywords"
          content="admin, estimates, bootstrap, business, corporate, creative, invoice, html5, responsive, Projects">
    <meta name="author" content="كاشير">
    <meta name="robots" content="noindex, nofollow">
    <title>كاشير</title>

    <link rel="shortcut icon" type="image/x-icon"
          href="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/favicon.png">

    <link rel="stylesheet"
          href="https://dreamspos.dreamguystech.com/html/template-rtl/assets/css/bootstrap.rtl.min.css">

    <link rel="stylesheet" href="https://dreamspos.dreamguystech.com/html/template-rtl/assets/css/animate.css">

    <link rel="stylesheet"
          href="https://dreamspos.dreamguystech.com/html/template-rtl/assets/plugins/owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet"
          href="https://dreamspos.dreamguystech.com/html/template-rtl/assets/plugins/owlcarousel/owl.theme.default.min.css">

    <link rel="stylesheet"
          href="https://dreamspos.dreamguystech.com/html/template-rtl/assets/plugins/select2/css/select2.min.css">

    <link rel="stylesheet"
          href="https://dreamspos.dreamguystech.com/html/template-rtl/assets/css/bootstrap-datetimepicker.min.css">

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet"
          href="https://dreamspos.dreamguystech.com/html/template-rtl/assets/plugins/fontawesome/css/all.min.css">

    <link rel="stylesheet" href="https://dreamspos.dreamguystech.com/html/template-rtl/assets/css/style.css">
</head>
<style>

    @font-face {
        font-family: 'Droid Arabic Kufi';
        src: url('DroidArabicKufi.eot');
        src: url('DroidArabicKufi.eot?#iefix') format('embedded-opentype'),
        url({{url('DroidArabicKufi.woff')}}) format('woff'),
        url({{url('DroidArabicKufi.ttf')}}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    body, .select2-selection__placeholder, .select2-selection__rendered, a, td {
        font-family: 'Droid Arabic Kufi' !important;
    }

    body, .page-title, h4, h6, h5 {
        font-family: 'Droid Arabic Kufi';
        font-weight: 300 !important;
        font-size: 100% !important;
    }

    .hide {
        display: none;
    }

    .page-wrapper {
        padding: 0 !important;

    }


</style>
<body>
<div id="global-loader">
    <div class="whirly-loader"></div>
</div>
<div class="main-wrappers">

    <div class="page-wrapper ms-0">
        <div class="content">

            <div class="row">
                <div class="col-lg-8 col-sm-12 tabs_wrapper">

                    <ul class=" tabs owl-carousel owl-theme owl-product  border-0 ">
                        @foreach($data['ctg'] as $k=>$ctg)

                            <li class="{{$k==0?'active':''}}" id="ctg{{$ctg->id}}">
                                <div class="product-details ">

                                    <i style="margin-bottom: 10px;" class="fa-solid fa-shirt fa-beat fa-xl"></i>
                                    <h6>{{$ctg->name}}</h6>
                                </div>
                            </li>

                        @endforeach
                    </ul>
                    <div class="tabs_container">
                        @foreach($data['ctg'] as $k=>$ctg)
                            <div class="tab_content {{$k==0?'active':''}}" data-tab="ctg{{$ctg->id}}">
                                <div class="row ">
                                    @foreach($ctg->products as $key=>$prd)
                                        <div id="product_{{$prd->id}}"
                                             class="col-lg-3 col-sm-6 d-flex ">
                                            <div class="productset flex-fill ">
                                                <div class="productsetimg">
                                                    <img class="img_mhmud"
                                                         src="{{$prd->img}}"
                                                         alt="img">
                                                    <h6>الكمية: 5.00</h6>
                                                    <div class="check-product">
                                                        <i class="fa fa-check"></i>
                                                    </div>
                                                </div>
                                                <div class="productsetcontent">
                                                    <h5>{{$ctg->name}}</h5>
                                                    <h4>{{$prd->name}}</h4>
                                                    <h6>{{$prd->price}}</h6>
                                                </div>
                                            </div>
                                        </div>

                                    @endforeach
                                </div>
                            </div>

                        @endforeach
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12 ">
                    <div class="order-list">
                        <div class="orderid">

                        </div>
                        <div class="actionproducts">
                            <ul>
                                <li>
                                    <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);"
                                       class="deletebg confirm-text"><img
                                            src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete-2.svg"
                                            alt="img"></a>
                                </li>
                                <li>
                                    <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);"
                                       data-bs-toggle="dropdown" aria-expanded="false"
                                       class="dropset">
                                        <img
                                            src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/ellipise1.svg"
                                            alt="img">
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton"
                                        data-popper-placement="bottom-end">
                                        <li>
                                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/#"
                                               class="dropdown-item">Action</a>
                                        </li>
                                        <li>
                                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/#"
                                               class="dropdown-item">Another Action</a>
                                        </li>
                                        <li>
                                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/#"
                                               class="dropdown-item">Something Elses</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="card-order" class="card card-order">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12">
                                    <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);"
                                       class="btn btn-adds" data-bs-toggle="modal"
                                       data-bs-target="#create"><i class="fa fa-plus me-2"></i>إضافة زبون</a>
                                </div>

                                <div class="col-lg-12">
                                    <div class="select-split ">
                                        <div class="select-group w-100">
                                            <div class="hide" id="qr-reader"></div>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="select-split ">
                                        <div class="select-group w-100">
                                            <select class="select .select2">
                                                @foreach($data['products'] as $value)
                                                    <option value="{{$value->id}}">{{$value->name}}</option>

                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {{--
                                                                <div class="col-lg-12">
                                                                    <div class="select-split">
                                                                        <div class="select-group w-100">
                                                                            <select class="select">
                                                                                <option>Product</option>
                                                                                <option>Barcode</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                --}}
                                <div class="col-12">
                                    <div class="text-end">
                                        <a onclick="scanner()" class="btn btn-scanner-set"><img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/scanner1.svg"
                                                alt="img" class="me-2">فحص باركود</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="split-card">
                        </div>
                        <div class="card-body pt-0">
                            <div class="totalitem">
                                <h4> مجموع العناصر : 0</h4>
                                <a href="#" id="removeAll">
                                    حذف الكل</a>
                            </div>
                            <div class="product-table">

                            </div>
                        </div>
                        <div class="split-card">
                        </div>
                        <div class="card-body pt-0 pb-2">
                            <div class="setvalue">
                                <ul>
                                    <li>
                                        <h5>المجموع </h5>
                                        <h6>0</h6>
                                    </li>
                                    <li>
                                        <h5>خصم </h5>
                                        <h6>0 شيكل</h6>
                                    </li>
                                    <li class="total-value">
                                        <h5>المجموع الكلي </h5>
                                        <h6>0</h6>
                                    </li>
                                </ul>
                            </div>
                            <div class="setvaluecash">
                                <ul>
                                    <li>
                                        <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);"
                                           class="paymentmethod">
                                            <img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/cash.svg"
                                                alt="img" class="me-2">
                                            نقدي
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);"
                                           class="paymentmethod">
                                            <img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/debitcard.svg"
                                                alt="img" class="me-2">
                                            دَين
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);"
                                           class="paymentmethod">
                                            <img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/scan.svg"
                                                alt="img" class="me-2">
                                            اعتماد
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="btn-totallabel">
                                <h5>الدفع</h5>
                                <h6>60.00$</h6>
                            </div>
                            <div class="btn-pos">
                                <ul>
                                    <li>
                                        <a class="btn"><img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/pause1.svg"
                                                alt="img" class="me-1">Hold</a>
                                    </li>
                                    <li>
                                        <a class="btn"><img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit-6.svg"
                                                alt="img" class="me-1">Quotation</a>
                                    </li>
                                    <li>
                                        <a class="btn"><img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/trash12.svg"
                                                alt="img" class="me-1">Void</a>
                                    </li>
                                    <li>
                                        <a class="btn"><img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/wallet1.svg"
                                                alt="img" class="me-1">Payment</a>
                                    </li>
                                    <li>
                                        <a class="btn" data-bs-toggle="modal" data-bs-target="#recents"><img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/transcation.svg"
                                                alt="img" class="me-1"> Transaction</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="calculator" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Define Quantity</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="calculator-set">
                    <div class="calculatortotal">
                        <h4>0</h4>
                    </div>
                    <ul>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">1</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">2</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">3</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">4</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">5</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">6</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">7</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">8</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">9</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);"
                               class="btn btn-closes"><img
                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/close-circle.svg"
                                    alt="img"></a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">0</a>
                        </li>
                        <li>
                            <a href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);"
                               class="btn btn-reverse"><img
                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/reverse.svg"
                                    alt="img"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="holdsales" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Hold order</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="hold-order">
                    <h2>4500.00</h2>
                </div>
                <div class="form-group">
                    <label>Order Reference</label>
                    <input type="text">
                </div>
                <div class="para-set">
                    <p>The current order will be set on hold. You can retreive this order from the pending order button.
                        Providing a reference to it might help you to identify the order more quickly.</p>
                </div>
                <div class="col-lg-12">
                    <a class="btn btn-submit me-2">Submit</a>
                    <a class="btn btn-cancel" data-bs-dismiss="modal">Cancel</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="edit" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Order</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Product Price</label>
                            <input type="text" value="20">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Product Price</label>
                            <select class="select">
                                <option>Exclusive</option>
                                <option>Inclusive</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label> Tax</label>
                            <div class="input-group">
                                <input type="text">
                                <a class="scanner-set input-group-text">
                                    %
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Discount Type</label>
                            <select class="select">
                                <option>Fixed</option>
                                <option>Percentage</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Discount</label>
                            <input type="text" value="20">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Sales Unit</label>
                            <select class="select">
                                <option>Kilogram</option>
                                <option>Grams</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <a class="btn btn-submit me-2">Submit</a>
                    <a class="btn btn-cancel" data-bs-dismiss="modal">Cancel</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="create" tabindex="-1" aria-labelledby="create" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Create</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Customer Name</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Country</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>City</label>
                            <input type="text">
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12 col-12">
                        <div class="form-group">
                            <label>Address</label>
                            <input type="text">
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <a class="btn btn-submit me-2">Submit</a>
                    <a class="btn btn-cancel" data-bs-dismiss="modal">Cancel</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="delete" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Order Deletion</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="delete-order">
                    <img src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/close-circle1.svg"
                         alt="img">
                </div>
                <div class="para-set text-center">
                    <p>The current order will be deleted as no payment has been <br> made so far.</p>
                </div>
                <div class="col-lg-12 text-center">
                    <a class="btn btn-danger me-2">Yes</a>
                    <a class="btn btn-cancel" data-bs-dismiss="modal">No</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="recents" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Recent Transactions</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="tabs-sets">
                    <ul class="nav nav-tabs" id="myTabs" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="purchase-tab" data-bs-toggle="tab"
                                    data-bs-target="#purchase" type="button" aria-controls="purchase"
                                    aria-selected="true" role="tab">Purchase
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payment"
                                    type="button" aria-controls="payment" aria-selected="false" role="tab">Payment
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="return-tab" data-bs-toggle="tab" data-bs-target="#return"
                                    type="button" aria-controls="return" aria-selected="false" role="tab">Return
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="purchase" role="tabpanel"
                             aria-labelledby="purchase-tab">
                            <div class="table-top">
                                <div class="search-set">
                                    <div class="search-input">
                                        <a class="btn btn-searchset"><img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/search-white.svg"
                                                alt="img"></a>
                                    </div>
                                </div>
                                <div class="wordset">
                                    <ul>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/pdf.svg"
                                                    alt="img"></a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/excel.svg"
                                                    alt="img"></a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/printer.svg"
                                                    alt="img"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table datanew">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Reference</th>
                                        <th>Customer</th>
                                        <th>Amount</th>
                                        <th class="text-end">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>INV/SL0101</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>INV/SL0101</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>INV/SL0101</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>INV/SL0101</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>INV/SL0101</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>INV/SL0101</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>INV/SL0101</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="payment" role="tabpanel">
                            <div class="table-top">
                                <div class="search-set">
                                    <div class="search-input">
                                        <a class="btn btn-searchset"><img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/search-white.svg"
                                                alt="img"></a>
                                    </div>
                                </div>
                                <div class="wordset">
                                    <ul>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/pdf.svg"
                                                    alt="img"></a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/excel.svg"
                                                    alt="img"></a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/printer.svg"
                                                    alt="img"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table datanew">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Reference</th>
                                        <th>Customer</th>
                                        <th>Amount</th>
                                        <th class="text-end">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0101</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0102</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0103</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0104</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0105</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0106</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0107</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="return" role="tabpanel">
                            <div class="table-top">
                                <div class="search-set">
                                    <div class="search-input">
                                        <a class="btn btn-searchset"><img
                                                src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/search-white.svg"
                                                alt="img"></a>
                                    </div>
                                </div>
                                <div class="wordset">
                                    <ul>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"><img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/pdf.svg"
                                                    alt="img"></a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"><img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/excel.svg"
                                                    alt="img"></a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"><img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/printer.svg"
                                                    alt="img"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table datanew">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Reference</th>
                                        <th>Customer</th>
                                        <th>Amount</th>
                                        <th class="text-end">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0101</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0102</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0103</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0104</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0105</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0106</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-03-07</td>
                                        <td>0107</td>
                                        <td>Walk-in Customer</td>
                                        <td>$ 1500.00</td>
                                        <td>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/eye.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit.svg"
                                                    alt="img">
                                            </a>
                                            <a class="me-3 confirm-text"
                                               href="https://dreamspos.dreamguystech.com/html/template-rtl/javascript:void(0);">
                                                <img
                                                    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete.svg"
                                                    alt="img">
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/js/jquery-3.6.0.min.js"></script>

<script src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/js/feather.min.js"></script>

<script src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/js/jquery.slimscroll.min.js"></script>

<script src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/js/bootstrap.bundle.min.js"></script>

<script src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/js/jquery.dataTables.min.js"></script>
<script src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/js/dataTables.bootstrap4.min.js"></script>

<script src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/plugins/select2/js/select2.min.js"></script>

<script
    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/plugins/owlcarousel/owl.carousel.min.js"></script>

<script
    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/plugins/sweetalert/sweetalert2.all.min.js"></script>
<script
    src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/plugins/sweetalert/sweetalerts.min.js"></script>

<script src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/js/script.js"></script>

<script src="https://unpkg.com/html5-qrcode@2.0.9/dist/html5-qrcode.min.js"></script>

<script>

    $(document).ready(function () {
        $('.img_mhmud').css({'width': '250px', 'height': '250px'});
        $(".product-details > li").show()

        $("#qr-reader").find("button").click()
        $("body").css('color', 'red')
        $(".customizer-links").remove();


    });
    $(".tab_content .row div .productset ").on("click", function (event) {

        var product = $(this).parent();
        var id = product.attr('id').split('_')[1];

        var checkProductExict = $(product).find('.productset').hasClass('active');

        if (checkProductExict) {


            $("#prd_" + id + "").fadeOut(300, function () {

                $(this).remove();
                product.find('.active').removeClass('active')
                synnCasher()

            });
            return false;
        }

        var product_name = $(product).find('h4').text();
        var product_price = $(product).find('.productsetcontent').find('h6').text();
        var product_img = $(product).find('img').attr('src');
        var ctg = $(product).find('h5').text();

        $(".product-table").prepend('<ul id="prd_' + id + '" class="product-lists">' +
            '                                    <li><div class="productimg">' +
            '                                            <div class="productimgs">' +
            '                                                <img' +
            '                                                    src="' + product_img + '"' +
            '                                                    alt="img">' +
            '                                            </div>' +
            '                                            <div class="productcontet">' +
            '                                                <h4>' + product_name + '' +
            '                                                    <a href=""' +
            '                                                       class="ms-2" data-bs-toggle="modal"' +
            '                                                       data-bs-target="#edit"><img' +
            '                                                            src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/edit-5.svg"' +
            '                                                            alt="img"></a>' +
            '                                                </h4>' +
            '                                                <div class="productlinkset">' +
            '                                                    <h5>' + ctg + '</h5>' +
            '                                                </div>' +
            '                                                <div class="increment-decrement">' +
            '                                                    <div class="input-groups">' +
            '                                                        <input onclick="minus(this)" type="button" value="-" class="button-minus dec button">' +
            '                                                        <input  type="text" name="child" value="1"' +
            '                                                               class="quantity-field">' +
            '                                                        <input type="button" value="+" onclick="plus(this)" class="button-plus inc button ">' +
            '                                                    </div>' +
            '                                                </div>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                    </li>' +
            '                                    <li class="prd_price">' + product_price + '</li>' +
            '                                    <li onclick="removeThis(this)" ><a class=" remove_this confirm-text"' +
            '                                           href="#card-order"><a href="#" class="deletebg confirm-text"><img src="https://dreamspos.dreamguystech.com/html/template-rtl/assets/img/icons/delete-2.svg" alt="img"></a>' +
            '' +
            '</a></li>' +
            '                                </ul>').fadeIn(500);
        synnCasher()

    });

    function plus(thiss) {
        var thes = $(thiss).parent();
        var quantity = thes.find('.quantity-field').val();
        quantity = Number(thes.find('.quantity-field').val()) + 1;
        if (quantity < 0) {
            return false;
        }
        thes.find('.quantity-field').val(quantity)
        synnCasher()

    }

    function minus(thiss) {
        var thes = $(thiss).parent();
        var quantity = thes.find('.quantity-field').val();
        quantity = Number(thes.find('.quantity-field').val()) - 1;
        if (quantity < 0) {
            return false;
        }
        thes.find('.quantity-field').val(quantity)
        synnCasher()
    }

    function removeThis(thiss) {
        $(thiss).parent().fadeOut(300, function (q) {
            $(this).remove()
            $(".tab_content").find('.active').removeClass('active')
            synnCasher()

        });


    }

    $(".page-wrapper").on("click", function (event) {

        synnCasher()

    });

    $('#removeAll').click(function (event) {
        event.preventDefault();
        $(".product-lists").fadeOut(500, function () {
            synnCasher()

            $(this).remove();
            $(".product-details:first ").click()

            $(".totalitem").find("h4").text("مجموع العناصر :" + $(".product-lists").length)

            $(".tab_content").find('.active').removeClass('active')
        });

    });

    function scanner() {
        $("#qr-reader").toggleClass('hide');
        $("#qr-reader").find("button").click()
        $("#qr-reader__camera_selection").val($('#qr-reader__camera_selection option:first').val()).trigger('change')

    }


    function synnCasher() {
        $(".totalitem").find("h4").text("مجموع العناصر :" + $(".product-lists").length)
        var productcontet = $('.product-lists');
        var total = 0;

        productcontet.each(function () {
            var quantity = Number($(this).find('.quantity-field').val());
            var price = Number($(this).find('.prd_price').text());

            total += quantity * price
        });

        $(".total-value h6").text(total + ' شيكل ')
        $(".setvalue h6:first").text(total + ' شيكل ');
    }

    function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code scanned = ${decodedText}`, decodedResult);

        alert(decodedText)
    }

    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", {fps: 10, qrbox: 250});
    html5QrcodeScanner.render(onScanSuccess);
</script>
</body>
</html>
