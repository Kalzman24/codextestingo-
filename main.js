import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js";

const container = document.getElementById("globe-container");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  100
);
camera.position.set(0, 0, 4.5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enablePan = false;
controls.minDistance = 2.3;
controls.maxDistance = 6;
controls.update();

const ambientLight = new THREE.AmbientLight(0xb0c8ff, 0.35);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
directionalLight.position.set(5, 3, 5);
scene.add(directionalLight);

const globeGroup = new THREE.Group();
scene.add(globeGroup);

const EARTH_RADIUS = 1.2;

const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load(
  "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
);

const earthMaterial = new THREE.MeshPhongMaterial({ map: earthTexture });
const earthGeometry = new THREE.SphereGeometry(EARTH_RADIUS, 128, 128);
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
globeGroup.add(earthMesh);

globeGroup.rotation.y = THREE.MathUtils.degToRad(-90);

const atmosphereMaterial = new THREE.MeshPhongMaterial({
  color: 0x70a1ff,
  transparent: true,
  opacity: 0.12,
  side: THREE.BackSide,
});
const atmosphereGeometry = new THREE.SphereGeometry(EARTH_RADIUS * 1.02, 64, 64);
const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
globeGroup.add(atmosphereMesh);

const cityData = [
  { name: "New York", latitude: 40.7128, longitude: -74.006 },
  { name: "London", latitude: 51.5074, longitude: -0.1278 },
  { name: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { name: "Tokyo", latitude: 35.6762, longitude: 139.6503 },
  { name: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { name: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  { name: "Moscow", latitude: 55.7558, longitude: 37.6173 },
  { name: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { name: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
  { name: "Johannesburg", latitude: -26.2041, longitude: 28.0473 },
];

const markerGroup = new THREE.Group();
globeGroup.add(markerGroup);

const markerGeometry = new THREE.SphereGeometry(0.03, 16, 16);
const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xffc857 });

cityData.forEach((city) => {
  const position = latLongToVector3(city.latitude, city.longitude, EARTH_RADIUS);

  const marker = new THREE.Mesh(markerGeometry, markerMaterial);
  marker.position.copy(position);
  markerGroup.add(marker);

  const label = createCityLabel(city.name);
  label.position.copy(position.clone().multiplyScalar(1.08));
  markerGroup.add(label);
});

function latLongToVector3(lat, lon, radius) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lon + 180);

  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return new THREE.Vector3(x, y, z);
}

function createCityLabel(name) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const fontSize = 64;
  const padding = 48;
  const font = `${fontSize}px 'Segoe UI', sans-serif`;

  context.font = font;
  const textWidth = context.measureText(name).width;

  canvas.width = textWidth + padding;
  canvas.height = fontSize + padding * 0.75;

  context.font = font;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "rgba(5, 12, 28, 0.75)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "rgba(135, 206, 250, 0.8)";
  context.lineWidth = 6;
  context.strokeRect(3, 3, canvas.width - 6, canvas.height - 6);
  context.fillStyle = "#ffffff";
  context.fillText(name, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);

  const scaleFactor = 0.4;
  sprite.scale.set((canvas.width / canvas.height) * scaleFactor, scaleFactor, 1);

  return sprite;
}

function onWindowResize() {
  const { clientWidth, clientHeight } = container;
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(clientWidth, clientHeight);
}

window.addEventListener("resize", onWindowResize);

function animate() {
  requestAnimationFrame(animate);

  globeGroup.rotation.y += 0.0008;
  controls.update();
  renderer.render(scene, camera);
}

animate();
