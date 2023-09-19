<template>
  <div></div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

import pxIMG from "../assets/Standard-Cube-Map/Standard-Cube-Map/px.png"
import nxIMG from "../assets/Standard-Cube-Map/Standard-Cube-Map/nx.png"
import pyIMG from "../assets/Standard-Cube-Map/Standard-Cube-Map/py.png"
import nyIMG from "../assets/Standard-Cube-Map/Standard-Cube-Map/ny.png"
import pzIMG from "../assets/Standard-Cube-Map/Standard-Cube-Map/pz.png"
import nzIMG from "../assets/Standard-Cube-Map/Standard-Cube-Map/nz.png"
import IMGONE from "../assets/Textures/matcaps/2.png"

export default {

  mounted() {
const scene = new THREE.Scene()

const sizes = {
  width : window.innerWidth,
  height : window.innerHeight
}

 const camera = new THREE.PerspectiveCamera(75 ,sizes.width/sizes.height,0.1,100)
 camera.position.z = 11
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

/** create environment map */
const cubeTextureLoader = new THREE.CubeTextureLoader()
const environmentMap = cubeTextureLoader.load([

   pxIMG,
   nxIMG,
   pyIMG,
   nyIMG,
   pzIMG,
   nzIMG

])

scene.background = environmentMap
scene.environmentMap = environmentMap

/** texture load */
const textureLoad = new THREE.TextureLoader()
const matcapTexture = textureLoad.load(IMGONE)


/** text */
const fontLoader = new FontLoader()
fontLoader.load("../../node_modules/three/examples/fonts/helvetiker_regular.typeface.json", (font) => {
  const textGeometry = new TextGeometry("Omar Hasan\nChess Player\nSyria-Palmyra",{
    font: font,
    size: 1,
    height: 0.8,
    curveSegments: 10,
    bevelEnabled: true,
    bevelThickness: 0.08,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 10
  })
  textGeometry.center()
  const textMaterial = new THREE.MeshMatcapMaterial()
  textMaterial.matcap = matcapTexture 

  const text = new THREE.Mesh(textGeometry,textMaterial)
  scene.add(text)
})



/**points about the text */
const pointsGeometry = new THREE.TetrahedronGeometry()
const pointsMaterial = new THREE.MeshMatcapMaterial()
pointsMaterial.matcap = matcapTexture
const group = new THREE.Group()

for( let i = 0; i < 35; i++){
  const points = new THREE.Mesh(pointsGeometry,pointsMaterial)

  points.position.x = (Math.random() - 0.5) * 10
  points.position.y = (Math.random() - 0.5) * 10
  points.position.z = (Math.random() - 0.5) * 10

  points.rotation.x = Math.random() * Math.PI 
  points.rotation.y = Math.random() * Math.PI 
  points.rotation.z = Math.random() * Math.PI 

  const scaleSize = Math.random()
  points.scale.set(scaleSize,scaleSize,scaleSize)

  group.add(points)

}
scene.add(group)

const clock = new THREE.Clock()


const animate = () => {

  const elapsedTime = clock.getElapsedTime()
  
  group.rotation.x = Math.PI * elapsedTime * 0.01
  group.rotation.y = Math.PI * elapsedTime * 0.01
  group.rotation.z = Math.PI * elapsedTime * 0.01


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
