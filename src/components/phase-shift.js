var AFRAME = require('aframe');
// turn controller's physics presence on only while button held down
  AFRAME.registerComponent('phase-shift', {
    init: function () {
      var el = this.el;
      el.addEventListener('gripdown', function () {
        el.setAttribute('collision-filter', {collisionForces: true});
      });
      el.addEventListener('gripup', function () {
        el.setAttribute('collision-filter', {collisionForces: false});
      });
    }
  });

