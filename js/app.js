$(document).ready(function () {
    //Velocity(document.getElementById("dummy"), { opacity: 0.5 }, { duration: 1000 });
    $('.image-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                centerPadding: '40px'
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerPadding: '40px'
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $("#heading").velocity("fadeIn", 2000);
    $(".play-button").mouseenter(function () {
        $(this).velocity({
            scale: "1.2"
        }, 500, "easeInOut").velocity("reverse");
    });
    $(".linkedin").mouseenter(function () {
        $(this).velocity({
            scale: "1.2"
        }, 400, "easeInOut").velocity("reverse");
    });
    $(".github").mouseenter(function () {
        $(this).velocity({
            scale: "1.2"
        }, 400, "easeInOut").velocity("reverse");
    });
});
