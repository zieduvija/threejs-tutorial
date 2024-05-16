import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {updateControlsTarget} from "./eventHandler.js";


const scene = new THREE.Scene();

scene.fog = new THREE.Fog(new THREE.Color('#fff'), 1, 900);
scene.fog.color.setHSL(0.6, 0, 1);

const aspect = window.innerWidth / window.innerHeight;
const d = 3;

const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 0.1, 500);
camera.position.set(150, 29, 80);
camera.rotateZ(-50);

scene.background = new THREE.Color(new THREE.Color('#d2ccc4'));

const renderer = new THREE.WebGLRenderer(
    { antialias: true,
        canvas: document.querySelector('#bg'),
    }
);

renderer.physicallyCorrectLights = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.9;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enablePan = false;
controls.enableZoom = false;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = Math.PI / 3;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.3;

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
outlinePass.edgeStrength = 3;
outlinePass.edgeGlow = -1;
outlinePass.edgeThickness = 0.2;
outlinePass.pulsePeriod = 2;
outlinePass.usePatternTexture = false;
outlinePass.visibleEdgeColor.set('#ffffff');
outlinePass.hiddenEdgeColor.set('rgb(0,0,0)');

composer.addPass(outlinePass);


const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1, 1.3, 0.9);
composer.addPass(bloomPass);



function animate() {
    updateControlsTarget(controls);
    requestAnimationFrame(animate);
    controls.update();
    composer.render();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
export { renderer, scene, camera, controls, animate, composer, outlinePass };


