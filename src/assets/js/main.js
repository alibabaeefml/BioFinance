$("document").ready(() => {
  try {
    AOS.init({disable: window.innerWidth < 768});
  } catch (e) {
    console.error(e);
  }
   // center absolute elements
   $("[center]").each((i, e) => {
    $(e).css('left', `calc(50% - ${$(e).width() / 2}px)` );
  });

  

  // nav onscroll
  if ($(window).scrollTop() > 80) {
    if (!$(".navbar-div.scrolled").length) {
      $(".navbar-div").addClass("scrolled");
    }
  } else {
    $(".navbar-div").removeClass("scrolled");
  }
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
    if ($(window).scrollTop() > 80) {
      $("#back_to_top_btn").show();
    } else {
      $("#back_to_top_btn").hide();
    }
  });

  $(".cat-item").click((e) => {
    let cat_data = $(e.currentTarget).attr("cat-data");
    $(".child-cats").each((i, ch) => {
      if ($(ch).attr("cat-data") == cat_data) {
        $(ch).slideToggle();
      }
    });
  });
  // tabs
  $(".tab-btn").click((tab) => {
    let tab_id = tab.currentTarget.id;
    $(".tab-btn").removeClass("active-tab");
    $(tab.currentTarget).addClass("active-tab");
    $("[tab-data]").each((i, view) => {
      let match = view.getAttribute("tab-data") == tab_id;
      match ? $(view).show() : $(view).hide();
    });
  });
  // accordion
  $(".accordion-btn").click((btn) => {
    let acc_id = btn.currentTarget.id;
    $(btn.currentTarget).toggleClass("bg-white bg-silver");
    $("[accordion-data]").each((i, el) => {
      let match = el.getAttribute("accordion-data") == acc_id;
      if (type(el) == "icon") {
        match ? $(el).toggleClass("rotate-90") : $(el).removeClass("rotate-90");
      }
      if (type(el) == "view") {
        match ? $(el).slideToggle() : $(el).slideUp();
      }
    });
  });
});

// ------------- Utils
// return type attribute
const type = (e) => {
  return $(e).attr("type");
};

// Device Type
const isMobile = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return true;
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return true;
  }
  return false;
};
// counter
const counter = (current) => {
  function cb(e) {
    let count_from = Number(e.getAttribute("data-count-from")) || 0,
      count_to = Number(e.getAttribute("data-count-to")) || 10,
      delay = Number(e.getAttribute("data-count-delay")) || 0,
      step = Number(e.getAttribute("data-count-step")) || 1;
    setTimeout(() => {
      let interval = setInterval(() => {
        count_from += step;
        $(e).text(count_from);
        if (count_from >= count_to) {
          $(e).text(count_to);
          clearInterval(interval);
        }
      }, 30);
    }, delay);
  }
  current
    ? cb($(current).get(0))
    : $("[data-count]").each((i, e) => {
        cb(e);
      });
};
