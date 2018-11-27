var AFRAME = require("aframe");
const { THREE } = AFRAME;
AFRAME.registerComponent("control", {
  schema: {
    lowerBound: { type: "vec3" },
    upperBound: { type: "vec3" },
    forwardVelocity: { type: "vec3", default: "0.1 0.1 0.1" },
    backwardVelocity: { type: "vec3", default: "0.1 0.1 0.1" }
  },
  init: function() {
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
    const camDir = new THREE.Vector3(0, 0, 0);
    controller.object3D.getWorldDirection(camDir);
    const { forwardVelocity, backwardVelocity } = this.data;
    if (this.triggered) {
      cam.position.sub(
        camDir.multiply(
          new AFRAME.THREE.Vector3(
            forwardVelocity.x,
            forwardVelocity.y,
            forwardVelocity.z
          )
        )
      );
      this.checkBound(cam);
    }
    if (this.trackpad) {
      cam.position.add(
        camDir.multiply(
          new AFRAME.THREE.Vector3(
            backwardVelocity.x,
            backwardVelocity.y,
            backwardVelocity.z
          )
        )
      );
      this.checkBound(cam);
    }
  },
  checkBound: function(cam) {
    if (this.data.upperBound == undefined) {
      return;
    }
    if (cam.position.x <= this.data.lowerBound.x) {
      cam.position.x = this.data.lowerBound.x + 1;
    }
    if (cam.position.x >= this.data.upperBound.x) {
      cam.position.x = this.data.upperBound.x - 1;
    }
    if (cam.position.z <= this.data.lowerBound.z) {
      cam.position.z = this.data.lowerBound.z + 1;
    }
    if (cam.position.z >= this.data.upperBound.z) {
      cam.position.z = this.data.upperBound.z - 1;
    }
  }
});
