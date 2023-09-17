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
const material1 = new THREE.MeshBasicMaterial({color:"#00ff00"})
const cube = new THREE.Mesh(geometry,material)
const cube1 = new THREE.Mesh(geometry,material1)
scene.add(cube,cube1);

cube1.position.z = -5

const sizes = {
  width : window.innerWidth,
  height : window.innerHeight
}

 const camera = new THREE.PerspectiveCamera(75 ,sizes.width/sizes.height,0.1,100)
 camera.position.z = 4
 scene.add(camera)

/**orthographic camera */
// const aspectRatio = sizes.width/sizes.height
// const camera = new THREE.OrthographicCamera(
//   //left
//   -1 * aspectRatio,
//   //right
//   1 * aspectRatio,
//   //top
//   1,
//   //bottom
//   -1,
//   //near
//   0,1,
//   //far
//   100

// )

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

/** cursor events */
const cursor = {
  x:0,
  y:0
}

/** add the mousemove event listener */
window.addEventListener("mousemove",(event) => {
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = event.clientY / sizes.height - 0.5
})

const animate = () => {

  /**animate 1 */
  // camera.position.x = cursor.x * 10
  // camera.position.y = -cursor.y * 10

  //animate 2 
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
  camera.position.y = cursor.y * 20
  camera.lookAt(cube.position)

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
