	window.width = jQuery(window).width();

	jQuery(window).ready(function () {
		//jQuery.browserDetect();

		loadScript(plugin_path + 'bootstrap/js/bootstrap.min.js?v=0.02', function() {

			Init(false);

		});
	});

	function Init(is_ajax) {

		// First Load Only
		if(is_ajax != true) {

			_afterResize();
			_slider_full();
			_topNav();
			_sideNav();
			_stickyFooter();
			_infiniteScroll();

		}

		//_owl_carousel();
		_flexslider();
		_popover();
		_lightbox();
		//_mixitup();
		//_animate();
		//_onepageNav();
		_scrollTo(false, 0);
		//_parallax();
		_video();
		//_youtubeBG();
		_toggle();
		//_placeholder();
		//_wrotate();
		_lazyload();
		_misc();
		_toastr(false,false,false,false);
		_select2();
		_form();
		//_zoom();
		//_slimScroll();
		_modalAutoLoad();
		//_bgimage();

		//_first_last_word();

		jQuery("a[data-toggle=tooltip], button[data-toggle=tooltip], span[data-toggle=tooltip]").tooltip();
	}

/** First Last word
 **************************************************************** **/
	function _first_last_word(){

		jQuery(".lastWord").html(function(){
			var text= jQuery(this).text().trim().split(" ");
			var last = text.pop();
			return text.join(" ") + (text.length > 0 ? " <strong>" + last + "</strong>" : last);
		});

		jQuery(".firstWord").html(function(){
			var text= jQuery(this).text().trim().split(" ");
			var first = text.shift();
			return (text.length > 0 ? "<strong>"+ first + "</strong> " : first) + text.join(" ");
		});

	}

/** Preloader
 **************************************************************** **/
	if($('#preloader').length > 0) {

		$(window).on("load", function () {

			$('#preloader').fadeOut(1000, function() {
				$('#preloader').remove();
			});

			// setTimeout(function() {}, 1000);

		});

	}

/** After Resize
 **************************************************************** **/
	function _afterResize() {

		/*
			IMPORTAT!
			We need .load() to avoid conflicts
		*/
		$(window).on("load", function () {
			"use strict";

			// On Resize
			jQuery(window).resize(function() {

				if(window.afterResizeApp) {
					clearTimeout(window.afterResizeApp);
				}

				window.afterResizeApp = setTimeout(function() {

					_slider_full();
					window.width = jQuery(window).width();

					// Resize Flex Slider if exists!
					if(jQuery('.flexslider').length > 0) {
						jQuery('.flexslider').resize();
					}

				}, 300);

			});

		});

	}

	var _arr 	= {};
	function loadScript(scriptName, callback) {

		if (!_arr[scriptName]) {
			_arr[scriptName] = true;

			var body 		= document.getElementsByTagName('body')[0];
			var script 		= document.createElement('script');
			script.type 	= 'text/javascript';
			script.src 		= scriptName;

			// then bind the event to the callback function
			// there are several events for cross browser compatibility
			// script.onreadystatechange = callback;
			script.onload = callback;

			// fire the loading
			body.appendChild(script);

		} else if (callback) {

			callback();

		}

	};

/** 00. Slider Full Height
 **************************************************************** **/
	function _slider_full() {
		_headerHeight = 0;

		if(jQuery("#header").hasClass('transparent') || jQuery("#header").hasClass('translucent')) {
			_headerHeight = 0;
		} else {
			_headerHeight = jQuery("#header").outerHeight();

			if(jQuery("#topBar").length > 0) {
				_headerHeight = _headerHeight + jQuery("#topBar").outerHeight();
			}
		}

		_screenHeight = jQuery(window).height() - _headerHeight;

		jQuery("#slider.fullheight").height(_screenHeight);
	}

