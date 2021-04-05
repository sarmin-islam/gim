//active class in nanber 

$(function(){
    $('.navbar .nav-item').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});
//banner slick slider
$('.banner-slider').slick({
    arrows:false,
    dots:true,
});
//about venobox
$('.venobox').venobox(); 
//gallery baground parallax
$('.gallery-bg').parallax({imageSrc: 'images/gb.jpg'});
//testimonial slick slider
$('.tes-slider').slick({
    arrows:false,
    dots:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
    ]
});
//testimonial baground parallax
$('.testimonial-bg').parallax({imageSrc: 'images/tbg.jpg'});
//funfact counter up
$('.counter').counterUp({
    time:1500,
});
//brand slick slider
$('.brand-slider').slick({
    arrows:true,
    slidesToShow: 5,
    prevArrow:'<i class="slick-prev prev-arrow fas fa-chevron-left"></i>',
    nextArrow:'<i class="slick-next next-arrow fas fa-chevron-right"></i>',
    centerMode: true,
     centerPadding: '',
     responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots:false,
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
    ]
});

//back to top, fixed-nav

    $(function(){
        var backToTop = $('.back-to-top');
        var html_body = $('html,body');
        
        
            $(window).scroll(function () { 
                var scrolling = $(this).scrollTop();
                if(scrolling > 200){
                    backToTop.fadeIn();
                }else{
                    backToTop.fadeOut();
                }
                if(scrolling >200){
                     $('.navbar').addClass('fixed-nav');
                 }else{
                     $('.navbar').removeClass('fixed-nav');
                 }
            });
        
        
            backToTop.on('click',function(){
                html_body.animate({
                    scrollTop:0,
                },1500);
            });
        
            $('.navbar .navbar-nav .nav-item .nav-link').on('click', function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        html_body.animate({
                            scrollTop: target.offset().top - 0
                        }, 1500,);
                        return false;
                    }
                }
            });
            
        });
        