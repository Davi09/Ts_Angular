// Define function for new menu to appear on the home page when scrolled past original menu
function showNewMenu() {
  $('.navbar').visibility({
    once: false,
    onBottomPassed: function() {
      $('.navbar-hidden-wrapper').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.navbar-hidden-wrapper').transition('fade out');
    }
  });
}

//Function to get rid of new menu on a smaller screen
function hideMenu() {
  $('.navbar-hidden-wrapper').transition('fade out');
}

//define boundaries
var bounds = [
  {
    min: 0,
    max: 900,
    func: hideMenu
  },
  {
    min: 901,
    func: showNewMenu
  }
]

//Resize function
var resizeFn = function(){
  var lastBoundary; //cache last boundary used
  return function() {
    var width = window.innerWidth; //get the window's inner width
    var boundary, min, max;

    for (var i = 0; i < bounds.length; i++) {
      boundary = bounds[i];
      min = boundary.min || Number.MIN_VALUE;
      max = boundary.max || Number.MAX_VALUE;

      if (width > min && width < max
      && lastBoundary !== boundary) {
        lastBoundary = boundary;
        return boundary.func.call(boundary);
      }
    }
  }
};

//Main function
$(window).resize(resizeFn());
$(document).ready(function(){

  $(document).on('click', function() {
    $("div.middle-navbar-wrapper").removeClass("show-block");
    $("i.caret.right.icon").removeClass("hide-element");
    $("i.caret.down.icon").removeClass("show-inline-block");
    $("div.accordian-nav").removeClass("show-flex");
  });
  $("div.middle-navbar-wrapper").on('click', function(e){
    e.stopPropagation();
  });
  $(window).trigger('resize');

  // toggle dropdown menu
  $("a#click-sidebar-icon").on('click', function(e) {
    e.stopPropagation();
    $("div.middle-navbar-wrapper").toggleClass("show-block");
  });
  // toggle accordian menu
  $("a#services-nav-item").on('click', function() {
    $("i.caret.right.icon").toggleClass("hide-element");
    $("i.caret.down.icon").toggleClass("show-inline-block");
    $("div.accordian-nav").toggleClass("show-flex");
  });
  //Hide drop down menu when clicked on a link
  $('.hide-item').on('click', function() {
    $("div.middle-navbar-wrapper").removeClass("show-block");
    $("i.caret.right.icon").removeClass("hide-element");
    $("i.caret.down.icon").removeClass("show-inline-block");
    $("div.accordian-nav").removeClass("show-flex");
  });

});
