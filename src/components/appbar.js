var AFRAME = require("aframe");
var THREE = AFRAME.THREE;
AFRAME.registerComponent("appbar", {
  schema: {
    color: { type: "color", default: "#FFF" }
  },

  /**
   * Initial creation and setting of the mesh.
   */
  init: function() {
    var data = this.data;
    var el = this.el;
    // Create geometry.
    this.geometry = new THREE.BoxBufferGeometry(5, 1, 0.01);

    // Create material.
    this.material = new THREE.MeshStandardMaterial({ color: data.color });

    // Create mesh.
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    // Position mesh
    this.mesh.position.set(0, 5, -5);

    // Set mesh on entity.
    el.setObject3D("mesh", this.mesh);
  },

  update: function() {
    // Do something when component's data is updated.
  },

  remove: function() {
    // Do something the component or its entity is detached.
  }
});
