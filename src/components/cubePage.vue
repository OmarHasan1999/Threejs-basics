<template>
  <div></div>
</template>
 
<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


export default {
  mounted() {
const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:"#ff0000"})
const cube = new THREE.Mesh(geometry,material)
scene.add(cube);


const sizes = {
  width : window.innerWidth,
  height : window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75 ,sizes.width/sizes.height,0.1,1000)
camera.position.z = 5
scene.add(camera)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)
document.body.appendChild(renderer.domElement);

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


/** use clock class for animate move */
const clock = new THREE.Clock()


const animate = () => {

  const elapsedTime = clock.getElapsedTime()
  /**animation 1 */
  // cube.position.x = elapsedTime
  // cube.position.y = elapsedTime

  /**animation 2 */
  // cube.position.x = Math.sin(elapsedTime) * 2
  // cube.position.y = Math.sin(elapsedTime) * 2

  /**animation 3 */
   cube.position.x = Math.sin(elapsedTime) * 2
   cube.position.y = Math.cos(elapsedTime) * 2

  /**animation 4 */
  // cube.position.x = Math.sin(elapsedTime) * 5
  // cube.position.y = Math.cos(elapsedTime) * 5
  // camera.lookAt(cube.position)

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
