$(function(){

	/* ==============================
	 * common
	 * ============================== */

	gnbNav();
	homeLocation();
	right_menu();
	main1_slick();
	main2_slick();
	main3_slick();
	main4_slick();
	scrollDown();


	//topscroll
	$('.pageTop').click(function(){
		$('html, body').animate({scrollTop : 0 }, 800);
		return false;
	});

	//header, footer include
	$("[data-includeHTML]").each(function () {
		$(this).load($(this).attr("data-includeHTML"));
	});


	$(window).resize(resizeContents);

	resizeContents();

	widthRt = $('.pcCon .inner').css('margin-right');
	$('.sideCon').css('right', widthRt);


	// main
	$(".pcCon .onApi li").hover(function() {
	  $(this).addClass('on');
	}, function(){
	  $(this).removeClass('on');
	});

	$(".moCon .onApi li").click(function() {
		if (!$(this).hasClass('on')) {
			$(".moCon .onApi li").removeClass('on');
			$(this).addClass('on');
			$(".moCon .onApi li a").attr('aria-expanded', 'false');
			$(this).children().attr('aria-expanded', 'true');
		}else{
			$(this).removeClass('on');
			$(this).children().attr('aria-expanded', 'false');
		}
	});


	$(".onApi li").on('keydown', function(event) {
	    if (event.keyCode === 9) {
	        $(this).addClass('on');
	    }else{
	    	$(this).removeClass('on');
	    }
	});



	$('.viewDots li a').on('click', function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		$('.viewDots li a').removeClass('active');
		$(this).addClass('active');
	});


	$('.ciList li').find('img').hover(function() {
		$(this).attr("src",$(this).attr("src").replace(/off\.png$/, 'on.png'));
	}, function() {
		$(this).attr("src",$(this).attr("src").replace(/on\.png$/, 'off.png'));
	});


	var swiper2 = new Swiper('.slider2 .swiper-container', {
	  pagination: {
	    el: '.swiper-pagination2',
	  },
	});

	var swiper3 = new Swiper('.slider3 .swiper-container', {
	 pagination: {
	  el: '.swiper-pagination3',
	  type: 'progressbar',
	},
		slidesPerView: 3.5,
	  slidesPerColumn: 2,
	  spaceBetween: 10,
	});

	$('.slider3 .swiper-slide').find('img').click(function(){
		if (!$(this).hasClass('on')) {
			$(this).attr("src",$(this).attr("src").replace(/off\.png$/, 'on.png'));
			$(this).addClass('on');
		}else{
			$(this).attr("src",$(this).attr("src").replace(/on\.png$/, 'off.png'));
			$(this).removeClass('on');
		}
	});

	$('.moCon .section.scene3 ul li').click(function(){
		if (!$(this).hasClass('on')) {
			$('.moCon .section.scene3 ul li').removeClass('on');
			$('.moCon .section.scene3 ul li button').attr('aria-expanded', 'false');
			$(this).addClass('on');
		 	$(this).children('button').attr('aria-expanded', 'true');
		}
	});


	// Get the header
	if ($('header').hasClass('main')) {
		window.onscroll = function() {myFunction()};
		var header = document.getElementById("myHeader");
		var sticky = header.offsetTop;

		function myFunction() {
		  if (window.pageYOffset > sticky) {
		    header.classList.add("sticky");
		  } else {
		    header.classList.remove("sticky");
		  }
		}
	}

 	//footer
	 $(document).on("click", ".Mfooter .footLogo", function(){
		if ($('.footAdd').css('display') == 'none'){
			$('.footAdd').slideDown().attr('aria-hidden', 'false');
			$('.footLogo').addClass('on');
			$('.footarea').animate({top: "5px"}, "sllow");

		}else{
			$('.footAdd').slideUp().attr('aria-hidden', 'true');
			$('.footLogo').removeClass('on');
			$('.footarea').animate({top: "20px"}, "sllow");
		}
	});

});


//contents sideBox
function resizeContents(){
	width = $('.wrap').width();
	widthRt = $('.pcCon .inner').css('margin-right');
	if (width > 1600) {
	  $('.sideBox').parent().parent().addClass('sideCon');
	  $('.sideBox').parent().parent().removeClass('section');
	  $('.sideCon').css('right', widthRt);
	}else{
		$('.sideBox').parent().parent().addClass('section');
	  $('.sideBox').parent().parent().removeClass('sideCon');
	  $('.sideBox').parent().parent().css('right', 'inherit');
	}
}

