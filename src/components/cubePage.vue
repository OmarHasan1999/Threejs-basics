<template>
  <div></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

 import IMG1 from '../assets/Textures/1/color.jpg'
 //import IMG2 from '../assets/Textures/1/disp.png'
 //import IMG3 from '../assets/Textures/1/normal.jpg'
 //import IMG4 from '../assets/Textures/1/occ.jpg'
 //import IMG6 from '../assets/Textures/1/rough.jpg'
 import IMG5 from '../assets/Textures/matcaps/5.png'
 //import IMG7 from '../assets/Textures/gradients/5.jpg'

export default {
  mounted() {
const scene = new THREE.Scene()

/** texture Load */
const textureLoad = new THREE.TextureLoader()
const newColor = textureLoad.load(IMG1)
//const dispColor = textureLoad.load(IMG2)
//const normalsColor = textureLoad.load(IMG3)
//const aoColor = textureLoad.load(IMG4)
//const roughnessColor = textureLoad.load(IMG6)
const matcapColor = textureLoad.load(IMG5)
//const gradientColor = textureLoad.load(IMG7)
// newColor.repeat.x = 2;
// newColor.repeat.y = 2;
// newColor.wrapS = THREE.MirroredRepeatWrapping
// newColor.wrapT = THREE.MirroredRepeatWrapping
//newColor.offset.x = 0.5
//newColor.offset.y = 0.5

// newColor.rotation = Math.PI * 0.2;
// newColor.center.x = 0.5
// newColor.center.y = 0.5


// cube
const cubeGeometry = new THREE.BoxGeometry( 4,4,4, 512,512)
const material = new THREE.MeshMatcapMaterial()
material.matcap = matcapColor
//material.gradientMap = gradientColor

//material.map = newColor
//material.displacementMap = dispColor
//material.displacementScale = 0.5

//material.normalMap = normalsColor
//material.aoMap = aoColor
//material.aoMapIntensity = 0.5

//material.roughnessMap = roughnessColor
//material.roughness = 0.5
//material.color = new THREE.Color('#ff0000')

const cube = new THREE.Mesh(cubeGeometry,material)

scene.add(cube)

//sphere
const sphereGeometry = new THREE.SphereGeometry(2)
const sphere = new THREE.Mesh(sphereGeometry,material)
sphere.position.x = 10
scene.add(sphere)

//torus
const torusGeometry = new THREE.TorusGeometry(2,0.4, 512,512)
const torusMaterial = new THREE.MeshBasicMaterial()
torusMaterial.map = newColor
//torusMaterial.transparent = true
//torusMaterial.opacity = 0.5
//torusMaterial.color = new THREE.Color('#00ff00')
const torus = new THREE.Mesh(torusGeometry,torusMaterial)
torus.position.x = -10
scene.add(torus)


const sizes = {
  width : window.innerWidth,
  height : window.innerHeight
}

 const camera = new THREE.PerspectiveCamera(75 ,sizes.width/sizes.height,0.1,100)
 camera.position.z = 10
 scene.add(camera)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)
document.body.appendChild(renderer.domElement);

/**add orbit controls */
const controls = new OrbitControls(camera,renderer.domElement)
controls.enableDamping = true

/** full screen and resize event listener */
window.addEventListener("resize",() => {
  /**sizes update */
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  /**camera update */
  camera.aspect = sizes.width/sizes.height
  camera.updateProjectionMatrix()
  /**renderer update */
  renderer.setSize(sizes.width,sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/** LIGHTS */
// const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
// scene.add(ambientLight)
// const pointLight = new THREE.PointLight('ffffff', 0.5)
// pointLight.x = 2
// pointLight.y = 3
// pointLight.z = 4
// scene.add(pointLight)

const clock = new THREE.Clock()


const animate = () => {

  const elapsedTime = clock.getElapsedTime()

  cube.rotation.x = elapsedTime * 0.15
  cube.rotation.y = elapsedTime * 0.1
  sphere.rotation.x = elapsedTime * 0.15
  sphere.rotation.y = elapsedTime * 0.1
  torus.rotation.x = elapsedTime * 0.15
  torus.rotation.y = elapsedTime * 0.1

  //enable dumbing
  controls.update()

  window.requestAnimationFrame(animate)
  renderer.render(scene,camera)
}
animate()


  },


}
</script>

<style>

</style>
