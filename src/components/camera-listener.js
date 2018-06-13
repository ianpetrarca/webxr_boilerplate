var AFRAME = require('aframe');
AFRAME.registerComponent('listener', {
    tick: function () {
      var cameraEl = this.el.sceneEl.camera.el;
      cameraEl.getAttribute('position');
    console.log(cameraEl.getAttribute('rotation'));
      
      // Do something.
    }
  });