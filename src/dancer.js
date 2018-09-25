

// Creates and returns a new dancer object that can step
var Dancer = class Dancer{
  constructor(top, left, timeBetweenSteps)  { //constructor -- need to change into dancer
    // use jQuery to create an HTML <span> tag
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;

    this.setPosition(top, left); //???
    this.step();
  };

  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

  lineUp(){
  // clearTimeout(this.timer);
    this.$node.animate({left: 500}, "fast");
  }
}
/*


// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) { //constructor -- need to change into dancer
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left); //???
  this.step();
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
}
Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}

Dancer.prototype.lineUp = function(){
  // clearTimeout(this.timer);
  this.$node.animate({left: 500}, "fast");
}
*/