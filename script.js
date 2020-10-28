//----------------------------------------------------------------
                    /*Section-2-video-animation-effect*/
//----------------------------------------------------------------


(function() {
// Init
  var container = document.getElementById("video-container");
  var inner = document.getElementById("video");

// Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,

/*Sets the coordinates (0,0) of our mouse object 
  at the center of the element (e).*/
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },

/*Sets the coordinates (0,0) of our mouse 
  object at the center of the element (e).*/
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
//Displays the current position of the mouse
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

// Track the mouse position relative to the center of the container.
  mouse.setOrigin(inner);

//When the counter reaches the updateRate, an update will be made.
  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % refreshRate === 0;
  };


// Multiple transformation
  var onMouseEnterHandler = function(event) {
    update(event);
  }; 
// Back to start position
  var onMouseLeaveHandler = function() {
    inner.style = "";
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

/*Updates the mouse position and updates 
  the style of the #inner div.*/
  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

//Updates the style for each vendor prefix.
  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTranform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

/*these functions handle the events as they happen. 
We want to decide what happens when the cursor enters, 
moves over, and leaves the container, 
so each of those has a handler.*/
  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
})();
  






//----------------------------------------------------------------
                    /*Section-2-open-video*/
//----------------------------------------------------------------


$(".icon-parent").click(function(){
  $(".open-video").fadeIn(500);
});

                    /*close video*/
$(".btnclose").click(function(){
  $(".open-video").fadeOut(500);
});







//----------------------------------------------------------------
                    /*Section-2-slider-brands*/
//----------------------------------------------------------------


document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#secondary-slider', {
    type   : 'loop',
    fixedWidth  : 140,
    height      : 60,   
    gap         : 40,   // nkarneri aheravorutyun
    perPage     : 6,     // qanaky nkarneri eji vra
    perMove     : 1,     // poxeluc qani hat ga nkar
    cover       : false, // chapy nkarneri
    pagination  : false, // ejakalum
    isNavigation: false, // navigacya
    breakpoints : {
      '600': {
        fixedWidth: 66,
        height    : 40,
      }
    },
  } ).mount();
} );




//----------------------------------------------------------------
                    /*section-3-slider*/
//----------------------------------------------------------------


document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#secondary-slider2', {
    type   : 'loop',
    fixedWidth  : 0,
    height      : 100,   
    gap         : 0,   // nkarneri heravorutyun
    perPage     : 4,     // qanaky nkarneri eji vra
    perMove     : 1,     // poxeluc qani hat ga nkar
    cover       : false, // chapy nkarneri
    pagination  : false, // ejakalum
    isNavigation: false, // navigacya
  } ).mount();
} );




//----------------------------------------------------------------
                    /*section-5-images*/
//----------------------------------------------------------------


//buttons
$(".elements").click(function(){
  $(".elements").removeClass("active");
  $(this).addClass("active");
});





