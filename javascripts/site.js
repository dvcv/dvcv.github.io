function mobileViewUpdate(){$(window).width()<768?($(".row.projects-row").removeClass("row").addClass("gallery-mobile1"),$(".col-md-8").removeClass("right").addClass("gallery-mobile2")):($(".gallery-mobile1").removeClass("gallery-mobile1").addClass("row"),$(".gallery-mobile2").removeClass("gallery-mobile2").addClass("right"))}$(window).on("resize",mobileViewUpdate),$(window).on("load",function(){mobileViewUpdate(),$(".projects-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".projects").offset().top},1200),!1}),$(".about-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".about").offset().top},1200),!1}),$(".blog-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".blogs").offset().top},1200),!1}),$(".resume-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".resume").offset().top},1200),!1}),$(".contact-link").click(function(){return $("#navbarNavAltMarkup").removeClass("show"),$("html, body").animate({scrollTop:$(".contact").offset().top},1200),!1});var a=$(document),l=$(".navbar"),e="navbar-default";navbarTransparent="navbar-transparent",a.scroll(function(){a.scrollTop()>=100?(l.addClass(e),l.removeClass(navbarTransparent)):(l.addClass(navbarTransparent),l.removeClass(e))});var o=["Ruby on Rails","Data Analysis with R","Math and Statistics","App development"],t=0;$("#skills").typeIt({speed:200,autoStart:!0});var r=window.setInterval(function(){t==o.length+1&&(clearInterval(r),$("#skills").text("")),$("#skills").typeIt({strings:o[t],speed:100,autoStart:!0}),t+=1},3e3)});