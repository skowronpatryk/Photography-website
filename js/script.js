// Preloader
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

// TEAM SECTION CAROUSEL
$(document).ready(function(){
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
       
    });
})

// PROGRESS BAR

$('.progress-bar').each(function() {
    $(this).animate({
        width: $(this).attr('aria-valuenow') + "%"
    }, 1000);
});

// RESPONSIVE TABS

$(function() {
    $('.service-tabs').responsiveTabs({
        animation: 'slide'
    });
})

// PORTFOLIO

$(window).on('load', function(){
    $('.isotope-container').isotope({
    });

    $('.isotope-filter').on('click', 'button', function(){
        var filterValue = $(this).attr('data-filter');
        $('.isotope-container').isotope({
            filter: filterValue
        });

        $('.isotope-filter').find('.active').removeClass('active');
        $(this).addClass('active');
    });

});

// MAGNIFIC
$(function() {
    $('.portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
      });
})

// OPINIONS SLIDER
$(document).ready(function(){
    $(".opinions-slider").owlCarousel({
        items: 1,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });
  });

//   HAPPY CLIENTS SLIDER

$(document).ready(function() {
    $(".clients-logo").owlCarousel({
        items: 6,
        autoplay: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        768:{
            items:4,
            nav:false
        },
        992:{
            items:6,
            nav:true,
            loop:false
        }
    }
    })
})

// GOOGLE MAPS API
function initMap() {
    var place = {lat: 50.590490, lng: 16.814790};
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 12, center: place});
    var marker = new google.maps.Marker({position: place, map: map});
}

// NAVIGATION SHOW & HIDE
$(function () {
    $('nav').removeClass('white-nav-top');

    $(window).scroll(function() {
        showHideNav();
    })

function showHideNav() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $('nav').addClass('white-nav-top');
            } else {
                $('nav').removeClass('white-nav-top');
            }
        })
    }
});

// SCROLLSPY
$(document).ready(function(){
    $("body").scrollspy({
        target: ".navbar",
        offset: 70
    }) 
});

// SMOOTH SCROLLING NA IE I SAFARI
$(document).ready(function(){
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

//   Animation!!

$(function(){
    new WOW().init();
})

$(window).on('load', function(){
    $(".home-header-1").addClass("animated fadeInDown");
    $(".home-header-2").addClass("animated fadeInLeft");
    $(".home-text").addClass("animated zoomIn");
    $(".home-button").addClass("animated zoomIn");
    $("#arrow-down  i").addClass("animated fadeInDown infinite");
})