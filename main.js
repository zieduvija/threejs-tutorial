import * as THREE from 'three';

import { scene, camera, renderer, controls, animate, composer, outlinePass } from './renderer.js';
import { setupLights } from './lighting.js';
import { loadModel, loadedModels } from './modelLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { onMouseMove, onMouseClick } from './eventHandler.js';



setupLights(scene);


const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF,
  envMapIntensity: 0.01});

const glowMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#facf9b'),
  emissive: new THREE.Color('#ffd6c1'),
  emissiveIntensity: 5
});


const goldMaterial = new THREE.MeshStandardMaterial({
  color: new THREE.Color('#ffd700'),
  metalness: 0.9,
  roughness: 0.5
});

const stoneMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.1,
  roughness: 0.8
});


loadModel('/models/pamats.glb', stoneMaterial);
loadModel('/models/merkakis.glb', goldMaterial);
loadModel('/models/acis.glb', glowMaterial);


function setupEventHandlers() {
  const sidebar = document.getElementById('sidebar'); // Ensure this element exists in HTML
  window.addEventListener('mousemove', (event) => onMouseMove(event, camera, loadedModels, renderer, outlinePass, sidebar));
  window.addEventListener('click', (event) => onMouseClick(event, camera, controls, loadedModels, outlinePass));
}


document.addEventListener('DOMContentLoaded', setupEventHandlers);


animate();