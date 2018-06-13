var AFRAME = require('aframe');
AFRAME.registerComponent('change-mountains', {
    init: function () {
    var sceneEl = document.querySelector('a-scene');
    var mountainsEl = sceneEl.querySelector('#enviro');
    var mountains = true;
    this.el.addEventListener('click', function () {
        if (mountains){
            mountainsEl.setAttribute('environment', 'groundYScale', '0');
            mountains=false;
        }else if(!mountains) {
            mountainsEl.setAttribute('environment', 'groundYScale', '40');
            mountains=true;
         }
    });
    } 
});