// Gnbmenu
function gnbNav() {
	$(document).on('mouseenter focus', ".utilList li a", function(){
		$(".gnbWrap").slideDown().addClass('on');
	});

	$(document).on('mouseleave', 'header', function(){
		$(".gnbWrap").slideUp().removeClass('on');
		$('.gnbDept2').slideUp();
		$('.gnbDept2').parents('li.etc').removeClass('on');
	});

	$('.locationNav > li').each(function(){
		$('a:first, a:last', this).on('blur', function(){
			$(this).parents('li').removeClass('open');
		});
	});
	$(document).on("click", ".gnbDept .etc a", function(){
		if (!$(this).parents('li.etc').hasClass('on')) {
			$('.gnbDept2').slideUp();
			$('.gnbDept2').parents('li').removeClass('on');
			$(this).next('.gnbDept2').slideDown();
			$(this).parents('li.etc').addClass('on');
		}else{
			$(this).next('.gnbDept2').slideUp();
			$(this).parents('li.etc').removeClass('on');
		}
	});
}


// Location nav
function homeLocation() {
	$('.locationNav a').on('mouseenter focus', function(){
		$(this).parents('li').addClass('open');
	});

	$('.locationNav > li').on('mouseleave', function(){
		$(this).removeClass('open');
	});

	$('.locationNav > li').each(function(){
		$('a:first, a:last', this).on('blur', function(){
			$(this).parents('li').removeClass('open');
		});
	});
}


// tab
$(function(){
	// tab first show
	$('#tabMenu').each(function(){
		var $active, $content, $links = $(this).find('a');
		var $first = $('#tabMenu li:first a').attr('href');
		$active = $($links.filter('[href="'+$first+'"]'));
		$active.parent().addClass('on');
		$content = $($active.attr('href'));
		$content.show();
	});

	// tab event
	$('#tabMenu li').click(function(){
		$('#tabMenu li').removeClass('on');
		$(this).addClass('on');
		$('.tabCon').hide();
		var selected_tab = $(this).find('a').attr('href');
		var starting = selected_tab.indexOf('#');
		var sub = selected_tab.substring(starting);
		$(sub).fadeIn();
		return false;
	});
});


// tab - mobile
$(function(){
	// tab first show
	$('#mtabMenu').each(function(){
		var $active, $content, $links = $(this).find('a');
		var $first = $('#mtabMenu li:first a').attr('href');
		$active = $($links.filter('[href="'+$first+'"]'));
		$active.parent().addClass('on');
		$content = $($active.attr('href'));
		$content.show();
	});

	// tab event
	$('#mtabMenu li').click(function(){
		$('#mtabMenu li').removeClass('on');
		$(this).addClass('on');
		$('.tabCon').hide();
		$('#mtabMenu li a').attr('aria-selected','false');
		var selected_tab = $(this).find('a').attr('href');
		var starting = selected_tab.indexOf('#');
		var sub = selected_tab.substring(starting);
		$(this).find('a').attr('aria-selected','true');
		$(sub).fadeIn();

		return false;
	});
});


/* ==============================
 * gnb
 * ============================== */
