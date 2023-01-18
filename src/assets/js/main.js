// navbar background
$("document").ready(()=>{
    $(window).scroll(() => {
        if (innerWidth > 640) {
          if ($(window).scrollTop() > 80) {
            if (!$(".navbar-div.scrolled").length) {
              $(".navbar-div").addClass("scrolled");
            }
          } else {
            $(".navbar-div").removeClass("scrolled");
          }
        }
      });
})