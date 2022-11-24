// RENDERER SETUP
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".webGLContainer").appendChild(renderer.domElement);

// SCENE SETUP
const scene = new THREE.Scene();