/* Right Hidden Menu */
function right_menu(){
	var $el = $(".innerSide");
	if($el) init();
	function init(){
		var $menu = $(".innerSide .layWrap");
		rhidden_resize();
		function isOpen(x){
			x.toggleClass("open");
		}
		$(document).on("click", ".btnSide", function(){
			// isOpen($el);
			$(".innerSide").toggleClass("open");
			$(".innerSide .layWrap").animate({right: "0px"}, "sllow");
			$(".innerSide").attr('tabindex', '0');
			$(".btnHome").focus();
			$('.wrap').attr('aria-hidden', 'true');
			$('footer').attr('aria-hidden', 'true');
			$('.PCheader').attr('aria-hidden', 'true');
			$('.Mheader .header').attr('aria-hidden', 'true');
			$(".Mheader .innerSide").attr('aria-hidden', 'false');

		});
		$(document).on("click", ".btnClose", function(){
			$(".innerSide .layWrap").animate({right: "-100%"}, "sllow");
			setTimeout(function(){
				// isOpen($el);
				$(".innerSide").toggleClass("open");
			}, 600);
			$('.wrap').attr('aria-hidden', 'false');
			$('footer').attr('aria-hidden', 'false');
			$('.PCheader').attr('aria-hidden', 'false');
			$('.Mheader .header').attr('aria-hidden', 'false');
			$(".Mheader .innerSide").attr('aria-hidden', 'true');
		});

		$(window).resize(function(){
			rhidden_resize();
		});
		function rhidden_resize(){
			var win_h = $(window).innerHeight();
			$el.height(win_h);
		};
		$(document).on("click", ".menuDepth1 > li", function(){
			if ($(this).find('.menuDepth2').css('display') == 'none') {
				$(this).addClass('on');
				$(this).find('.menuDepth2').slideDown();
				$(this).find('a').attr('aria-expanded', 'true');
			}else{
				$(this).removeClass('on');
				$(this).find('.menuDepth2').slideUp();
				$(this).find('a').attr('aria-expanded', 'false');
			}
		});
	};
};

jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};

  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});


//main1 slick
function main1_slick(){
 	$('.mainSlider1').on('init', function(event, slick) {
	  $(this).append('<div class="slick-counter">0<span class="current"></span> - 0<span class="total"></span></div>');
	  $('.current').text(slick.currentSlide + 1);
	  $('.total').text(slick.slideCount);
	});

 	var slickPause = '<button class="slickBtn pause">Pause</button>';
 	var controls = '<div class="controls" data-aos="fade-down" data-aos-duration="2500"></div>'
	$('.mainSlider1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000,
		arrows: true
		}).append(slickPause).children().not('.slick-list').wrapAll(controls);
		$('.mainSlider1').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	  $('.current').text(nextSlide + 1);
	});


	$('.slickBtn').on('click', function(){
		if ($(this).hasClass('pause')) {
			$('.mainSlider1').slick('slickPause');
			$(this).removeClass('pause').addClass('play').text('play');
		}else{
			$('.mainSlider1').slick('slickPlay');
			$(this).removeClass('play').addClass('pause').text('pause');
		}
	});

}

//main2 slick
function main2_slick(){
	$(".mainSlider2").slick({
    dots: true,
    customPaging : function(slider, i) {
    		var menu = ['API 媛쒕컻媛��대뱶', 'REST API �꾧뎄', '媛쒕컻�먰룷��']
        var thumb = $(slider.$slides[i]).children().children('.txt1 ').text();
        return '<button type="button" data-aos="fade-up" data-aos-offset="30">'+thumb+'</button>';
    },

    responsive: [{
      dots: false,
      arrows: false
    }]
	});
}

//main3 slick
function main3_slick(){
 	$('.mainSlider3').on('init', function(event, slick) {
	  $(this).append('<div class="slick-counter">0<span class="current"></span> - 0<span class="total"></span></div>');
	  $('.current').text(slick.currentSlide + 1);
	  $('.total').text(slick.slideCount);
	});

 	var slickPause = '<button class="slickBtn2 pause">Pause</button>';
 	var controls = '<div class="controls" data-aos="fade-down" data-aos-duration="2500"></div>'
	$('.mainSlider3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000,
		arrows: true
		}).append(slickPause).children().not('.slick-list').wrapAll(controls);
		$('.mainSlider3').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	  $('.current').text(nextSlide + 1);
	});


	$('.slickBtn2').on('click', function(){
		if ($(this).hasClass('pause')) {
			$('.mainSlider3').slick('slickPause');
			$(this).removeClass('pause').addClass('play').text('play');
		}else{
			$('.mainSlider3').slick('slickPlay');
			$(this).removeClass('play').addClass('pause').text('pause');
		}
	});

}

//main4 slick
function main4_slick(){
	$(".mainSlider4").slick({
    dots: true,
 		infinite: true,
 		speed: 300
	});
}


// history

function scrollDown() {
	$('.awBounce span').effect('bounce', {times:3}, 3000, scrollDown);
}

function fnMove(seq){
    var offset = $("#scenes" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 1000);
}
