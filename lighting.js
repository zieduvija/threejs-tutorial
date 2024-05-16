import * as THREE from 'three';

export const ambientLight = new THREE.AmbientLight(new THREE.Color('#fff'), 1);
export const hemiLight = new THREE.HemisphereLight(new THREE.Color('#9ce2ff'), new THREE.Color('#a486ff'), 0);


export const directionalLight = new THREE.DirectionalLight(new THREE.Color('#fff'), 2);
directionalLight.position.set(-3, 6, 6);
directionalLight.castShadow = true;

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);

export const directionalLight2 = new THREE.DirectionalLight(new THREE.Color('#fff'), 1);
directionalLight2.position.set(15, 5, -35);
directionalLight2.castShadow = true;

const directionalLightHelper2 = new THREE.DirectionalLightHelper(directionalLight2, 5);


export const rectLight = new THREE.RectAreaLight(new THREE.Color('#fff'), 6, 6, 6);
rectLight.position.set(0, 10, 0);
rectLight.lookAt(0, 0, 0);


export const pointLight = new THREE.PointLight(new THREE.Color('#fff'), 2);
pointLight.position.set(0, 3, 0);
pointLight.castShadow = true;


const pointLightHelper = new THREE.PointLightHelper(pointLight, 5);






export function setupLights(scene) {
    scene.add(ambientLight);
    scene.add(hemiLight);

    scene.add(directionalLight);
    // scene.add(directionalLightHelper);

    scene.add(directionalLight2);
    // scene.add(directionalLightHelper2);

    scene.add(rectLight);

    scene.add(pointLight);
    // scene.add(pointLightHelper);
    
}

