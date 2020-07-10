$(document).ready(function(){

    $('#toggle').click(function(){
        $('.menu').stop().slideToggle('fast');
    });
    

    //wow js
    new WOW().init();


    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        lazyLoad: 'ondemand',
        centerPadding: '300px',
        cssEase: 'linear',
        autoplay:true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                centerPadding: '200px',
                
              }
            },
            {
              breakpoint: 767,
              settings: {
                centerPadding: '150px',
              }
            },
            {
              breakpoint: 574,
              settings: {
                centerPadding: '0px',
                centerMode: false,
              }
            }
          ]
      });

     

});





// nav bar afix for bootstrap 4

var toggleAffix = function(affixElement, wrapper, scrollElement) {

    var height = affixElement.outerHeight(),
        top = wrapper.offset().top;

    if (scrollElement.scrollTop() >= top){
        wrapper.height(height);
        affixElement.addClass("affix");
    }
    else {
        affixElement.removeClass("affix");
        wrapper.height('auto');
    }

  };


  $('[data-toggle="affix"]').each(function() {
    var ele = $(this),
        wrapper = $('<div></div>');

    ele.before(wrapper);
    $(window).on('scroll resize', function() {
        toggleAffix(ele, wrapper, $(this));
    });

    // init
    toggleAffix(ele, wrapper, $(window));
  });

