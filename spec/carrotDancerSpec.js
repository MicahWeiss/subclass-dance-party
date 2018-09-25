describe('carrotDancer', function() {

    var carrotDancer, clock;
    var timeBetweenSteps = 100;
  
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      carrotDancer = new CarrotDancer(10, 20, timeBetweenSteps);
    });
  
    it('should have a jQuery $node object', function() {
      expect(carrotDancer.$node).to.be.an.instanceof(jQuery);
    });
  
    it('should have a step function that makes its node blink', function() {
      sinon.spy(carrotDancer.$node, 'toggle');
      carrotDancer.step();
      expect(carrotDancer.animated).to.be.true; //changed test
    });
  
    describe('dance', function() {
      it('should call step at least once per second', function() {
        sinon.spy(carrotDancer, 'step');
        expect(carrotDancer.step.callCount).to.be.equal(0);
        clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
        clock.tick(timeBetweenSteps);
  
        expect(carrotDancer.step.callCount).to.be.equal(1);
  
        clock.tick(timeBetweenSteps);
        expect(carrotDancer.step.callCount).to.be.equal(2);
      });
    });
  });
  
