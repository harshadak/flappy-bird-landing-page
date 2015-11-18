$(document).ready(function() {
	//Velocity(document.getElementById("dummy"), { opacity: 0.5 }, { duration: 1000 });
      $('.image-slider').slick({
        centerMode: true,
        dots: true,
        infinite: true,
		centerPadding: '60px',
		slidesToShow: 3,
		slidesToScroll: 0,
		  responsive: [
		   {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 2,
		        centerPadding: '40px'
		      }
		    },
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        centerPadding: '40px'
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerPadding: '40px',
		        slidesToShow: 1,
		        slidesToScroll: 0
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 320,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3
		      }
		    }
		  ],
		  autoplay: true,
		  autoplaySpeed: 2000
      });
});