import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from './renderer.js';


let loadedModels = [];

export function loadModel(path, material) {
    const loader = new GLTFLoader();
    loader.load(path, function  (gltf) {
        const modelName = path.split('/').pop().split('.')[0];
        console.log(modelName);
        gltf.scene.name = modelName;
        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material = material;
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        scene.add(gltf.scene);
        loadedModels.push(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });
}

export { loadedModels };