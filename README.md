# Three.js + Vite pamācība
Vite ir vietējais izstrādes serveris.

## Saturs
1. [Priekšnosacījumi](#priekšnosacījumi)
2. [Projekta izveide ar Vite](#projekta-izveide-ar-vite)
3. [Projekta palaišana](#projekta-palaišana)
4. [Projekts ar 3D modeli](#projekts-ar-3d-modeli)
5. [Atsuaces](#atsauces)

## Priekšnosacījumi
Lai sekoto šajai pāmācībai pārliecinaties ka Jums ir:
- Datorā instalēts [Node.js](https://nodejs.org/).
- Datorā instalēts [Visual Studio Code](https://code.visualstudio.com), vai kāda cita izstrādes vide.
- Dātorā instalēts [Blender](https://www.blender.org).

## Projekta izveide ar Vite
Lai iesāktu, Visual Studio Code logā atveriet jaunu termināli.
![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/a5c6c7d0-c2e1-4bd4-811b-0f8552e95971)


1. ### Projekta mapes izveide
```bash
mkdir threejs-vite-pamaciba
cd threejs-vite-pamaciba
```
2. ### Vite projekta izveide
```bash
npm create vite@latest .
```
![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/089b5239-8bc9-4ba7-a879-5d9ae8249a87)

Framework izvēlnē: `Vanilla`

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/3e2646a8-c485-4243-804c-82549f20d361)

Variant izvēlnē: `Javascript`

3. ### Three.js instalācija

Instalējiet nepieciešamās pakotnes.
```bash
npm install
```
```bash
npm install three
```

4. ### Projekta struktūra
Atveriet savu izveidoto projekta mapi caur Visual Studio Code

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/687d6c70-7b91-4163-9f0a-d8c5d6bd05e0)

Jūsū izveidotajam projektam vajadzētu sekot šajai struktūrai.

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/de7ea71c-e576-4696-a6ba-0af136200b96)

Ja projekts izveidots pareizi
index.html saturēs šo template kodu:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```
## Projekta palaišana
Lai palaistu savu Three.js projektu termināli ievadiet: 
```bash
npm run dev
```
Kad palaista šī komanda Jums izvadīts localhost links kurā varat apskatīt savu projektu.

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/ead0dc11-a655-4175-9ea8-69d26328be89)

# Projekts ar 3D modeli
Tagad izveidosim nelielu projektu, kurā būs aina ar importētu 3D modeli centrā.
## Projekta saturs
1. [Modeļa izveide](#modeļa-izveide)
2. [Ainas/Modeļa eksportēšana](#ainas/modeļa-eksportēšana)
3. [Projekta sagatavošana](#projekta-sagatavošana)
4. [Projekta izveide](#projekta-izveide)

## Modeļa izveide
Lai sāktu, atveriet Blender <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png" width="19" height="16" />.

Projekta tipa izvēlne:  `General`

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/1552f502-c12b-492f-9c5f-67460cc3b6f1)

Ainā redzēsiet kubu, kameru un gaismas avotu:

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/8c7f28cd-8e54-45b4-b57b-3ae32bdabbc6)

### Tiksim vaļā no visiem objektiem ainā.

Taustiņš: `A`, lai atlasītu visus ainas objektus.

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/793f9640-0303-4673-8c05-05da61bf6ffb)

Taustiņš: `Del`, lai izdzēstu atlasītos objektus.

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/cc9e48f6-e363-4f38-8d2b-80ce00f4550c)


### Objekta ievietošana Blender ainā
Pievienojiet ainai mērkaķa modeli.
`Add > Mesh > Monkey`

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/539ef149-17db-46f9-8ed8-30e57ce01f87)

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/f023754b-a48e-4079-9bc2-8ae04381bd28)

Šoreiz modeli ainu vai modeli nekā nerediģēsim

# Ainas/Modeļa eksportēšana
Eksportējiet ainu.
`File > Export > glTF 2.0(.glb/.gltf)`

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/e7694320-24ac-4664-a286-b85bdbd7a7e5)

Eksportēšanas logā norādiet Path uz jūsu projektu:

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/9258e108-b968-4f71-bafa-47bba108b6b1)

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/846afbb9-90f8-419e-85a6-7e7d12dec4b1)

Nosauciet savu modeli kā velaties un nospiediet `Export glTF 2.0`

### Papildus informācija
`.glb` faila paplašinājums satur informāciju par modeli, tā atrašanās vietu ainā u.c.

Situācija kur Jūsu ainā ir vairāki objekti bet vēlaties eksportēt tikai atlasītos objektus Jūs eksportēšanas loga labajā pusē atzīmētu `Selected Objects`.

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/e5532cff-423d-4572-9248-3887176f3003)

# Projekta sagatavošana
Atpakaļ Visual Studio Code jāveic pāris soļi, lai projektu sagatavotu ainas izveidei:

1. `index.html` aizietojiet template kodu ar šo:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Piemērs</title>
</head>
<body style="margin: 0; overflow: hidden">
    <script type="module" src="main.js"></script>
</body>
</html>

```
Tiek noņemts liekais kods un body elementam piešķirts `margin: 0` un `overflow: hidden` .

2. `main.js` un `style.css` izdzēsiet visu template kodu.
3. Izdzēsiet liekos failus: `counter.js`, `javascript.svg` un mapi `public`.

Projekta struktūra pēc pārmaiņām:

![image](https://github.com/zieduvija/threejs-tutorial/assets/118617121/83c71594-bec0-49c6-ab1f-5c242b98312a)

# Projekta izveide

Iekš `main.js` piesastiet `THREE`, `GLTFLoader` un `OrbitControls`:
```javascript
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
```

## Ainas iestatīšana
Izveidojiet jaunu ainu un uzstādiet tās fona krāsu.
```javascript
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x202020);
```
## Kameras iestatīšana
Izveidojiet jaunu kamera un norādiet tās pozīciju(`x, y, z`).
```javascript
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0.5, 5);
```
## Atveidotāja iestatīšana
Izveidojiet jaunu atveidotāju, jeb `renderer`, pieškiriet tam izmēru, `setPixelRatio` nodrošina, ka displeja kvalitāte ir optimizēta un ieveitojiet to `body` elementā. 
```javascript
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);
```

## Kontroļu iestatīšana
Izveidojiet jaunu mainīgo `controls` kurš satur `OrbitControls`. Šis dos iespēju Jums ar peles vilcieniem mainīt kameras pozīciju.
```javascript
const controls = new OrbitControls(camera, renderer.domElement);
```

## Modeļu ielāde ar materiālu
Definējiet jaunu materiālu, šajā gadījumā `THREE.MeshBasicMaterial` (`color`, `emissive`, `emissiveIntensity`), kas ļauj materiālam arī izdalīt gaismu. Iestatiet krāsu, izdales krāsu un izdales stiprumu.
```javascript
const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    emissive: 0x2222ff,
    emissiveIntensity: 1
});
```

Izveidojiet modeļa ielādētāju un ielādējiet modeli ar Jūsu doto nosaukumu, manā gadījumā `merkakis.glb`.
```javascript
const loader = new GLTFLoader();
loader.load(
    'merkakis.glb',
    function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material = material;
            }
        });
        scene.add(gltf.scene);
    },
    function (error) {
        console.error('Kļūda modeļa ielādē:', error);
    }
);
```

## Apgaismojuma iestatīšana
Izveidojiet divus gaismas avotus `ambientLight` un `directionalLight`. Abi gaismu veidi kā parametrus pieņem (`krāsa`, `stiprums`).<br>
`ambientLight` strādā kā apkārtējā gaisma, visai ainai uzstādot vienādu gaismas līmeni.<br>
`directionalLight` strādā kā saule, virzot gaismu no pozīcijas(`x, y, z`) uz ainas centru.
```javascript
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 0, 4);
scene.add(directionalLight);
```

## Animētāja iestatīšana
Izveidojiet animācijas funkciju kura izsauc `requestAnimationFrame(animate)` un `renderer.render(scene, camera)`.
<br>Pēc funkcijas izveides to izsauciet.
```javascript
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
```

## Loga izmēra maiņas gadījuma iestatīšana
Izmēru maiņas notikumu klausītājs pielāgo kameras proporcijas un atjaunina projekcijas matricu ikreiz, kad mainās loga lielums, saglabājot pareizu perspektīvu. Tas arī maina atveidotāja lielumu, lai aizpildītu jaunās loga dimensijas.
```javascript
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

```