/** 01. Top Nav
 **************************************************************** **/
	function _topNav() {
		window.scrollTop 	= 0;
		var _header_el 		= jQuery("#header");

		jQuery(window).scroll(function() {
			_toTop();
		});

		/* Scroll To Top */
		function _toTop() {
			_scrollTop = jQuery(document).scrollTop();

			if(_scrollTop > 100) {

				if(jQuery("#toTop").is(":hidden")) {
					jQuery("#toTop").show();
				}

			} else {

				if(jQuery("#toTop").is(":visible")) {
					jQuery("#toTop").hide();
				}

			}

		}

		// Mobile Submenu
		var addActiveClass 	= false;
		jQuery("#topMain a.dropdown-toggle").bind("click", function(e) {

			if(jQuery(this).attr('href') == "#") {
				e.preventDefault();
			}

			addActiveClass = jQuery(this).parent().hasClass("resp-active");
			jQuery("#topMain").find(".resp-active").removeClass("resp-active");

			if(!addActiveClass) {
				jQuery(this).parents("li").addClass("resp-active");
			}

			return;

		});

		// Srearch
		jQuery('li.search i.fa').click(function () {
			if(jQuery('#header .search-box').is(":visible")) {
				jQuery('#header .search-box').fadeOut(300);
			} else {
				jQuery('.search-box').fadeIn(300);
				jQuery('#header .search-box form input').focus();

				// hide quick cart if visible
				if (jQuery('#header li.quick-cart div.quick-cart-box').is(":visible")) {
					jQuery('#header li.quick-cart div.quick-cart-box').fadeOut(300);
				}
			}
		});

		// close search box on body click
		if(jQuery('#header li.search i.fa').length != 0) {
			jQuery('#header .search-box, #header li.search i.fa').on('click', function(e){
				e.stopPropagation();
			});

			jQuery('body').on('click', function() {
				if(jQuery('#header li.search .search-box').is(":visible")) {
					jQuery('#header .search-box').fadeOut(300);
				}
			});
		}

		jQuery(document).bind("click", function() {
			if(jQuery('#header li.search .search-box').is(":visible")) {
				jQuery('#header .search-box').fadeOut(300);
			}
		});

		// Close Fullscreen Search
		jQuery("#closeSearch").bind("click", function(e) {
			e.preventDefault();

			jQuery('#header .search-box').fadeOut(300);
		});

		// Page Menu [mobile]
		jQuery("button#page-menu-mobile").bind("click", function() {
			jQuery(this).next('ul').slideToggle(150);
		});

		// Quick Cart
		jQuery('li.quick-cart>a').click(function (e) {
			e.preventDefault();

			var _quick_cart_box = jQuery('li.quick-cart div.quick-cart-box');

			if(_quick_cart_box.is(":visible")) {
				_quick_cart_box.fadeOut(300);
			} else {
				_quick_cart_box.fadeIn(300);

				// close search if visible
				if(jQuery('li.search .search-box').is(":visible")) {
					jQuery('.search-box').fadeOut(300);
				}
			}
		});
		// close quick cart on body click
		if(jQuery('li.quick-cart>a').length != 0) {
			jQuery('li.quick-cart').on('click', function(e){
				e.stopPropagation();
			});

			jQuery('body').on('click', function() {
				if (jQuery('li.quick-cart div.quick-cart-box').is(":visible")) {
					jQuery('li.quick-cart div.quick-cart-box').fadeOut(300);
				}
			});
		}

		// Page Menu [scrollTo]
		jQuery("#page-menu ul.menu-scrollTo>li").bind("click", function(e) {

			// calculate padding-top for scroll offset
			var _href 	= jQuery('a', this).attr('href');

			if(!jQuery('a', this).hasClass('external')) {
				e.preventDefault();

				jQuery("#page-menu ul.menu-scrollTo>li").removeClass('active');
				jQuery(this).addClass('active');

				if(jQuery(_href).length > 0) {

					_padding_top = 0;

					if(jQuery("#header").hasClass('sticky')) {
						_padding_top = jQuery(_href).css('padding-top');
						_padding_top = _padding_top.replace('px', '');
					}

					jQuery('html,body').animate({scrollTop: jQuery(_href).offset().top - _padding_top}, 800, 'easeInOutExpo');

				}

			}

		});

		// BOTTOM NAV
		if(_header_el.hasClass('bottom')) {

			// Add dropup class
			_header_el.addClass('dropup');
			window.homeHeight 	= jQuery(window).outerHeight() - 55;

			// sticky header
			if(_header_el.hasClass('sticky')) {
				window.isOnTop 		= true;

				// if scroll is > 60%, remove class dropup
				jQuery(window).scroll(function() {
					if(jQuery(document).scrollTop() > window.homeHeight / 2) {
						_header_el.removeClass('dropup');
					} else {
						_header_el.addClass('dropup');
					}
				});

				// Add fixed|not fixed & dropup|no dropup
				jQuery(window).scroll(function() {
					if(jQuery(document).scrollTop() > window.homeHeight) {
						if(window.isOnTop === true) {
							jQuery('#header').addClass('fixed');
							_header_el.removeClass('dropup');
							window.isOnTop = false;
						}
					} else {
						if(window.isOnTop === false) {
							jQuery('#header').removeClass('fixed');
							_header_el.addClass('dropup');
							window.isOnTop = true;
						}
					}
				});

				// get window height on resize
				jQuery(window).resize(function() {
					window.homeHeight = jQuery(window).outerHeight();
				});

			}

		} else

		// STICKY
		if(_header_el.hasClass('sticky')) {

			jQuery(window).scroll(function() {
				if(window.width > 768) {

					var _scrollTop 	= jQuery(document).scrollTop();
						_topBar_H 	= jQuery("#topBar").outerHeight() || 0;

					if(_scrollTop > _topBar_H) {
						_header_el.addClass('fixed');

						_header_H = _header_el.outerHeight() || 0;

						if(!_header_el.hasClass('transparent') && !_header_el.hasClass('translucent')) {
							jQuery('body').css({"padding-top":_header_H+"px"});
						}

					} else {
						if(!_header_el.hasClass('transparent') && !_header_el.hasClass('translucent')) {
							jQuery('body').css({"padding-top":"0px"});
						}

						_header_el.removeClass('fixed');
					}

				}
			});

		} else

		if(_header_el.hasClass('static')) {
			// _header_H = _header_el.outerHeight() + "px";
			// jQuery('body').css({"padding-top":_header_H});
		}

		// Slide Top
		jQuery("#slidetop a.slidetop-toggle").bind("click", function() {
			jQuery("#slidetop .container").slideToggle(150, function() {

				if(jQuery("#slidetop .container").is(":hidden")) {
					jQuery("#slidetop").removeClass('active');
				} else {
					jQuery("#slidetop").addClass('active');
				}

			});
		});
		// 'esc' key
		jQuery(document).keyup(function(e) {
			if(e.keyCode == 27) {
				if(jQuery("#slidetop").hasClass("active")) {
					jQuery("#slidetop .container").slideToggle(150, function() {
						jQuery("#slidetop").removeClass('active');
					});
				}
			}
		});

		// Slide Panel
		jQuery("a#sidepanel_btn").bind("click", function(e) {
			e.preventDefault();

			_pos = "right";
			if(jQuery("#sidepanel").hasClass('sidepanel-inverse')) {
				_pos = "left";
			}

			if(jQuery("#sidepanel").is(":hidden")) {

				jQuery("body").append('<span id="sidepanel_overlay"></span>');

				if(_pos == "left") {
					jQuery("#sidepanel").stop().show().animate({"left":"0px"}, 150);
				} else {
					jQuery("#sidepanel").stop().show().animate({"right":"0px"}, 150);
				}

			} else {

				jQuery("#sidepanel_overlay").remove();

				if(_pos == "left") {
					jQuery("#sidepanel").stop().animate({"left":"-300px"}, 300);
				} else {
					jQuery("#sidepanel").stop().animate({"right":"-300px"}, 300);
				}

				setTimeout(function() {
					jQuery("#sidepanel").hide();
				}, 500);

			}

			_sidepanel_overlay();

		});
		// button close
		jQuery("#sidepanel_close").bind("click", function(e) {
			e.preventDefault();
			jQuery("a#sidepanel_btn").trigger('click');
		});
		// overlay click
		function _sidepanel_overlay() {
			jQuery("#sidepanel_overlay").unbind();
			jQuery("#sidepanel_overlay").bind("click", function() {
				jQuery("a#sidepanel_btn").trigger('click');
			});
		}
		// 'esc' key
		jQuery(document).keyup(function(e) {
			if(e.keyCode == 27) {
				if(jQuery("#sidepanel").is(":visible")) {
					jQuery("a#sidepanel_btn").trigger('click');
				}
			}
		});

		/** OVERLAY MENU
		 *************************** **/
		if(jQuery("#menu_overlay_open").length > 0) {
			var is_ie9 = jQuery('html').hasClass('ie9') ? true : false;

			if(is_ie9 == true) {
				jQuery("#topMain").hide();
			}

			// open
			jQuery("#menu_overlay_open").bind("click", function(e) {
				e.preventDefault();

				jQuery('body').addClass('show-menu');

				if(is_ie9 == true) {
					jQuery("#topMain").show();
				}
			});

			// close
			jQuery("#menu_overlay_close").bind("click", function(e) {
				e.preventDefault();

				if(jQuery('body').hasClass('show-menu')) {
					jQuery('body').removeClass('show-menu');
				}

				if(is_ie9 == true) {
					jQuery("#topMain").hide();
				}
			});

			// 'esc' key
			jQuery(document).keyup(function(e) {
				if(e.keyCode == 27) {
					if(jQuery('body').hasClass('show-menu')) {
						jQuery('body').removeClass('show-menu');
					}

					if(is_ie9 == true) {
						jQuery("#topMain").hide();
					}
				}
			});

		}

		/** VERTICAL MENU SHOW|HIDE
		 *************************** **/
		// RTL supported!
		if(jQuery("#sidebar_vertical_btn").length > 0) {
			if(jQuery("body").hasClass('menu-vertical-hide')) {

				// Determine the position (left or right?)
				_paddingStatusL = jQuery("#mainMenu.sidebar-vertical").css('left');
				_paddingStatusR = jQuery("#mainMenu.sidebar-vertical").css('right');

				if(parseInt(_paddingStatusL) < 0) {
					var _pos = "left";
				} else

				if(parseInt(_paddingStatusR) < 0) {
					var _pos = "right";
				}

				else {
					var _pos = "left";
				}

				// Show|Hide Vertical Menu
				jQuery("#sidebar_vertical_btn").bind("click", function(e) {

					_paddingStatus = jQuery("#mainMenu.sidebar-vertical").css(_pos);

					if(parseInt(_paddingStatus) < 0) {
						if(_pos == "right") {
							jQuery("#mainMenu.sidebar-vertical").stop().animate({"right":"0px"}, 200);
						} else {
							jQuery("#mainMenu.sidebar-vertical").stop().animate({"left":"0px"}, 200);
						}
					} else {
						if(_pos == "right") {
							jQuery("#mainMenu.sidebar-vertical").stop().animate({"right":"-263px"}, 200);
						} else {
							jQuery("#mainMenu.sidebar-vertical").stop().animate({"left":"-263px"}, 200);
						}
					}
				});

				// Hide on scroll
				jQuery(window).scroll(function() {

					_paddingStatus = parseInt(jQuery("#mainMenu.sidebar-vertical").css(_pos));

					if(_paddingStatus >= 0) {
						if(_pos == "right") {
							jQuery("#mainMenu.sidebar-vertical").stop().animate({"right":"-263px"}, 200);
						} else {
							jQuery("#mainMenu.sidebar-vertical").stop().animate({"left":"-263px"}, 200);
						}
					}

				});

			}
		}

		// quick cart & search for mobile - top calculate
		// Quick Cart & top Search Fix (if #topBar exists).
		if(jQuery("#topBar").length > 0) {
			jQuery("#topNav ul").addClass('has-topBar');
		}

		// Hide Cart & Search on Scroll
		jQuery(window).scroll(function() {
			if(window.width < 769) {
				// hide quick cart if visible
				if (jQuery('#header li.quick-cart div.quick-cart-box').is(":visible")) {
					jQuery('#header li.quick-cart div.quick-cart-box').fadeOut(0);
				}
				// hide search if visible
				if(jQuery('#header li.search .search-box').is(":visible")) {
					jQuery('#header .search-box').fadeOut(0);
				}
			}
		});
	}

	function _toastr(_message,_position,_notifyType,_onclick) {
		var _btn 	= jQuery(".toastr-notify");

		if(_btn.length > 0 || _message != false) {

			loadScript(plugin_path + 'toastr/toastr.js', function() {
				// toastr.clear();

				/** BUTTON CLICK
				 ********************* **/
				_btn.bind("click", function(e) {
					e.preventDefault();

					var _message 			= jQuery(this).attr('data-message'),
						_notifyType 		= jQuery(this).attr('data-notifyType')			|| "default",
						_position	 		= jQuery(this).attr('data-position')			|| "top-right",
						_progressBar 		= jQuery(this).attr('data-progressBar') 		== "true" ? true : false,
						_closeButton		= jQuery(this).attr('data-closeButton') 		== "true" ? true : false,
						_debug		 		= jQuery(this).attr('data-debug') 				== "true" ? true : false,
						_newestOnTop 		= jQuery(this).attr('data-newestOnTop') 		== "true" ? true : false,
						_preventDuplicates	= jQuery(this).attr('data-preventDuplicates') 	== "true" ? true : false,
						_showDuration 		= jQuery(this).attr('data-showDuration') 		|| "300",
						_hideDuration 		= jQuery(this).attr('data-hideDuration') 		|| "1000",
						_timeOut 			= jQuery(this).attr('data-timeOut') 			|| "5000",
						_extendedTimeOut	= jQuery(this).attr('data-extendedTimeOut')		|| "1000",
						_showEasing 		= jQuery(this).attr('data-showEasing') 			|| "swing",
						_hideEasing 		= jQuery(this).attr('data-hideEasing') 			|| "linear",
						_showMethod 		= jQuery(this).attr('data-showMethod') 			|| "fadeIn",
						_hideMethod 		= jQuery(this).attr('data-hideMethod') 			|| "fadeOut";

						toastr.options = {
							"closeButton": 			_closeButton,
							"debug": 				_debug,
							"newestOnTop": 			_newestOnTop,
							"progressBar": 			_progressBar,
							"positionClass": 		"toast-" + _position,
							"preventDuplicates": 	_preventDuplicates,
							"onclick": 				null,
							"showDuration": 		_showDuration,
							"hideDuration": 		_hideDuration,
							"timeOut": 				_timeOut,
							"extendedTimeOut": 		_extendedTimeOut,
							"showEasing": 			_showEasing,
							"hideEasing": 			_hideEasing,
							"showMethod": 			_showMethod,
							"hideMethod": 			_hideMethod
						}

					toastr[_notifyType](_message);
				});

				/** JAVSCRIPT / ON LOAD
				 ************************* **/
				if(_message != false) {

					if(_onclick != false) {
						onclick = function() {
							window.location = _onclick;
						}
					} else {
						onclick = null
					}

					toastr.options = {
						"closeButton": 			true,
						"debug": 				false,
						"newestOnTop": 			false,
						"progressBar": 			true,
						"positionClass": 		"toast-" + _position,
						"preventDuplicates": 	false,
						"onclick": 				onclick,
						"showDuration": 		"300",
						"hideDuration": 		"1000",
						"timeOut": 				"5000",
						"extendedTimeOut": 		"1000",
						"showEasing": 			"swing",
						"hideEasing": 			"linear",
						"showMethod": 			"fadeIn",
						"hideMethod": 			"fadeOut"
					}

					setTimeout(function(){
						toastr[_notifyType](_message);
					}, 1500); // delay 1.5s
				}
			});

		}

	}

