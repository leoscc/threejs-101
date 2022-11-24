// RENDERER SETUP
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".webGLContainer").appendChild(renderer.domElement);

// SCENE SETUP
const scene = new THREE.Scene();

// CAMERA
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// CUBE SETUP
const cubeGeometry = new THREE.BoxGeometry(1, 1, 3);
const cubeMaterial = new THREE.MeshNormalMaterial();
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

// RENDER LOOP
function update() {
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

update();
