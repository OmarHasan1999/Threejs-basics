There is 4 way to transform objects
- **position** ( to move the object )
- **scale** ( to resize the object )
- **rotation** ( to rotate the object )
- **Quaternion** ( to rotate the object )

The **position** property is not any object , it is an instance of the **vector3 class** , while this class has an x , y , z property
```js
//method1
mesh.position.x = 2;
mesh.position.y = 1;
mesh.position.z = 0;
//or
mesh.position.set(2,1,0);
```

---
- **axes helper**
to add axes helper ( add axes in output)
```js
const axesHelper = new THREE.AxesHelper(length:2);//number of axes
scene.add(axesHelper);
```
```js
console.log(mesh1.position.distanceTo(camera.position));
// distanceTo() : the distance between the cube and the camera
```
```js
console.log(mesh1.position.normalize());
// normalize() : for values of positions x , y , z between (0,1)
```
**scale**
```js
mesh.scale.x = 1.2;
mesh.scale.y = 2;
mesh.scale.z = -1;
```
**rotation**
```js
mesh.rotation.z = Math.PI * 0.25 ;

mesh.rotation.reorder('YZX');
//reorder('') : for reorder the axes x ,y ,z
```
```js
//Group() : for rotation one or more cube in the same time
const group = new THREE.Group();
scene.add(group);

group.rotation.z = Math.PI * 0.12;
group.add(mesh1,mesh2,mesh3);
```

**topics**
- full screen and resize event listener
- environment map  
- orbit control

********************************

> **TYPES OF CAMERAS**
- Camera
- ArrayCamera
- PerspectiveCamera
- StereoCamera
- CubeCamera
- OrthographicCamera
---
- ArrayCamera
**arrayCamera** is used to render your scene multiple times by using multiple cameras

**example** :  split screens games
- StereoCamera

used to render the scene through two cameras that mimic the eyes
**example** : VR headset or red and blue glasses 
- CubeCamera


used to get a render facing each direction
, you can use it to create an environment map for reflection or a shadow map
- OrthographicCamera

elements will have a same size on the screen regardless or their distance from the camera




---
---

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
