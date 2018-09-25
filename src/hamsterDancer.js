var HamsterDancer = class HamsterDancer extends Dancer{
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
    // so we must keep a copy of the old version of this function
    this.oldStep = Dancer.prototype.step;
    this.timeBetweenSteps = timeBetweenSteps;
    this.type = "hamster";
    this.animated = false;
    this.$node.addClass("hamsterDancer");
  };
    
  step() {
    // call the old version of step at the beginning of any call to this new version of step
    
    Dancer.prototype.step.call(this);
    //this.oldStep(); BREAKS EVERYTHING
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.animated = true;
    this.$node.animate({left : "-=50"}, "fast")
    this.$node.animate({left : "+=50"}, "fast")
    this.$node.on('mouseover', function(event) {
        //var obj = document.getElementById("audio");
      window.obj.play();
    });
  
    //this.$node.toggle();
  };

  lineUp() {
    // clearTimeout(this.timer);
    this.$node.stop(true);
    this.$node.animate({left: 500}, "fast");
    // this.step();
  }

  eat() {
    // clearTimeout(this.timer);
    this.$node.stop(true);
    this.$node.animate({left: 800, top: 800}, "slow")
    this.$node.animate({left: $("body").width() * Math.random(), top: $("body").height() * Math.random()}, "fast")
    this.$node.animate({height: "+=50", width: "+=50"}, Math.random() * 1000);
    this.step();
  }
}
  