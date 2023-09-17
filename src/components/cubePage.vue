<template>
  <div></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


export default {
  mounted() {
const scene = new THREE.Scene()
const geometry = new THREE.BufferGeometry()
const count = 50
const positions = new Float32Array(count * 9)

for( let i = 0; i < count * 9; i++){
  positions[i] = (Math.random() - 0.5 ) * 4
}

const positionsAttribute = new THREE.BufferAttribute(positions,3)
geometry.setAttribute("position",positionsAttribute)

const material = new THREE.MeshBasicMaterial({color:"#ff0000",wireframe: true})
const cube = new THREE.Mesh(geometry,material)

scene.add(cube);

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




const animate = () => {

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
