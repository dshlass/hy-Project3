$(function() {
    $('a').smoothScroll({
        offset: -98
    });

    // $('a').click(function(){
    //   if ($(window).width() <= 961) {
    //   // $('.tab-content').css('max-height','0px');
    //   $('#toggle').toggle(function(){
    //     $('#toggle').attr('checked', false);
    //   });
    //   }

    // });
});

navWrapper = document.getElementById("navWrapper");
stickyWrapper= document.getElementById("sticky-wrapper");
scrollToTop = document.getElementById("scrollToTop"); 


function getYPosition() {
  return window.scrollY;
}

function isChecked() {
  return checked;
}

function navSticky() {
  if (getYPosition() >= 1 ) {
    navWrapper.className = "nav-wrapper nav-fixed";
  } else {navWrapper.className = "nav-wrapper";
}
};

function navShadow() {
  if (getYPosition() >= 1 ) {
        stickyWrapper.className = "sticky-wrapper drop-down-shadow";
  } else { stickyWrapper.className = "sticky-wrapper";
  }
}

function toTop() {
  if (getYPosition() >= 300 ) {
    scrollToTop.className = "back-to-top back-to-top-show";
  } else {
    scrollToTop.className = "back-to-top";
  }
};

// injectStyles('a:hover { color: red; }'); FOR USE LATER ON IF NEEDED

window.addEventListener("scroll", navSticky);
window.addEventListener("scroll", navShadow);
window.addEventListener("scroll", toTop);