/** 02. Side Nav
 **************************************************************** **/
	function _sideNav() {

		/* Mobile Button */
		jQuery("div.side-nav").each(function() {
			var _t = jQuery('ul', this);
			jQuery('button', this).bind("click", function() {
				_t.slideToggle(300);
			});
		});

		/* Submenus */
		jQuery("div.side-nav>ul>li>a.dropdown-toggle").bind("click", function(e) {
			e.preventDefault();

			jQuery(this).next('ul').slideToggle(200);
			jQuery(this).closest('li').toggleClass('active');
		});

	}


	function _onepageNav() {
		var _container = jQuery("#topMain.nav-onepage");

		if(_container.length > 0) {

			loadScript(plugin_path + 'jquery.nav.min.js', function() {

				jQuery(_container).onePageNav({
					currentClass: 		'active',
					changeHash: 		false,
					scrollSpeed: 		750,
					scrollThreshold: 	0.5,
					filter: 			':not(.external)',
					easing: 			'easeInOutExpo'
				});

			});

		}

	}

/** 03. OWL Carousel
 **************************************************************** **/
	function _owl_carousel() {
		var _container = jQuery("div.owl-carousel");

		if(_container.length > 0) {

			loadScript(plugin_path + 'owl-carousel/owl.carousel.js', function() {

				_container.each(function() {

					var slider 		= jQuery(this);
					var options 	= slider.attr('data-plugin-options');

					// Progress Bar
					var $opt = eval('(' + options + ')');  // convert text to json

					if($opt.progressBar == 'true') {
						var afterInit = progressBar;
					} else {
						var afterInit = false;
					}

					var defaults = {
						items: 					5,
						itemsCustom: 			false,
						itemsDesktop: 			[1199,4],
						itemsDesktopSmall: 		[980,3],
						itemsTablet: 			[768,2],
						itemsTabletSmall: 		false,
						itemsMobile: 			[479,1],
						singleItem: 			true,
						itemsScaleUp: 			false,

						slideSpeed: 			200,
						paginationSpeed: 		800,
						rewindSpeed: 			1000,

						autoPlay: 				false,
						stopOnHover: 			false,

						navigation: 			false,
						navigationText: [
											'<i class="fa fa-angle-left"></i>',
											'<i class="fa fa-angle-right"></i>'
										],
						rewindNav: 				true,
						scrollPerPage: 			false,

						pagination: 			true,
						paginationNumbers: 		false,

						responsive: 			true,
						responsiveRefreshRate: 	200,
						responsiveBaseWidth: 	window,

						baseClass: 				"owl-carousel",
						theme: 					"owl-theme",

						lazyLoad: 				false,
						lazyFollow: 			true,
						lazyEffect: 			"fade",

						autoHeight: 			false,

						jsonPath: 				false,
						jsonSuccess: 			false,

						dragBeforeAnimFinish: 	true,
						mouseDrag: 				true,
						touchDrag: 				true,

						transitionStyle: 		false,

						addClassActive: 		false,

						beforeUpdate: 			false,
						afterUpdate: 			false,
						beforeInit: 			false,
						afterInit: 				afterInit,
						beforeMove: 			false,
						afterMove: 				(afterInit == false) ? false : moved,
						afterAction: 			false,
						startDragging: 			false,
						afterLazyLoad: 			false,
						rtl:					false
					}

					var config = jQuery.extend({}, defaults, options, slider.data("plugin-options"));
					slider.owlCarousel(config).addClass("owl-carousel-init");

					// Progress Bar
					var elem = jQuery(this);

					//Init progressBar where elem is $("#owl-demo")
					function progressBar(elem){
					  $elem = elem;
					  //build progress bar elements
					  buildProgressBar();
					  //start counting
					  start();
					}

					//create div#progressBar and div#bar then prepend to $("#owl-demo")
					function buildProgressBar(){
					  $progressBar = jQuery("<div>",{
						id:"progressBar"
					  });
					  $bar = jQuery("<div>",{
						id:"bar"
					  });
					  $progressBar.append($bar).prependTo($elem);
					}

					function start() {
					  //reset timer
					  percentTime = 0;
					  isPause = false;
					  //run interval every 0.01 second
					  tick = setInterval(interval, 10);
					};

					var time = 7; // time in seconds
					function interval() {
					  if(isPause === false){
						percentTime += 1 / time;
						$bar.css({
						   width: percentTime+"%"
						 });
						//if percentTime is equal or greater than 100
						if(percentTime >= 100){
						  //slide to next item
						  $elem.trigger('owl.next')
						}
					  }
					}

					//pause while dragging
					function pauseOnDragging(){
					  isPause = true;
					}

					//moved callback
					function moved(){
					  //clear interval
					  clearTimeout(tick);
					  //start again
					  start();
					}

				});

			});
		}

	}

/** 04. Flexslider
 **************************************************************** **/
	function _flexslider() {
		var _container = jQuery(".flexslider");

		if(_container.length > 0) {

			loadScript(plugin_path + 'slider.flexslider/jquery.flexslider-min.js', function() {

				if(jQuery().flexslider) {
					var	_controlNav 	= _container.attr('data-controlNav'),
						_slideshowSpeed = _container.attr('data-slideshowSpeed') || 7000,
						_pauseOnHover	= _container.attr('data-pauseOnHover') || false;

					if(_pauseOnHover == "true") {
						_pauseOnHover = true;
					} else{
						_pauseOnHover = false;
					}

					if(_controlNav == 'thumbnails') {
						_controlNav = 'thumbnails';
					} else
					if(_controlNav == 'true') {
						_controlNav = true;
					} else
					if(_controlNav == 'false') {
						_controlNav = false;
					} else {
						_controlNav = true;
					}

					if(_controlNav == 'thumbnails' || _controlNav == false) {
						_directionNav = false;
					} else {
						_directionNav = true;
					}

					jQuery(_container).flexslider({
						animation		: "slide",
						controlNav		: _controlNav,
						slideshowSpeed	: parseInt(_slideshowSpeed) || 7000,
						directionNav 	: _directionNav,
						pauseOnHover	: _pauseOnHover,
						start: function(slider){
							jQuery('.flex-prev').html('<i class="fa fa-angle-left"></i>');
							jQuery('.flex-next').html('<i class="fa fa-angle-right"></i>');
						}
					});

					// Resize Flex Slider if exists!
					_container.resize();

				}

			});
		}
	}

