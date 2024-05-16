import * as THREE from 'three';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedObject = null;

let targetPosition = new THREE.Vector3();
let isTransitioning = false;


export function onMouseMove(event, camera, loadedModels, renderer, outlinePass, sidebar) {
    if (!sidebar) return;
    const sidebarRect = sidebar.getBoundingClientRect();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log("camera", camera.position)

    if (event.clientX >= sidebarRect.left && event.clientX <= sidebarRect.right &&
        event.clientY >= sidebarRect.top && event.clientY <= sidebarRect.bottom) {
        if (outlinePass) outlinePass.selectedObjects = [];
        renderer.domElement.style.cursor = 'auto';
        return;
    }

    const interactableObjects = loadedModels.filter(model => {
        const name = model.name.toLowerCase();
        return !(name.includes('pamats') || name.includes('acis'));
    }).flatMap(model => model.children);

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactableObjects, true);
    if (intersects.length > 0) {
        if (outlinePass) outlinePass.selectedObjects = [intersects[0].object];
        renderer.domElement.style.cursor = 'pointer';
    } else {
        if (outlinePass) outlinePass.selectedObjects = [];
        renderer.domElement.style.cursor = 'auto';
    }
}

export function onMouseClick(event, camera, controls, loadedModels, outlinePass) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const clickableObjects = loadedModels.filter(model => {
        const name = model.name.toLowerCase();
        return !(name.includes('pamats') || name.includes('acis'));
    }).flatMap(model => model.children);

    const intersects = raycaster.intersectObjects(clickableObjects, true);
    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        selectedObject = clickedObject;
        targetPosition.set(clickedObject.position.x, clickedObject.position.y, clickedObject.position.z);
        isTransitioning = true;  // Start transitioning
        updateSidebarContent(clickedObject.name);
    } else {
        closeSidebar();
    }
}

export function updateSidebarContent(modelName) {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.right = '0';
    let content = '';


    switch (modelName){
        case 'Merkakis':{
        content = `
        <div id="sidebar-right">
            <h1>Mērkaķis</h1>
            <p>Šis ir mērkaķa apraksts.</p>
        </div>
        `;
        break;
    }


    default: {
        content = `<button id='closeButton'>></button> <div id="sidebar-right"><h2>${modelName}</h2><p>Description of ${modelName}.</p></div>`;
        break;
    }
    }
    sidebar.innerHTML =  content;
    attachCloseButtonListener();
}


export function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.right = '-900px';
    selectedObject = null;
    targetPosition.set(0, 0, 0);
    isTransitioning = true;  // Start transitioning
}

function attachCloseButtonListener() {
    const closeButton = document.getElementById('closeButton');
    if (closeButton) {
        closeButton.removeEventListener('click', closeSidebar);
        closeButton.addEventListener('click', closeSidebar);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.addEventListener('click', (event) => event.stopPropagation());
    }
});

export function updateControlsTarget(controls) {
    if (!isTransitioning) return;

    controls.target.lerp(targetPosition, 0.1);
    controls.update();

    if (controls.target.distanceTo(targetPosition) < 0.1) {
        isTransitioning = false;
        controls.target.copy(targetPosition);
    }
}
