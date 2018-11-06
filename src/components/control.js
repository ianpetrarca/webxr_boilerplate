var AFRAME = require("aframe");
AFRAME.registerComponent("control", {
  init: function() {
    console.log("init control");
    // document.querySelector("a-scene").addEventListener("enter-vr", function() {
    //   document.querySelector("a-camera").object3D.position.set(0, 0, 0);
    // });

    // Reload work around, Oculus Go controller stops responding after re-entering VR
    // https://github.com/aframevr/aframe/issues/3390
    document.querySelector("a-scene").addEventListener("exit-vr", function() {
      window.location.reload(true);
    });

    this.TRIGGER_EVENT = "triggerdown";
    this.UNTRIGGER_EVENT = "triggerup";

    this.TRACKPAD_EVENT = "trackpaddown";
    this.UNTRACKPAD_EVENT = "trackpadup";

    this.triggered = false;
    this.trackpad = false;

    this.triggerStartPos = null;
    this.triggerDiff = null;
    this.trackpadStartPos = null;

    this.el.addEventListener(this.TRIGGER_EVENT, e => this.startTrigger(e));
    this.el.addEventListener(this.UNTRIGGER_EVENT, e => this.endTrigger(e));

    this.el.addEventListener(this.TRACKPAD_EVENT, e => this.startTrackpad(e));
    this.el.addEventListener(this.UNTRACKPAD_EVENT, e => this.endTrackpad(e));
  },

  startTrigger: function(evt) {
    console.log(evt);
    this.triggered = true;
    this.triggerStartPos = this.el.getAttribute("position");
    this.triggerStartPos_x = this.triggerStartPos.x;
    this.triggerStartPos_y = this.triggerStartPos.y;
    this.triggerStartPos_z = this.triggerStartPos.z;
  },

  endTrigger: function(evt) {
    console.log(evt);
    const camPos = document.querySelector("#cameraWrapper").object3D.position;
    console.log(this.triggerDiff);
    if (this.triggerDiff > 0) {
      camPos.z += 1;
    } else {
      camPos.z -= 1;
    }
    this.triggered = false;
  },

  startTrackpad: function(evt) {
    console.log("trackpad");
    console.log(evt);
    this.trackpad = true;
    this.trackpadStartPos = this.el.getAttribute("position");
  },

  endTrackpad: function(evt) {
    console.log(evt);
    this.trackpad = false;
  },

  tick: function() {
    if (this.triggered) {
      var controller = document.querySelector("#controller");
      var currentPosController = controller.getAttribute("position");
      this.triggerDiff = (currentPosController.z - this.triggerStartPos_z) * 1;
    }
  }
});
