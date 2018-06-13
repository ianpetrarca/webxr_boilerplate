var AFRAME = require('aframe');
AFRAME.registerComponent('change-fog', {
    init: function () {
    var sceneEl = document.querySelector('a-scene');
    var fogEl = sceneEl.querySelector('#enviro');
    var fog = true;
    this.el.addEventListener('click', function () {
        if (fog){
            fogEl.setAttribute('environment', 'fog', '0');
            fog=false;
        }else if(!fog) {
            fogEl.setAttribute('environment', 'fog', '.75');
            fog=true;
         }
    });
    } 
});