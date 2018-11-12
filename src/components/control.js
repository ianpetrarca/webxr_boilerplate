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

  startTrigger: function() {
    this.triggered = true;
  },

  endTrigger: function() {
    this.triggered = false;
  },

  startTrackpad: function() {
    this.trackpad = true;
  },

  endTrackpad: function() {
    this.trackpad = false;
  },

  tick: function() {
    const controller = document.querySelector("#controller");
    const cam = document.querySelector("#cameraWrapper").object3D;
    const currentDirController = controller.object3D.getWorldDirection();
    if (this.triggered) {
      cam.position.sub(
        currentDirController.multiply(new AFRAME.THREE.Vector3(0.1, 0.1, 0.1))
      );
    }
    if (this.trackpad) {
      cam.position.add(
        currentDirController.multiply(new AFRAME.THREE.Vector3(0.1, 0.1, 0.1))
      );
    }
  }
});
