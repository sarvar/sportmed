$(document).ready(function () {

  $(".hero-banner").slick({
    arrows: true,
    autoplay: false,
    fade: false,
    prevArrow: "<button type='button' class='slick-prev'><i class='icon-left-open-big'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='icon-right-open-big'></i></button>"
  });

  $(".staff-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $(".news-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  }); 
  

  $("#gallery").unitegallery({
    gallery_width: 900,
    gallery_height: 400,
    gallery_min_width: 400,
    gallery_min_height: 400,
    gallery_theme: "default",
    gallery_skin: "default",
    gallery_images_preload_type: "minimal",
    gallery_autoplay: false,
    gallery_play_interval: 3000,
    gallery_pause_on_mouseover: true,
    gallery_control_thumbs_mousewheel: false,
    gallery_control_keyboard: false,
    gallery_carousel: true,
    gallery_preserve_ratio: true,
    gallery_background_color: "#fff"
  });

  /**Mobile menu**/
  var x = document.getElementsByClassName("open_close_menu");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", myFunction);

    function myFunction() {
      var element = document.getElementsByClassName("menu_main")[0];
      var bodyMain = document.getElementsByClassName('index')[0];
      element.classList.toggle("open");
      bodyMain.classList.toggle('over-hidden')
    }
  }
  /* end mobile menu*/

  // menu search1
  var x = document.getElementsByClassName("open_close_menu_search");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].addEventListener("click", myFunction);

    function myFunction() {
      var elementMenu = document.getElementsByClassName("menu_search_block")[0];
      elementMenu.classList.toggle("open");
    }
  }

  /* Accordion mobile menu */
  $('.mobmenu ul').hide();

  $('.mobmenu>li').click(function () {
    $(this).find('ul').slideToggle();
  });

  $('.js-tab-trigger').click(function () {
    var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="' + id + '"]');

    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
  });

  /* fancybox */
  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "zoom",
      "share",
      "fullScreen",
      "download",
      "close"
    ],
    infobar: false,
  });

  //languages switcher
  var curLang = $('.curLang');
  var selection = $('ul.language-switcher');
  var select = selection.find('li');
  var langDtc = select.find('span').attr('data-lang');

  curLang.find('span.title').html(select.find('span').text());
  curLang.addClass(langDtc);
  selection.find('span').addClass('hide');

  curLang.on('click', function (event) {
    event.preventDefault();
    if (curLang.hasClass('active')) {
      curLang.removeClass('active');
      $(this).next().stop().slideUp(200);
    } else {
      curLang.addClass('active');
      $(this).next().stop().slideDown(200);
    }
  });

  select.on('click', function (event) {
    curLang.trigger('click');
  });

  if ($(".timesheet").hasClass("mb15")) {
    $(".about-title").addClass("extra");
  }

  //Open/close submenu
  $('.navmenu__item > a').click(function () {
    if ($(this).next('ul').hasClass("show")) {
        $('.navmenu__child').removeClass('show');
    } else {
        $('.navmenu__child').removeClass('show');
        $(this).next('ul').toggleClass('show');
    }
  });

  //Tabs
  $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
    $("#"+tab_id).addClass('current');
    
    $('.news-slider').slick('setPosition');
	})


});