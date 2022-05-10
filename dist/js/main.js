$('.autoplay').slick({
    slidesToShow: 12,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    mobileFirst: true,
    arrows: false,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 12,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
        , {
            breakpoint: 768,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                centerMode: false,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                centerMode: false,
            }
        },{
        breakpoint: 319,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            centerMode: false,
        }
    }]
});


$('.offer-days').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
});
$('.electronicOffers-cart').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
});
$('.womenFashion-cart').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
});
$('.productDiscount-content').slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
});

$('.manFashion-cart').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
});

