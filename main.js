import * as THREE from "three";

import {
    loadSave,
    completeLevel,
    completeDifficulty,
    isHardcoreUnlocked
} from "./save.js";

const saveData = loadSave();

console.log("Save Loaded:", saveData);

const canvas = document.getElementById("game");

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 1.7, 5);

const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

const light = new THREE.PointLight(
    0xffffff,
    10
);

light.position.set(0, 5, 0);

scene.add(light);

const cell = new THREE.Mesh(
    new THREE.BoxGeometry(8, 5, 8),
    new THREE.MeshStandardMaterial({
        color: 0x333333,
        side: THREE.BackSide
    })
);

scene.add(cell);

const hardcoreButton =
    document.getElementById("hardcoreBtn");

if (isHardcoreUnlocked()) {
    hardcoreButton.disabled = false;
    hardcoreButton.textContent = "Hardcore";
}

window.devUnlockHardcore = () => {
    completeDifficulty("normal");

    location.reload();
};

window.devCompleteLevel1 = () => {
    completeLevel(1);

    location.reload();
};

function animate() {
    requestAnimationFrame(animate);

    renderer.render(
        scene,
        camera
    );
}

animate();

window.addEventListener(
    "resize",
    () => {
        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);
