$(document).ready(function () {
  $('select').niceSelect();

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
    //gallery width
    gallery_width: 900,

    //gallery height
    gallery_height: 400,

    //gallery minimal width when resizing
    gallery_min_width: 400,

    //gallery minimal height when resizing
    gallery_min_height: 400,

    //default,compact,<a href="https://www.jqueryscript.net/tags.php?/grid/">grid</a>,slider
    //select your desired theme from the list of themes.
    gallery_theme: "default",

    //default, alexis etc... - the global skin of the gallery.
    //Will change all gallery items by default.
    gallery_skin: "default",

    //all , minimal , visible - preload type of the images.
    //minimal - only image nabours will be loaded each time.
    //visible - visible thumbs images will be loaded each time.
    //all - load all the images first time.
    gallery_images_preload_type: "minimal",

    //true / false - begin slideshow autoplay on start
    gallery_autoplay: false,

    //play interval of the slideshow
    gallery_play_interval: 3000,

    //true,false - pause on mouseover when playing slideshow true/false
    gallery_pause_on_mouseover: true,

    //true,false - change this option, add more mousewheel choices
    gallery_control_thumbs_mousewheel: false,

    //true,false - enable / disble keyboard controls
    gallery_control_keyboard: false,

    //true,false - next button on last image goes to first image.
    gallery_carousel: true,

    //true, false - preserver ratio when on window resize
    gallery_preserve_ratio: true,

    //set custom background color. 
    //If not set it will be taken from css.
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

});