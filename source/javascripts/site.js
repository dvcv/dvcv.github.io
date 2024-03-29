//Controlls the projects resizing for smaller screens
function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
      $(".row.projects-row").removeClass("row").addClass("gallery-mobile1");
      $(".col-md-8").removeClass("right").addClass("gallery-mobile2");
    }else {
      $(".gallery-mobile1").removeClass("gallery-mobile1").addClass("row");
      $(".gallery-mobile2").removeClass("gallery-mobile2").addClass("right");
    }
}

$(window).on('resize',mobileViewUpdate);
$(window).on('load',function(){
  mobileViewUpdate();
  // Main
  $(".projects-link").click(function() {
      $('#navbarNavAltMarkup').removeClass("show");
      $('html, body').animate({
          scrollTop: $(".projects").offset().top
      }, 1200);
      return false;
  });

  $(".about-link").click(function() {
      $('#navbarNavAltMarkup').removeClass("show");
      $('html, body').animate({
          scrollTop: $(".about").offset().top
      }, 1200);
      return false;
  });

  $(".blog-link").click(function() {
      $('#navbarNavAltMarkup').removeClass("show");
      $('html, body').animate({
          scrollTop: $(".blogs").offset().top
      }, 1200);
      return false;
  });

  $(".resume-link").click(function() {
      $('#navbarNavAltMarkup').removeClass("show");
      $('html, body').animate({
          scrollTop: $(".resume").offset().top
      }, 1200);
      return false;
  });

  $(".contact-link").click(function() {
      $('#navbarNavAltMarkup').removeClass("show");
      $('html, body').animate({
          scrollTop: $(".contact").offset().top
      }, 1200);
      return false;
  });

  //Controlls the color change of the navigation bar.
  var $document = $(document),
      $element = $('.navbar'),
      navbarDefault = 'navbar-default';
      navbarTransparent = 'navbar-transparent';

  $document.scroll(function(){
    if ($document.scrollTop() >= 100) {
      //user scrolled more than 100 pixels
      $element.addClass(navbarDefault);
      $element.removeClass(navbarTransparent);

    } else {
      $element.addClass(navbarTransparent);
      $element.removeClass(navbarDefault);

    }
  });
  //Skills
  var skills = ["Ruby on Rails", "Data Analysis with R", "Math and Statistics", "App development"]
  var index = 0;

  $("#skills").typeIt({
    speed: 200,
    autoStart: true
  });
  var refreshIntervalId = window.setInterval(function(){
    if(index == skills.length + 1){
      clearInterval(refreshIntervalId);
      $("#skills").text('');
    }
    $("#skills").typeIt({
      strings: skills[index],
      speed: 100,
      autoStart: true
    });
    index += 1;

  }, 3000);
});
