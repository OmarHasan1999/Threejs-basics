<template>
  <div></div>
</template>
 
<script>
import * as THREE from 'three';


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

const animate = () => {

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  window.requestAnimationFrame(animate)
  renderer.render(scene,camera)
}
animate()


  },
  
 
}
</script>

<style>

</style>
