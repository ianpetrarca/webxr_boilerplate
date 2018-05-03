const { ResonanceAudio } = require('resonance-audio');
var AFRAME = require('aframe');

// Create an AudioContext
var audioContext = new AudioContext();
var resonanceAudioScene = new ResonanceAudio(audioContext, {
  ambisonicOrder: 1,
});


resonanceAudioScene.output.connect(audioContext.destination);

var roomDimensions = {
    width: 20,
    height: 10,
    depth: 20,
  };


var marble = {
  // Room wall materials
  left: 'marble',
  right: 'marble',
  front: 'marble',
  back: 'marble',
  // Room floor
  down: 'marble',
  // Room ceiling
  up: 'marble',
};




resonanceAudioScene.setRoomProperties(roomDimensions, marble);

var chord = document.createElement('audio');
chord.src = '../src/chance.mp3';
var chordSource = audioContext.createMediaElementSource(chord);

// Add the MediaElementSource to the scene as an audio input source.
var source = resonanceAudioScene.createSource();
chordSource.connect(source.input);



AFRAME.registerComponent('listener', {
  init () {
    this.cameraMatrix4 = new AFRAME.THREE.Matrix4()
},
  tick: function () { 
    this.cameraMatrix4 = this.el.object3D.matrixWorld;
    resonanceAudioScene.setListenerFromMatrix(this.cameraMatrix4);
}


});

AFRAME.registerComponent('sound-object', {
  tick: function () {
    source.setPosition(this.el.object3D.getWorldPosition().x, this.el.object3D.getWorldPosition().y, this.el.object3D.getWorldPosition().z);
  }
});


chord.play();
chord.crossOrigin = 'anonymous';
