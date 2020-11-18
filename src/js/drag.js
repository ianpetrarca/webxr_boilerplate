import AFRAME from "aframe";

AFRAME.registerSystem("track-cursor", {
  init: function() {
    this.el.setAttribute("cursor", { rayOrigin: "mouse" });

// Remove Cursor on Entering VR
window.addEventListener('enter-vr', e => {
  console.log("TESTED")
  this.el.removeAttribute("cursor");
});

window.addEventListener('exit-vr', e => {
  console.log("TESTED")
  this.el.setAttribute("cursor", { rayOrigin: "mouse" });
});

  }
});

AFRAME.registerComponent("track-cursor", {
  init: function() {
    
    this.el.addEventListener("mousedown", e => {
      if (this.el.is("cursor-hovered")) {
        this.el.sceneEl.camera.el.setAttribute("wasd-controls", {
          enabled: true
        });

        if (AFRAME.utils.device.isMobile()) {
          this.el.sceneEl.camera.el.setAttribute("look-controls", {
            enabled: false
          });
        } else {
          this.el.sceneEl.camera.el.setAttribute("look-controls", {
            enabled: true
          });

          this.el.sceneEl.camera.el.setAttribute("wasd-controls", {
            enabled: true
          });
        }

        this.el.addState("dragging");
      }
    })

    this.el.addEventListener("click", e => {
      if (this.el.is("dragging")) {
        this.el.sceneEl.camera.el.setAttribute("look-controls", {
          enabled: true
        });
        this.el.removeState("dragging");
      }
    })
  },
});

AFRAME.registerComponent("dragndrop", {
  dependencies: ["track-cursor"],
  init: function() {

    this.range = 0;
    this.dist = 0;

    this.el.addEventListener("stateadded", e => {
      if (e.detail == "dragging") {
        this.range = 0;
        this.dist = this.el.object3D.position
          .clone()
          .sub(this.el.sceneEl.camera.el.object3D.position)
          .length();
      }
    })

    this.direction = new AFRAME.THREE.Vector3();
    this.target = new AFRAME.THREE.Vector3();

    document.addEventListener("wheel", e => {
      if (e.deltaY < 0) {
        this.range += 0.1;
      } else {
        this.range -= 0.1;
      }
    });
  },
  updateDirection: function() {
    this.direction.copy(this.el.sceneEl.getAttribute("raycaster").direction);
  },
  updateTarget: function() {
    let camera = this.el.sceneEl.camera.el
    this.target.copy(
      camera.object3D.position
        .clone()
        .add(this.direction.clone().multiplyScalar(this.dist + this.range))
    );
  },
  tick: function() {
    
    if (this.el.is("dragging")) {
      this.updateDirection();
      this.updateTarget();
      this.el.object3D.position.copy(this.target);
    } 

    if (this.el.is("cursor-hovered")) {
      
    }
}
});