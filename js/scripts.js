/*!
 * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 74,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  //Start of scroll fade in function

  var scrollElements = $(".animationElement");

  $(window).on("scroll resize", checkIfInView);
  $(window).trigger("scroll");

  function checkIfInView() {
    var windowHeight = $(window).height();
    var windowTopPosition = $(window).scrollTop();
    var windowBottomPosition = windowTopPosition + windowHeight;
    $.each(scrollElements, function () {
      var element = $(this);
      var elementHeight = element.outerHeight();
      var elementTopPosition = element.offset().top;
      var elementBottomPosition = elementTopPosition + elementHeight;

      //check to see if this current container is within viewport
      if (
        elementBottomPosition >= windowTopPosition &&
        elementTopPosition <= windowBottomPosition
      ) {
        element.addClass("inView");
      } else {
        element.removeClass("inView");
      }
    });
  }

 

  var deadLine = "October 18 2020 23:59:59 GMT-0300";
  updateDate();
  setInterval(updateDate, 1000);
  function updateDate() {
    const total = Date.parse(deadLine) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    let countdown = days;
    if (days < 10) countdown = "0" + countdown;
    countdown = countdown + ":";
    if (hours < 10) countdown = countdown + "0";
    countdown = countdown + hours;
    countdown = countdown + ":";
    if (minutes < 10) countdown = countdown + "0";
    countdown = countdown + minutes;
    countdown = countdown + ":";
    if (seconds < 10) countdown = countdown + "0";
    countdown = countdown + seconds;
    $("#Time").text(countdown);
    
    if(total <= 0)
    {
      clearInterval(updateDate)
      $("#Time").text("00:00:00:00");
    }
  }


  //change image to gif on hover
  $(".img-thumbnail").hover(
    function () {
      $(this).attr("src", function (index, attr) {
        return attr.replace(".jpeg", ".gif");
      });
    },
    function () {
      $(this).attr("src", function (index, attr) {
        return attr.replace(".gif", ".jpeg");
      });
    }
  );

  var image1 = new Image();
  image1.src = "../assets/img/novas/lol_moderno.gif";

  var image = new Image();
  image.src = "../assets/img/novas/CSGO.gif";

  var image2 = new Image();
  image2.src = "../assets/img/novas/game_over_continue.gif";
})(jQuery); // End of use strict
