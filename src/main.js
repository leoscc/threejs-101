// RENDERER SETUP
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".webGLContainer").appendChild(renderer.domElement);

// SCENE SETUP
const scene = new THREE.Scene();

// CAMERA AND ORBIT CONTROLLER
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// RENDER LOOP
function update() {
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

update();
