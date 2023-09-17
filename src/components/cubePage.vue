<template>
  <div></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import gsap from 'gsap'

export default {
  mounted() {
const scene = new THREE.Scene()
const parameter = {
  color: 0x00ff00,
  click: () => {
    gsap.to(cube.rotation, { z: cube.rotation.z + 50, duration:3})
  }
}
const material = new THREE.MeshBasicMaterial({color: parameter.color})
const cube = new THREE.Mesh(
             new THREE.BoxGeometry(1,1,1),
             material
)

scene.add(cube);


const sizes = {
  width : window.innerWidth,
  height : window.innerHeight
}

 const camera = new THREE.PerspectiveCamera(75 ,sizes.width/sizes.height,0.1,100)
 camera.position.z = 5
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

const gui = new dat.GUI()

gui.add(cube.position, "x")
gui.add(cube.position, "y", -5,5,1)
gui.add(cube.position, "z",).min(1).max(7).step(1).name("z axios")
gui.add(cube, "visible")
gui.add(cube.material, "wireframe")

gui.addColor( parameter, "color").onChange(() => {
  material.color.set(parameter.color)
})
gui.add(parameter,"click")



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
