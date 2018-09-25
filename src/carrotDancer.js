var CarrotDancer = class CarrotDancer extends Dancer{
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    this.oldStep = Dancer.prototype.step;
    this.timeBetweenSteps = timeBetweenSteps;
    this.type = "carrots";
    this.$node.addClass("carrotDancer");
    this.animated = false;//added check
  };

  step() {
    // call the old version of step at the beginning of any call to this new version of step
    
    Dancer.prototype.step.call(this);
    //this.oldStep(); BREAKS EVERYTHING
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.animated = true; // added check
    this.$node.animate({top : "-=10"}, "fast")
    this.$node.animate({top : "+=10"}, "fast")
    //this.$node.toggle();
  };
  lineUp() {
    // clearTimeout(this.timer);
    this.$node.stop(true);
    this.$node.animate({left: 800, top: 800}, "fast");
    this.step();
  }

  disappear() {
    this.$node.stop(true);
    this.$node.fadeOut("slow");
    this.$node.animate({left: $("body").width() * Math.random(), top: $("body").height() * Math.random()}, "fast");
    this.$node.fadeIn("slow");
  }
}