//Get Afrane Scene
var sceneEl = document.querySelector('a-scene');

//Create a Box with dimensions,physics and shadows
AFRAME.registerComponent('box', {
  init: function () {
      this.el.setAttribute('geometry', {
        primitive: 'box',
        depth: .3,
        height: .3,
        width: .3
      });
      this.el.setAttribute('dynamic-body', {});
      this.el.setAttribute('shadow', {receive: true});
  }
});

//Loop that makes 20 Boxes
for (var i = 0; i < 20; i++) {
  var entityEl = document.createElement('a-entity');
  entityEl.setAttribute('box', '');
  entityEl.setAttribute('position', {x:i*.01, y: i*1.1, z: 0});
  sceneEl.appendChild(entityEl);
};
