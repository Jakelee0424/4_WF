
$(function () {


    $(document).ready(function () {

   // 해당 a태그로 에니메이션하면서 이동
       $(document).on('click', 'a[href^="#"]', function (event) {
       event.preventDefault();

       $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
       }, 500, 'easeInOutExpo');
    });


       $(".top-btn").click(function () {
          $("html, body").animate({
             "scrollTop": "0px"
          }, 700, 'easeInOutExpo');
       });


    });

    $(window).scroll(function () {
       var scroll = $(window).scrollTop();
       if (scroll < 600) {
          $(".top-btn").stop().animate({

             'right':"50px",
             opacity: "0",
          }, 200);


       } else {
          $(".top-btn").stop().animate({
             'right': "60px",
             opacity: "1",
          }, 200);


       }
    });


 });
