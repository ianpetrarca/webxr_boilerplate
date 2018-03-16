//Load Site Assets
if (process.env.NODE_ENV !== 'production') {
  require('./index.html');
  require('./styles.css');
}

//Create Box Component and Place in Scene
// require('./box.js')

AFRAME.registerComponent('audioanalyser-volume-scale', {
  schema: {
    analyserEl: {type: 'selector'},
    multiplier: {type: 'number', default: 1}
  },

  tick: function () {
    var analyserEl = this.data.analyserEl || this.el;
    var analyserComponent;
    var el = this.el;
    var volume;

    analyserComponent = analyserEl.components.audioanalyser;
    if (!analyserComponent.analyser) { return; }

    volume = analyserComponent.volume * this.data.multiplier;
    el.setAttribute('scale', {
      z: .2+ volume,
      y: .2+ volume,
      z: .2+ volume
    });
  }
});

