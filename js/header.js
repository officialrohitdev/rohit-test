// Hide Header on on scroll down
const myHeader = document.getElementById("myHeader");
const headroom = new Headroom(myHeader);
headroom.init();

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $('header').addClass('sticky-header');
  }
  else {
    $('header').removeClass('sticky-header');
  }
});

