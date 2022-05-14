$('.autoplay').slick({
    slidesToShow: 12,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    rtl: true,
    mobileFirst: true,
    arrows: false,
    infinite: true,
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
          slidesToShow: 10,
          slidesToScroll: 1,
          arrows: false,
          dots: true
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
$('.offerDays-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    rtl: true,
    mobileFirst: true,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        }
    },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        }
        ,{
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
        },
        },
        ,{
            breakpoint: 592,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            },
            },
        {
        breakpoint: 319,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        }
    }]
});
$('.offer-days').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    rtl: true,
    mobileFirst: true,
    arrows: false,
    responsive: [{
        breakpoint: 1450,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        }
    },
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        }
    },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        }
        ,{
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
        },
        },
        ,{
            breakpoint: 592,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            },
            },
        {
        breakpoint: 319,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        }
    }]
});
$('.productDiscount-content').slick({
    slidesToShow: 12,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    mobileFirst: true,
    arrows: false,
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 9,
            slidesToScroll: 1,
            arrows: false,
            dots: false
        }
    },{
      breakpoint: 1200,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
        , {
            breakpoint: 886,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                centerMode: false,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                centerMode: false,
            }
        },
        {
            breakpoint: 440,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                centerMode: false,
            }
        },{
        breakpoint: 319,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            centerMode: false,
        }
    }]
});
$('.brand-slides').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    mobileFirst: true,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        }
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        },
        },
        {
        breakpoint: 572,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        },
        },
        {
        breakpoint: 319,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        },
        }
    ]
});