/** 04. Popover
 **************************************************************** **/
	function _popover() {

			jQuery("a[data-toggle=popover]").bind("click", function(e) {
				jQuery('.popover-title .close').remove();
				e.preventDefault();
			});

			var isVisible 	= false,
				clickedAway = false;

			jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover({

					html: true,
					trigger: 'manual'

				}).click(function(e) {

					jQuery(this).popover('show');

					clickedAway = false;
					isVisible = true;
					e.preventDefault();

				});

				jQuery(document).click(function(e) {
					if(isVisible & clickedAway) {

						jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover('hide');
						isVisible = clickedAway = false;

					} else {

						clickedAway = true;

					}

				});

			jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover({

				html: true,
				trigger: 'manual'

			}).click(function(e) {

				$(this).popover('show');
				$('.popover-title').append('<button type="button" class="close">&times;</button>');
				$('.close').click(function(e){

					jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover('hide');

				});

				e.preventDefault();
			});

		jQuery("img[data-toggle=popover]").popover({html:true});
	}

/** 05. LightBox
 **************************************************************** **/
	function _lightbox() {
		var _el = jQuery(".lightbox");

		if(_el.length > 0) {

			loadScript(plugin_path + 'magnific-popup/jquery.magnific-popup.min.js', function() {

				if(typeof(jQuery.magnificPopup) == "undefined") {
					return false;
				}

				jQuery.extend(true, jQuery.magnificPopup.defaults, {
					tClose: 		'Close',
					tLoading: 		'Loading...',

					gallery: {
						tPrev: 		'Previous',
						tNext: 		'Next',
						tCounter: 	'%curr% / %total%'
					},

					image: 	{
						tError: 	'Image not loaded!'
					},

					ajax: 	{
						tError: 	'Content not loaded!'
					}
				});

				_el.each(function() {

					var _t 			= jQuery(this),
						options 	= _t.attr('data-plugin-options'),
						config		= {},
						defaults 	= {
							type: 				'image',
							fixedContentPos: 	false,
							fixedBgPos: 		false,
							mainClass: 			'mfp-no-margins mfp-with-zoom',
							closeOnContentClick: true,
							closeOnBgClick: 	true,
							image: {
								verticalFit: 	true
							},

							zoom: {
								enabled: 		false,
								duration: 		300
							},

							gallery: {
								enabled: false,
								navigateByImgClick: true,
								preload: 			[0,1],
								arrowMarkup: 		'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
								tPrev: 				'Previous',
								tNext: 				'Next',
								tCounter: 			'<span class="mfp-counter">%curr% / %total%</span>'
							},
						};

					if(_t.data("plugin-options")) {
						config = jQuery.extend({}, defaults, options, _t.data("plugin-options"));
					}

					jQuery(this).magnificPopup(config);

				});

			});

		}

	}

