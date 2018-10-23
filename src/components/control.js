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

    // this.currentPlanePos = document
    //   .querySelector("#plane")
    //   .getAttribute("position");
    this.triggerStartPos = null;
    this.trackpadStartPos = null;

    this.el.addEventListener(this.TRIGGER_EVENT, e => this.startTrigger(e));
    this.el.addEventListener(this.UNTRIGGER_EVENT, e => this.endTrigger(e));

    this.el.addEventListener(this.TRACKPAD_EVENT, e => this.startTrackpad(e));
    this.el.addEventListener(this.UNTRACKPAD_EVENT, e => this.endTrackpad(e));
  },

  startTrigger: function(evt) {
    console.log(evt);
    console.log("trigger");
    this.triggered = true;
    this.triggerStartPos = this.el.getAttribute("position");
    console.log(this.triggerStartPos);
    this.triggerStartPos_x = this.triggerStartPos.x;
    this.triggerStartPos_y = this.triggerStartPos.y;
    // AFRAME.log('Start Trigger Called at position: ' + this.triggerStartPos_y);
  },

  endTrigger: function(evt) {
    document.querySelector("#appbar").object3D.position.x += 1;
    console.log(evt);
    // AFRAME.log('End Trigger Called...');
    this.triggered = false;
  },

  startTrackpad: function(evt) {
    console.log("trackpad");
    console.log(evt);
    this.trackpad = true;
    this.trackpadStartPos = this.el.getAttribute("position");
    this.trackpadStartPos_z = this.trackpadStartPos.z;
    // AFRAME.log('Start Trigger Called at position: ' + this.trackpadStartPos_z);
  },

  endTrackpad: function(evt) {
    console.log(evt);
    // AFRAME.log('End Trackpad Called...');
    this.trackpad = false;
  },

  tick: function() {
    //     if (this.triggered || this.trackpad) {
    //     //   var plane = document.querySelector("#plane");
    //     //   var currentPosPlane = plane.getAttribute("position");
    //       var controller = document.querySelector("#controller");
    //       var currentPosController = controller.getAttribute("position");
    //     }
    //     if (this.triggered) {
    //       // AFRAME.log('Holding trigger...');
    //       var triggerPosDiff_x =
    //         (currentPosController.x - this.triggerStartPos_x) * 1;
    //       var triggerPosDiff_y =
    //         (currentPosController.y - this.triggerStartPos_y) * 1;
    //       plane.object3D.position.x += triggerPosDiff_x;
    //       plane.object3D.position.y += triggerPosDiff_y;
    //       this.triggerStartPos_x = currentPosController.x;
    //       this.triggerStartPos_y = currentPosController.y;
    //     }
    //     if (this.trackpad) {
    //       // AFRAME.log('Holding trackpad...');
    //       var trackpadPosDiff_z =
    //         (currentPosController.z - this.trackpadStartPos_z) * 1;
    //       plane.object3D.position.z += trackpadPosDiff_z;
    //       this.trackpadStartPos_z = currentPosController.z;
    //     }
  }
});
