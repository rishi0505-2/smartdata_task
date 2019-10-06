/*jslint browser: true, vars: true, plusplus: true*/
/*global $, jQuery*/
(function ($) {
	"use strict";
	var App = {
		/*-- Init Function --*/
		init: function () {
			App.asideMenu();
			App.scrollToSticky();
			App.homeSlider();
			App.mapInit();
			App.onLargeVolumeFormSubmit();
			App.wowAnimation();
		},

		asideMenu: function () {
			$(document).on('click', function (e) {
				if ($(e.target).closest('#header #navToggle').length) {
					$('body').toggleClass('menuOpen');
					e.stopPropagation();
					e.preventDefault();
				} else if (!$(e.target).closest('#header nav, #header nav ul, #header nav ul li').length) {
					$('body').removeClass('menuOpen');
				} else if ($(e.target).closest('#header nav ul li a').length) {
					$('body').removeClass('menuOpen');
				}
			});
		},

		scrollToSticky: function () {
			var header = $('#header');
			var headerHeight = $('#header').outerHeight();

			function scrollToFixHeader() {
				if ($(window).scrollTop() > 180) {
					header.addClass('sticky');
					console.log('headerHeight', headerHeight);
					$('.afterHeaderSticky').css('height', headerHeight).removeClass('d-none');
				} else {
					header.removeClass('sticky');
					$('.afterHeaderSticky').css('height', 0).addClass('d-none');
				}
			}
			scrollToFixHeader();
			$(window).scroll(function () {
				scrollToFixHeader();
			});
		},

		homeSlider: function () {
			$('#printedProductSlider').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				centerMode: true,
				centerPadding: 0,
				prevArrow: '<a href="javascript:void(0);" class="prevArrow"><i class="icon-arrow-double-left"></i></a>',
				nextArrow: '<a href="javascript:void(0);" class="nextArrow"><i class="icon-arrow-double-right"></i></a>',
				responsive: [{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 500,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});

			$('#testimonialSlider').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				centerMode: true,
				centerPadding: 0,
				arrows: false,
				responsive: [{
						breakpoint: 991,
						settings: {
							slidesToShow: 2,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
						}
					}
				]
			});
		},

		mapInit: function () {
			$('#US_Map').vectorMap({
				map: 'usa_en',
				backgroundColor: null,
				borderColor: '#ffffff',
				borderOpacity: 0.25,
				borderWidth: 2,
				color: '#d4d4d6',
				enableZoom: false,
				showTooltip: true,
				selectedColor: null,
				hoverColor: null,
				selectedColor: '#3574f3',
				selectedRegions: ['CA', 'KS'],
				onRegionClick: function (event, code, region) {
					event.preventDefault();
				}
			});
		},

		onLargeVolumeFormSubmit: function () {
			$("#largeVolumeForm").validate({
				submitHandler: function (form) {
					$('#successAlertMessage').show();
					setTimeout(function () {
						$('#successAlertMessage').hide();
					}, 3000);
					return false;
				}
			});

			$("#createAccountForm").validate({
				submitHandler: function (form) {
					$('#accountSuccessMessage').show();
					setTimeout(function () {
						$('#accountSuccessMessage').hide();
					}, 3000);
					return false;
				}
			});

			$("#newsletterForm").validate({
				submitHandler: function (form) {
					$('#newsletterSuccessMessage').show();
					setTimeout(function () {
						$('#newsletterSuccessMessage').hide();
					}, 3000);
					return false;
				}
			});
		},

		wowAnimation: function () {
			var wow = new WOW({
				boxClass: 'wow', // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0, // distance to the element when triggering the animation (default is 0)
				mobile: true, // trigger animations on mobile devices (default is true)
				live: true, // act on asynchronously loaded content (default is true)
				callback: function (box) {
					// the callback is fired every time an animation is started
					// the argument that is passed in is the DOM node being animated
				},
				scrollContainer: null // optional scroll container selector, otherwise use window
			});
			wow.init();
		}

	};
	$(function () {
		App.init();
	});
}(jQuery));