/** 06. ScrollTo
 **************************************************************** **/
	function _scrollTo(to, offset) {

		if(to == false) {

			jQuery("a.scrollTo").bind("click", function(e) {
				e.preventDefault();

				var href 	= jQuery(this).attr('href'),
					_offset	= jQuery(this).attr('data-offset') || 0;

				if(href != '#' && href != '#top') {
					jQuery('html,body').animate({scrollTop: jQuery(href).offset().top - parseInt(_offset)}, 800, 'easeInOutExpo');
				}

				if(href == '#top') {
					jQuery('html,body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
				}
			});

			jQuery("#toTop").bind("click", function(e) {
				e.preventDefault();
				jQuery('html,body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
			});

		} else {

			// USAGE: _scrollTo("#footer", 150);
			jQuery('html,body').animate({scrollTop: jQuery(to).offset().top - offset}, 800, 'easeInOutExpo');

		}
	}

/** 07. Parallax
 **************************************************************** **/
	function _parallax() {

		if(jQuery().parallax) {

			// jQuery(".parallax-1").css("background-attachment", "fixed");
			jQuery(".parallax-1").parallax("50%", "0.1");

			// jQuery(".parallax-2").css("background-attachment", "fixed");
			jQuery(".parallax-2").parallax("50%", "0.2");

			// jQuery(".parallax-3").css("background-attachment", "fixed");
			jQuery(".parallax-3").parallax("50%", "0.3");

			// jQuery(".parallax-4").css("background-attachment", "fixed");
			jQuery(".parallax-4").parallax("50%", "0.4");

		}

		/** Slider Parallax
			Do not use overlay - will be very slow!
		 **************************** **/
		var _slider = jQuery('#slider');

		if(_slider.length > 0) {
			if(_slider.hasClass('parallax-slider')) {

				var block_intro_top = _slider.offset().top;

				jQuery(window).scroll(function() {

					var _currentTop = jQuery(document).scrollTop();

					if(_currentTop < 768) {
						var _sliderH 	= jQuery('#slider').height();

						jQuery('#slider>div').css('top', (_currentTop*0.5));
						jQuery('#slider>div').css('opacity', (1 - _currentTop/_sliderH*1));
					}

				});

			}
		}

	}

/** 07. Video
 **************************************************************** **/
	function _video() {

		if(jQuery("section.section-video").length > 0) {
			var _t = jQuery("section.section-video .section-container-video>video");
				_w = jQuery(window).width();

			_t.width(_w);

		}

	}

/** 07. Youtube Backround
 **************************************************************** **/
	function _youtubeBG() {
		var _container = jQuery('#YTPlayer');

		if(_container.length > 0) {
			loadScript(plugin_path + 'jquery.mb.YTPlayer.min.js', function() {

				if(jQuery().mb_YTPlayer) {
					var disableMobile = false;
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
						// disableMobile = true;
					}

					if(disableMobile === false) {

						jQuery(".player").mb_YTPlayer();

						jQuery("#video-volume").bind("click", function(e) {
							e.preventDefault();

							jQuery('#YTPlayer').toggleVolume();
						});

						// audio control
						jQuery("#video-volume").bind("click", function() {
							if(jQuery('i.fa', this).hasClass('fa-volume-down')) {
								jQuery('i.fa', this).removeClass('fa-volume-down');
								jQuery('i.fa', this).removeClass('fa-volume-up');
								jQuery('i.fa', this).addClass('fa-volume-up');
							} else {
								jQuery('i.fa', this).removeClass('fa-volume-up');
								jQuery('i.fa', this).removeClass('fa-volume-v');
								jQuery('i.fa', this).addClass('fa-volume-down');
							}
						});

					} else {

						jQuery(".player , #video-volume").hide();

					}

				}

			});
		}
	}

/** 08. Mixitup Filter
 **************************************************************** **/
	function _mixitup() {
		var _container = jQuery('.mix-grid');

		if(_container.length > 0) {
			loadScript(plugin_path + 'mixitup/jquery.mixitup.min.js', function() {

				if(jQuery().mixitup) {

					_container.mixitup();
					jQuery("ul.mix-filter a").bind("click", function(e) {
						e.preventDefault();
					});

				}

			});

		}

	}

/** 09. Toggle
 **************************************************************** **/
	function _toggle() {

		var $_t = this,
			previewParClosedHeight = 25;

		jQuery("div.toggle.active > p").addClass("preview-active");
		jQuery("div.toggle.active > div.toggle-content").slideDown(400);
		jQuery("div.toggle > label").click(function(e) {

			var parentSection 	= jQuery(this).parent(),
				parentWrapper 	= jQuery(this).parents("div.toggle"),
				previewPar 		= false,
				isAccordion 	= parentWrapper.hasClass("toggle-accordion");

			if(isAccordion && typeof(e.originalEvent) != "undefined" && !parentWrapper.hasClass('active')) {
				parentWrapper.find("div.toggle.active > label").trigger("click");
			}

			parentSection.toggleClass("active");

			if(parentSection.find("> p").get(0)) {

				previewPar 					= parentSection.find("> p");
				var previewParCurrentHeight = previewPar.css("height");
				var previewParAnimateHeight = previewPar.css("height");
				previewPar.css("height", "auto");
				previewPar.css("height", previewParCurrentHeight);

			}

			var toggleContent = parentSection.find("> div.toggle-content");

			if(parentSection.hasClass("active")) {

				jQuery(previewPar).animate({height: previewParAnimateHeight}, 350, function() {jQuery(this).addClass("preview-active");});
				toggleContent.slideDown(350);

			} else {

				jQuery(previewPar).animate({height: previewParClosedHeight}, 350, function() {jQuery(this).removeClass("preview-active");});
				toggleContent.slideUp(350);

			}

		});
	}

/** 11. Placeholder
 **************************************************************** **/
	function _placeholder() {

		//check for IE
		if(navigator.appVersion.indexOf("MSIE")!=-1) {

			jQuery('[placeholder]').focus(function() {

				var input = jQuery(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				}

			}).blur(function() {

				var input = jQuery(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
				}

			}).blur();

		}

	}

/** 12. Word Rotate
 **************************************************************** **/
	function _wrotate() {
		jQuery(".word-rotator").each(function() {

			var _t 				= jQuery(this),
				_items 			= _t.find(".items"),
				items 			= _items.find("> span"),
				firstItem 		= items.eq(0),
				firstItemClone 	= firstItem.clone(),
				_iHeight 		= jQuery(this).height(),
				_cItem 			= 1,
				_cTop 			= 0,
				_delay 			= jQuery(this).attr('data-delay') || 2000;

			_items.append(firstItemClone);
			_t.height(_iHeight).addClass("active");

			setInterval(function() {
				_cTop = (_cItem * _iHeight);

				_items.animate({top: - (_cTop) + "px"}, 300, "easeOutQuad", function(){
					_cItem++;

					if(_cItem > items.length) {
						_items.css("top", 0);
						_cItem = 1;
					}

				});

			}, _delay);

		});

		var _container = jQuery('span.rotate');

		if(_container.length > 0) {

			loadScript(plugin_path + 'text-rotator/jquery.simple-text-rotator.min.js', function() {

				_container.each(function() {
					var _t 			= jQuery(this),
						_animation 	= _t.attr('data-animation') || 'fade', // fade|flip|flipCube|flipUp|spin
						_speed 		= _t.attr('data-speed') 	|| 2000;

					_t.textrotator({
						animation: 	_animation,
						speed: 		parseInt(_speed)
					});

				});

			});

		}
	}

	function _lazyload() {
		var _container = jQuery('img.lazy');

		if(_container.length > 0) {
			loadScript(plugin_path + 'lazyload/jquery.lazyload.min.js', function() {

				if(jQuery().lazyload) {

					_container.each(function () {
						var _t 		= jQuery(this),
							_effect = _t.attr('data-effect') || 'fadeIn';

							_t.lazyload({
								effect : _effect
							});
					});

				}

			});

		}

	}

/** 13. Misc
 **************************************************************** **/
	function _misc() {

		/** Portfolio Bugfix
		 *********************** **/
		if(jQuery("#portfolio").length > 0) {
			jQuery("#portfolio .item-box .owl-carousel").each(function() {

				// Fix if has owl-carousel slider!
				jQuery(this).parent().parent().find('.item-box-desc').css({"padding-top":"29px"});

			});
		}

		/** Masonry
		 *********************** **/
		if(jQuery().masonry) {
			jQuery(".masonry").masonry();
		}

		/** Isotope Portfolio
		 *********************** **/
		var portfolio_isotope_container = jQuery("#portfolio.portfolio-isotope");

		if(portfolio_isotope_container.length > 0) {
			loadScript(plugin_path + 'isotope/isotope.pkgd.min.js', function() {

				// Isotope Portfolio
				if(jQuery().isotope) {

					var _container = jQuery('#portfolio');

					var leftOrigin = !_container.hasClass('portfolio-right');

					// Calculate Item Width on Fullwidth portfolio
					if(_container.hasClass('portfolio-isotope-2')) {
						_cols = 2;
					} else
					if(_container.hasClass('portfolio-isotope-3')) {
						_cols = 3;
					} else
					if(_container.hasClass('portfolio-isotope-4')) {
						_cols = 4;
					} else
					if(_container.hasClass('portfolio-isotope-5')) {
						_cols = 5;
					} else
					if(_container.hasClass('portfolio-isotope-6')) {
						_cols = 6;
					} else { _cols = 4; }

					function _recalcW() {
						_dw		= jQuery(document).width();

						if(_container.hasClass('fullwidth')) { // Fullwidth

							// _w 		= jQuery(document).width(); // NOT USED - problems on aside header
							_w 		= _container.width();
							_wItem	= (_w/_cols);

							if(_dw < 760) {
								_wItem = (_w/2);
							}
							if(_dw < 480) {
								_wItem = jQuery("#portfolio").width();
							}

							// Apply item width
							jQuery("#portfolio>.portfolio-item").css({"width":_wItem});

						} else { // Non Fullwidth

							_mR		= parseInt(jQuery("#portfolio>.portfolio-item").css('margin-right'));
							_w 		= jQuery("#portfolio").closest('.container').width();
							_wItem 	= _w / _cols - _mR;

							if(_dw < 760) {
								_wItem = (_w/2 - _mR);
							}
							if(_dw < 480) {
								_wItem = _w;
							}

							// Apply item & container width
							jQuery("#portfolio.portfolio-isotope").css({"width":_w});
							jQuery("#portfolio>.portfolio-item").css({"width":_wItem});

						}

						// Resize Flex Slider if exists!
						if(jQuery('.flexslider').length > 0) {
							jQuery('.flexslider').resize();
						}

					}	_recalcW();

					$(window).on("load", function (){

						var _t = setTimeout(function(){

							_container.isotope({
								masonry: {},
								isOriginLeft: leftOrigin,
								filter: '*',
								animationOptions: {
									duration: 750,
									easing: 'linear',
									queue: false
								}
							});

							jQuery('#portfolio_filter>li>a').bind("click", function(e){
								e.preventDefault();

								jQuery('#portfolio_filter>li.active').removeClass('active');
								jQuery(this).parent('li').addClass('active');

								var selector = jQuery(this).attr('data-filter');
								_container.isotope({
									filter: selector,
									isOriginLeft: leftOrigin,
									animationOptions: {
										duration: 750,
										easing: 'linear',
										queue: false
									}
								 });

							});

						}, 50 );

						setTimeout(function() {
							_container.isotope('layout');
						}, 300);

					});

					// On Resize
					jQuery(window).resize(function() {

						if(window.afterResizeApp2) {
							clearTimeout(window.afterResizeApp2);
						}

						window.afterResizeApp2 = setTimeout(function() {

							_recalcW();

							setTimeout(function() {
								_container.isotope('layout');
							}, 300);

						}, 300);

					});

				}

			});
		}	/** end isotope **/

		/** Isotope Blog
		 *********************** **/
		var blog_isotope_container = jQuery("#blog.blog-isotope");

		if(blog_isotope_container.length > 0) {
			loadScript(plugin_path + 'isotope/isotope.pkgd.min.js', function() {

				// Isotope blog
				if(jQuery().isotope) {

					var _container = jQuery('#blog');

					// Calculate Item Width on Fullwidth Blog
					if(_container.hasClass('blog-isotope-2')) {
						_cols = 2;
					} else
					if(_container.hasClass('blog-isotope-3')) {
						_cols = 3;
					} else
					if(_container.hasClass('blog-isotope-4')) {
						_cols = 4;
					} else { _cols = 4; }

					function _recalcW() {
						_dw		= jQuery(document).width();

						if(_container.hasClass('fullwidth')) { // Fullwidth

							_w 		= jQuery(document).width();
							_wItem	= (_w/_cols);

							if(_dw < 760) {
								_wItem = (_w/2);
							}
							if(_dw < 480) {
								_wItem = jQuery("#blog").width();
							}

							// Apply item width
							jQuery("#blog>.blog-post-item").css({"width":_wItem});

						} else { // Non Fullwidth

							_mR		= parseInt(jQuery("#blog>.blog-post-item").css('margin-right'));
							_w 		= jQuery("#blog").closest('.container').width();
							_wItem 	= _w / _cols - _mR;

							if(_dw < 760) {
								_wItem = (_w/2 - _mR);
							}
							if(_dw < 480) {
								_wItem = _w;
							}

							// Apply item & container width
							jQuery("#blog.blog-isotope").css({"width":_w});
							jQuery("#blog>.blog-post-item").css({"width":_wItem});

						}

						// Resize Flex Slider if exists!
						if(jQuery('.flexslider').length > 0) {
							jQuery('.flexslider').resize();
						}

					}	_recalcW();

					$(window).on("load", function (){

						var _t = setTimeout(function(){

							_container.isotope({
								masonry: {},

								filter: '*',
								animationOptions: {
									duration: 750,
									easing: 'linear',
									queue: false
								}
							});

							jQuery('#blog_filter>li>a').bind("click", function(e){
								e.preventDefault();

								jQuery('#blog_filter>li.active').removeClass('active');
								jQuery(this).parent('li').addClass('active');

								var selector = jQuery(this).attr('data-filter');
								_container.isotope({
									filter: selector,
									animationOptions: {
										duration: 750,
										easing: 'linear',
										queue: false
									}
								 });

							});

						}, 50 );

						setTimeout(function() {
							_container.isotope('layout');
						}, 300);

					});

					// On Resize
					jQuery(window).resize(function() {

						if(window.afterResizeApp2) {
							clearTimeout(window.afterResizeApp2);
						}

						window.afterResizeApp2 = setTimeout(function() {

							_recalcW();

							setTimeout(function() {
								_container.isotope('layout');
							}, 300);

						}, 300);

					});

				}

			});
		}	/** end isotope **/

		/** Flip Boxes
		 *********************** **/
		if(jQuery('.box-flip').length > 0) {

			jQuery('.box-flip').each(function() {
				_height1 = jQuery('.box1',this).outerHeight();
				_height2 = jQuery('.box2',this).outerHeight();

				if(_height1 >= _height2) {
					_height = _height1;
				} else {
					_height = _height2;
				}

				jQuery(this).css({"min-height":_height+"px"});
				jQuery('.box1',this).css({"min-height":_height+"px"});
				jQuery('.box2',this).css({"min-height":_height+"px"});
			});

			jQuery('.box-flip').hover(function() {
				jQuery(this).addClass('flip');
			},function(){
				jQuery(this).removeClass('flip');
			});
		}

		/** Sticky Side (social icons)
		 *********************** **/
		if(jQuery("div.sticky-side").length > 0) {

			var _t 	= jQuery("div.sticky-side");
				_h	= _t.height() / 2;

			_t.css({"margin-top":"-"+_h+"px"});
		}

		/** Increase / Decrease No.
			Example: shop-single-left.html
		 *********************** **/
		jQuery(".incr").bind("click", function(e) {
			e.preventDefault();

			var _for	= jQuery(this).attr('data-for'),
				_max	= parseInt(jQuery(this).attr('data-max')),
				_curVal	= parseInt(jQuery("#" + _for).val());

			if(_curVal < _max) {
				jQuery("#" + _for).val(_curVal + 1);
			}
		});

		jQuery(".decr").bind("click", function(e) {
			e.preventDefault();

			var _for	= jQuery(this).attr('data-for'),
				_min	= parseInt(jQuery(this).attr('data-min')),
				_curVal	= parseInt(jQuery("#" + _for).val());

			if(_curVal > _min) {
				jQuery("#" + _for).val(_curVal - 1);
			}
		});

		/** Default Button Toggle
		 *********************** **/
		jQuery("a.toggle-default").bind("click", function(e) {
			e.preventDefault();

			var _href = jQuery(this).attr('href');

			if(jQuery(_href).is(":hidden")) {

				jQuery(_href).slideToggle(200);
				jQuery('i.fa', this).removeClass('fa-plus-square').addClass('fa-minus-square');

			} else {

				jQuery(_href).slideToggle(200);
				jQuery('i.fa', this).removeClass('fa-minus-square').addClass('fa-plus-square');

			}

		});

		/** Custom File Upload
			<input class="custom-file-upload" type="file" id="file" name="myfiles[]" multiple />
		 *********************** **/
		var file_container = jQuery("input[type=file]");

		if(file_container.length > 0) {
			loadScript(plugin_path + 'custom.fle_upload.js');
		}

		/** Textarea Words Limit
		 *********************** **/
		jQuery("textarea.word-count").on('keyup', function() {
			var _t		= jQuery(this),
				words 	= this.value.match(/\S+/g).length,
				_limit	= _t.attr('data-maxlength') || 200;

			if (words > parseInt(_limit)) {

				// Split the string on first 200 words and rejoin on spaces
				var trimmed = _t.val().split(/\s+/, 200).join(" ");
				// Add a space at the end to keep new typing making new words
				_t.val(trimmed + " ");

			} else {

				var _data_info = _t.attr('data-info');

				if(_data_info == '' || _data_info == undefined) {
					var _infoContainer = _t.next('div');
					jQuery('span', _infoContainer).text(words + '/' + _limit);
				} else {
					jQuery('#' +_data_info).text(words + '/' + _limit);
				}

			}
		});

	}

/** Sticky Footer
 **************************************************************** **/
	function _stickyFooter() {
		if(jQuery("#footer").hasClass('sticky')) {

			var footerHeight = 0,
				footerTop 	= 0,
				_footer 		= jQuery("#footer.sticky");

			positionFooter();

			function positionFooter() {
				footerHeight = _footer.height();
				footerTop = (jQuery(window).scrollTop()+jQuery(window).height()-footerHeight)+"px";

				if((jQuery(document.body).height()+footerHeight) > jQuery(window).height()) {
					_footer.css({
						position: "absolute"
					}).stop().animate({
						top: footerTop
					},0);
				} else {
					_footer.css({position: "static"});
				}

			}

			jQuery(window).scroll(positionFooter).resize(positionFooter);

		}
	}


	function _select2() {
		var _container = jQuery('select.select2');

		if(_container.length > 0) {

			loadScript(plugin_path + 'select2/js/select2.full.min.js', function() {

				if(jQuery().select2) {
					jQuery('select.select2').select2();
				}

			});
		}

	}

/** Form [form plugin + validation plugin]
 **************************************************************** **/
	function _form() {

		/** Form Validate
			LOAD PLUGIN ONLY!
		 ************************ **/
		if(jQuery('form.validate-plugin').length > 0) {

			loadScript(plugin_path + 'form.validate/jquery.form.min.js', function() {
				loadScript(plugin_path + 'form.validate/jquery.validation.min.js');
			});

		}

		/** Form Validate
		 ************************ **/
		if(jQuery('form.validate').length > 0) {

			loadScript(plugin_path + 'form.validate/jquery.form.min.js', function() {
				loadScript(plugin_path + 'form.validate/jquery.validation.min.js', function() {

					if(jQuery().validate) {

						jQuery('form.validate').each(function() {

							var _t 			= jQuery(this),
								_Smessage 	= _t.attr('data-success') 			|| "Successfully! Thank you!",
								_Cmessage 	= _t.attr('data-captcha') 			|| "Invalid Captcha!",
								_Tposition 	= _t.attr('data-toastr-position') 	|| "top-right",
								_Ttype	 	= _t.attr('data-toastr-type') 		|| "success";
								_Turl	 	= _t.attr('data-toastr-url') 		|| false;

							// Append 'is_ajax' hidden input field!
							_t.append('<input type="hidden" name="is_ajax" value="true" />');

							if(_t.attr('non_ajax'))
								_t.validate();
							else
								_t.validate({
									submitHandler: function(form) {

										// Show spin icon
										jQuery(form).find('.input-group-addon').find('.fa-envelope').removeClass('fa-envelope').addClass('fa-refresh fa-spin');

										jQuery(form).ajaxSubmit({

											target: 	jQuery(form).find('.validate-result').length > 0 ? jQuery(form).find('.validate-result') : '',

											error: 		function(data) {
												_toastr("Sent Failed!",_Tposition,"error",false);
											},

											success: 	function(data) {
												var data = data.trim();

												// SMTP ERROR
												if(data == '_failed_') {
													_toastr("SMTP ERROR! Please, check your config file!",_Tposition,"error",false);
												}

												// CAPTCHA ERROR
												else if(data == '_captcha_') {
													_toastr("Invalid Captcha!",_Tposition,"error",false);

												// SUCCESS
												} else {

													// Remove spin icon
													jQuery(form).find('.input-group-addon').find('.fa-refresh').removeClass('fa-refresh fa-spin').addClass('fa-envelope');

													// Clear the form
													jQuery(form).find('input.form-control').val('');

													// Toastr Message
													_toastr(_Smessage,_Tposition,_Ttype,_Turl);

												}
											}
										});

									}
								});

						});

					}

				});
			});

		}

		/** Masked Input
		 ************************ **/
		var _container = jQuery('input.masked');
		if(_container.length > 0) {

			loadScript(plugin_path + 'form.masked/jquery.maskedinput.js', function() {

				_container.each(function() {

					var _t 				= jQuery(this);
						_format 		= _t.attr('data-format') 		|| '(999) 999-999999',
						_placeholder 	= _t.attr('data-placeholder') 	|| 'X';

					jQuery.mask.definitions['f'] = "[A-Fa-f0-9]";
					_t.mask(_format, {placeholder:_placeholder});

				});

			});

		}

	}



/** Infininte Scroll
 **************************************************************** **/
	function _infiniteScroll() {
		var _container 	= jQuery(".infinite-scroll");

		if(_container.length > 0) {

			loadScript(plugin_path + 'infinite-scroll/jquery.infinitescroll.min.js', function() {

					_navSelector	= _container.attr('data-nextSelector') || "#inf-load-nex",
					_itemSelector	= _container.attr('data-itemSelector') || ".item",
					_nextSelector	= _navSelector + " a";

				_container.infinitescroll({
					loading: {
						finishedMsg	: '<i class="fa fa-check"></i>',
						msgText		: '<i class="fa fa-refresh fa-spin"></i>',
						img			: "data:image/gif;base64,R0lGODlhGAAYAPUAABQSFCwuLBwaHAwKDKyurGxqbNze3CwqLCQmJLS2tOzu7OTi5JyenBweHBQWFJyanPz+/HRydLSytFxeXPz6/ExOTKSmpFRSVHR2dAwODAQCBOzq7PTy9ISChPT29IyKjIyOjISGhOTm5GRiZJSWlJSSlFRWVMTCxNza3ExKTNTS1KyqrHx6fGRmZKSipMzOzMTGxDQyNDw+PAQGBDQ2NERCRFxaXMzKzGxubDw6PCQiJLy+vERGRLy6vHx+fNTW1CH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQAAACwAAAAAGAAYAEAGqECAcAhoRAiojQJFiAiI0Kh0qOsZOhqhDMK9ZadgAI0WBmhAXAhFVm5HbZR0aTYdsFpSkwqjo5sRLAtpIjxuUzZpECmGjI1QA4JcKH5lGVICDHFpGyoqGx4uDWENFh4iKjcbiR4MT1ItLJSPJWkUNo9uAyhpBpaOGjdpOY7ExcYaIQs9OsUpibfENZoQIF9gY1EpqlwiLAh+M4AqJmUCOBJJGz8EOKJRQQAh+QQJBQABACwAAAAAGAAYAAAGp8CAcBhoRBILDgdFKAiI0KHAB5rUZBUWDALxMJ5R4SCmiWpoJ67iEm4TZx0upOCuB1jyir2tuXE3DnthE3IlglENchwDh0QDG3ITjUQ7ciGTQxFybJgBGkcYGhoYPaGdARdyOKchcjunhH8znQAccmCYJZGnDpAQN2WdFXI+pwEFch2znRe+MDTBbzGMbQIPHlwwLBcyNSMgLIF2Ai0WKAocBhI4uERBACH5BAkFACwALAAAAAAYABgAAAaoQJZwyNIEJiAJCpWICIjQKFGD6Gw8D4d0C3UQIJsKd1wsQSgFMldjgUAu6q1jA27EpRg34x5FUCAeT3xDAx5uBQAMJyZ8GRxuFiRuFAF3B24QKguYE3cpmAubbil3I5gGKpgIdwF/EA9tgAN8JicMGQVuHLODQgKGEKu9QgxuGMNCDQpgAMgsF38rGs4Ffx/TyBUiECtayAIPHgohAdi9DRFKTCAj5VJBACH5BAkFAAAALAAAAAAYABgAAAa0QIBwSAQMaphHoVFsOoezlsEleFqJDsnmcu1qLJBW9zpQUSpjqwyycQgPBAIiLYRBGIDMAgJRaegREB4CE3wQFAN0NHwRYHwwdAANfBIqhlx0AXwGCnx+kQV8Cp0QBZEaL3wbBnwBkReGKgl8TGkadnwugRA0dBkUhhMNHhARdBqWEAsZAAwQkHQIEgQHQgIbFDKRTRUUL4nbRC0QFjPhRBcbEm7nQg0uBi3g7Q0RDxEyzFdBACH5BAkFAAgALAAAAAAYABgAAAaxQIRwSCwKHMWkssgLCZbQYmNnUgpMh6gQoIoUZQqIh6ZFHDjV7QLCLpURIcUTAWKzvWUBhYFwcOwnA28IOx4CBXY3AIMIJRAFEmwoSIwYEAQGbDWMQiwQBh4QKpxCjhyhbqQqEByZLKQ1bAaRr4wOKGwSiKlvADd2BQIeJ4MDJ3YcSA8UlFqWdiBCAgohbyR2C4tCJhwBZTQUEAo5RQUqzVAHJuhDJjsNpFIhKfFG7FFBACH5BAkFAAAALAAAAQAYABYAAAa3QIBQmEnlNMOkcgmoGSCQEJNIY048UIhhKqS1lClKFtLjClmmoWAzvunMgJmqIWRkDTYkHIBxARpiECUDe0MIHg0RUCV6hQAaGxESEAszjkkvEk8sl0kqKgoQCJ1CGiIKChuNlwcQCigvpGcQKBKxpAMLEBI4IpaXGiVQODoeb44DwhAUAgAuGIUaEyhZDEINKr9cCDdjG81CJpxmO2MUPEojVVy6UBQ2TDGEUyFQCzKyjzk880NBACH5BAkFAAEALAAAAAAYABgAAAazwIBwGABMOhcNcckUOkoKiJTVrAYqG6k2YWXiKFptpEs0gbWbXmFmHQwbWcjNJlCSYwIhQ9qxk4UaVAIeEB1/TCANBRAnfodCExEEEDSPSzUJKCeWSzQGHBicRBUcHimiQywKC5WoGjAoCTKoATQUBBETqDMnEAUNH6ghEBQOAT6OZBo+UgxCAjF/Mw0TN1IKeUJuVTMFPSJhEBePGOHEBZYJ4SI8nCxaHB/GnBoXISYATUEAIfkECQUAKgAsAAAAABgAGAAABqpAlXCoErQsr4WBlCE6nQ2XB0Ktup5Yk6LKhZywzgKlyplSKRfwsELdYA6DDCI1OaiFgg2EALirHxAfGn5gDR4rg4RPGhEbDopYAQkdkFgjBnaVTiEoiZpDCQmfRBooIKNDBwYjqEIdCQGtDgoFnpoaEh4NqBogEA+oDisQjn4xExUIAAMILCIQFBV+JmNUHh7VEAWEMF1VCmmELt4UDAKQGSUoCy8WI+dPQQAh+QQJBQAJACwAAAAAGAAYAAAGrMCEcJhoRCQoxUblmmSI0KGA4YFYr9bFIUqsbLBgK4ErLFAosEiuESi8sBKyifKqRTWXk+el4zYULgNkQhkaZBYShoOLOigAi5ARE5CQDzOUixGYi3abXANPnlE5olyapUQzD6hELaesDgYNrAkzEi5kMwOKnxYbs1EIKh4wF5dQNSoQF2QSWC8FATo0GDcUHi2DBGFgGymLBwvcEBQPDpQZNi4qGxsoEjgCXEEAIfkEBQUACAAsAAAAABgAGAAABqZAhHCIEBQIBg/HICk4iNCh4OGBWK9WTgkQHZoUlFMJwyKpsJCFrBvhhJ7QGgqrgA9tr0BX6HhhTUQNO3Z7ADBWFAdEIQJ7UAMRJTREAjyOl0MNmJucnZ6foKGio6SdmqQphDljA5wCIUQBVRAwXJcAO6dCJlg3tl0BPxdQAgpYKDVRAh8cOF05C2g/JSw+JTAeCsOFJRxoVx4PjZgORygcHCgETl1BADs=",
						speed		: 'normal'
					},
					nextSelector	: _nextSelector,
					navSelector		: _navSelector,
					itemSelector	: _itemSelector,
					behavior		: '',

					state: {
						isDone		: false
					}
				},

				function(newElements) {

					Init(true);

					if(jQuery().isotope) {

						_container.isotope('appended', jQuery(newElements));

						setTimeout( function(){
							_container.isotope('layout');
						}, 2000);

					}

				});

			});

		}

	}

/** Image Zoom
 **************************************************************** **/
	function _zoom() {
		var _container = jQuery('figure.zoom');

		if(_container.length > 0) {

			loadScript(plugin_path + 'image.zoom/jquery.zoom.min.js', function() {

				if(jQuery().zoom) {

					_container.each(function() {
						var _t 		= jQuery(this),
							_mode 	= _t.attr('data-mode'),
							_id		= _t.attr('id');

						if(_mode == 'grab') {
							_t.zoom({ on:'grab' });
						} else

						if(_mode == 'click') {
							_t.zoom({ on:'click' });
						} else

						if(_mode == 'toggle') {
							_t.zoom({ on:'toggle' });
						} else {
							_t.zoom();
						}

						// Thumbnails
						if(_id) {
							jQuery('.zoom-more[data-for='+_id+'] a').bind("click", function(e) {
								e.preventDefault();

								var _href = jQuery(this).attr('href');

								if(_href != "#") {
									jQuery('.zoom-more[data-for='+_id+'] a').removeClass('active');
									jQuery(this).addClass('active');

									jQuery('figure#'+_id + '>.lightbox').attr('href', _href);

									jQuery('figure#'+_id + '>img').fadeOut(0, function() {
										jQuery('figure#'+_id + '>img').attr('src', _href);
									}).fadeIn(500);

								}
							});
						}

					});

				}

			});

		}

	}


/** Slimscroll
 **************************************************************** **/
	function _slimScroll() {
		var _container = jQuery('.slimscroll');

		if(_container.length > 0) {

			loadScript(plugin_path + 'slimscroll/jquery.slimscroll.min.js', function() {

				if(jQuery().slimScroll) {

					jQuery('.slimscroll').each(function () {

						var height;
						if (jQuery(this).attr("data-height")) {
							height = jQuery(this).attr("data-height");
						} else {
							height = jQuery(this).height();
						}

						jQuery(this).slimScroll({
							size: 				jQuery(this).attr("data-size") 							|| '5px',
							opacity: 			jQuery(this).attr("data-opacity") 						|| .6,
							position: 			jQuery(this).attr("data-position") 						|| 'right',
							allowPageScroll:	false, // not working
							disableFadeOut: 	false,
							railVisible: 		true,
							railColor: 			jQuery(this).attr("data-railColor")						|| '#222',
							railOpacity: 		jQuery(this).attr("data-railOpacity") 					|| 0.05,
							alwaysVisible: 		(jQuery(this).attr("data-alwaysVisible") != "false" 	? true : false),
							railVisible: 		(jQuery(this).attr("data-railVisible")   != "false" 	? true : false),
							color: 				jQuery(this).attr("data-color")  						|| '#333',
							wrapperClass: 		jQuery(this).attr("data-wrapper-class") 				|| 'slimScrollDiv',
							railColor: 			jQuery(this).attr("data-railColor")  					|| '#eaeaea',
							height: 			height
						});

						// Disable body scroll on slimscroll hover
						if(jQuery(this).attr('disable-body-scroll') == 'true') {

							jQuery(this).bind('mousewheel DOMMouseScroll', function(e) {
								var scrollTo = null;

								if (e.type == 'mousewheel') {
									scrollTo = (e.originalEvent.wheelDelta * -1);
								}
								else if (e.type == 'DOMMouseScroll') {
									scrollTo = 40 * e.originalEvent.detail;
								}

								if (scrollTo) {
									e.preventDefault();
									jQuery(this).scrollTop(scrollTo + jQuery(this).scrollTop());
								}
							});

						}

					});

				}

			});

		}

	}

	function _modalAutoLoad() {
		if(jQuery("div.modal").length > 0) {

			jQuery("div.modal").each(function() {
				var _t 			= jQuery(this),
					_id			= _t.attr('id'),
					_autostart 	= _t.attr('data-autoload') || false;

				// reset allow
				// localStorage.removeItem(_id);

				if(_id != '') { // rewrite if set to hidden by the user
					if(localStorage.getItem(_id) == 'hidden') {
						_autostart = 'false';
					}
				}

				if(_autostart == 'true') {

					$(window).on("load", function () { // required on load!
						var _delay = _t.attr('data-autoload-delay') || 1000; // delay when modal apprear

						setTimeout(
							function()  {

								_t.modal('toggle');

						}, parseInt(_delay));

					});

				}

				// LOCAL STORAGE - DO NOT HIDE ON NEXT PAGE LOAD!
				jQuery("input.loadModalHide", this).bind("click", function() {
					var _tt = jQuery(this);

					if(_tt.is(":checked")) {
						localStorage.setItem(_id, 'hidden');
						console.log('[Modal Autoload #'+_id+'] Added to localStorage');
					} else {
						localStorage.removeItem(_id);
						console.log('[Modal Autoload #'+_id+'] Removed from localStorage');
					}

				});

			});

		}
	}

/** 10. Background Image
	class="boxed" should be added to body.
	Add to body - example: data-background="assets/images/boxed_background/1.jpg"
 **************************************************************** **/
	function _bgimage() {
		var data_background = jQuery('body').attr('data-background') || '';

		if(data_background != '') {

			loadScript(plugin_path + 'jquery.backstretch.min.js', function() {

				if(data_background) {
					jQuery.backstretch(data_background);
					jQuery('body').addClass('transparent'); // remove backround color of boxed class
				}

			});

		}
	}


	// scroll
	function wheel(e) {
	  e.preventDefault();
	}

	function disable_scroll() {
	  if (window.addEventListener) {
		  window.addEventListener('DOMMouseScroll', wheel, false);
	  }
	  window.onmousewheel = document.onmousewheel = wheel;
	}

	function enable_scroll() {
		if (window.removeEventListener) {
			window.removeEventListener('DOMMouseScroll', wheel, false);
		}
		window.onmousewheel = document.onmousewheel = document.onkeydown = null;
	}

	// overlay
	function enable_overlay() {
		jQuery("span.global-overlay").remove(); // remove first!
		jQuery('body').append('<span class="global-overlay"></span>');
	}
	function disable_overlay() {
		jQuery("span.global-overlay").remove();
	}

/** COUNT TO
	https://github.com/mhuggins/jquery-countTo
 **************************************************************** **/
 (function ($) {
	$.fn.countTo = function (options) {
		options = options || {};

		return jQuery(this).each(function () {
			// set options for current element
			var settings = jQuery.extend({}, $.fn.countTo.defaults, {
				from:            jQuery(this).data('from'),
				to:              jQuery(this).data('to'),
				speed:           jQuery(this).data('speed'),
				refreshInterval: jQuery(this).data('refresh-interval'),
				decimals:        jQuery(this).data('decimals')
			}, options);

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;

			// references & variables that will change with each update
			var self = this,
				$self = jQuery(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};

			$self.data('countTo', data);

			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);

			// __construct the element with the starting value
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;

				render(value);

				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}

				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;

					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};

	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};

	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

/** BROWSER DETECT
	Add browser to html class
 **************************************************************** **/
(function($) {
	$.extend({

		browserDetect: function() {

			var u = navigator.userAgent,
				ua = u.toLowerCase(),
				is = function (t) {
					return ua.indexOf(t) > -1;
				},
				g = 'gecko',
				w = 'webkit',
				s = 'safari',
				o = 'opera',
				h = document.documentElement,
				b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

			c = b.join(' ');
			h.className += ' ' + c;

			var isIE11 = !(window.ActiveXObject) && "ActiveXObject" in window;

			if(isIE11) {
				jQuery('html').removeClass('gecko').addClass('ie ie11');
				return;
			}

		}

	});
})(jQuery);

(function(a){a.fn.appear=function(d,b){var c=a.extend({data:undefined,one:true,accX:0,accY:0},b);return this.each(function(){var g=a(this);g.appeared=false;if(!d){g.trigger("appear",c.data);return}var f=a(window);var e=function(){if(!g.is(":visible")){g.appeared=false;return}var r=f.scrollLeft();var q=f.scrollTop();var l=g.offset();var s=l.left;var p=l.top;var i=c.accX;var t=c.accY;var k=g.height();var j=f.height();var n=g.width();var m=f.width();if(p+k+t>=q&&p<=q+j+t&&s+n+i>=r&&s<=r+m+i){if(!g.appeared){g.trigger("appear",c.data)}}else{g.appeared=false}};var h=function(){g.appeared=true;if(c.one){f.unbind("scroll",e);var j=a.inArray(e,a.fn.appear.checks);if(j>=0){a.fn.appear.checks.splice(j,1)}}d.apply(this,arguments)};if(c.one){g.one("appear",c.data,h)}else{g.bind("appear",c.data,h)}f.scroll(e);a.fn.appear.checks.push(e);(e)()})};a.extend(a.fn.appear,{checks:[],timeout:null,checkAll:function(){var b=a.fn.appear.checks.length;if(b>0){while(b--){(a.fn.appear.checks[b])()}}},run:function(){if(a.fn.appear.timeout){clearTimeout(a.fn.appear.timeout)}a.fn.appear.timeout=setTimeout(a.fn.appear.checkAll,20)}});a.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(c,d){var b=a.fn[d];if(b){a.fn[d]=function(){var e=b.apply(this,arguments);a.fn.appear.run();return e}}})})(jQuery);

(function(a){var b=a(window);var c=b.height();b.resize(function(){c=b.height()});a.fn.parallax=function(e,d,g){var i=a(this);var j;var h;var f=0;function k(){i.each(function(){h=i.offset().top});if(g){j=function(m){return m.outerHeight(true)}}else{j=function(m){return m.height()}}if(arguments.length<1||e===null){e="50%"}if(arguments.length<2||d===null){d=0.5}if(arguments.length<3||g===null){g=true}var l=b.scrollTop();i.each(function(){var n=a(this);var o=n.offset().top;var m=j(n);if(o+m<l||o>l+c){return}i.css("backgroundPosition",e+" "+Math.round((h-l)*d)+"px")})}b.bind("scroll",k).resize(k);k()}})(jQuery);

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return G("transition")},q.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c};for(var H in q)z(q,H)&&(v=H.toLowerCase(),e[v]=q[H](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.hasEvent=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=w,e.prefixed=function(a,b,c){return b?G(a,b,c):G(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
