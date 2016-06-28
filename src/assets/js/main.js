document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  fixHeroHeight();
});

// Keeps the primary navigation in close proximity to the user
// by fixing it when scrolling up and disappearing when scrolling down
function initNavbar() {
  var header = document.querySelector('.site-header');
  var headroom  = new Headroom(header, {
    offset: 0,
    tolerance: 10,
    classes: {
      initial: "animated",
      pinned: "slideDown",
      unpinned: "slideUp",
      top: "top",
      notTop: "notTop",
      bottom: "bottom",
      notBottom: "notBottom"
    }
  });

  headroom.init();
}

// Converts hero image's height to pixels in order
// to fix a weird behavior with 100vh on mobile devices
function fixHeroHeight() {
  var postHeader = document.querySelector('.post-header');

  if (postHeader) {
    postHeader.style.height = document.documentElement.clientHeight + 'px';
  }
}