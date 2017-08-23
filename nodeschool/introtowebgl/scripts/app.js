(function () {
  'use strict'

  var scene = new THREE.Scene()
  var light = new THREE.AmbientLight(0xffffff)
  var renderer
  var camera
  var renderer = new THREE.WebGLRenderer()
  var box
  var childBox
  var loader
  var ground
  var mesh
  var step = 1
  var controls = null

  function initScene () {
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById('webgl-container').appendChild(renderer.domElement)

    scene.add(light)

    camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      1,
      10000
    )
    camera.position.set(0, 0, 200)
    
    scene.add(camera)

    box = new THREE.Mesh(
      new THREE.CubeGeometry(
        20,
        20,
        20),
      new THREE.MeshBasicMaterial({color: 0xFF0000})
    )
    childBox = new THREE.Mesh(
      new THREE.CubeGeometry(20, 20, 20),
      new THREE.MeshBasicMaterial({color: 0x00FF00})
    )
    childBox.rotateY(Math.PI / 4)
    childBox.rotateX(Math.PI / 4)
    box.add(childBox)

    scene.add(box)
    scene.add(childBox)
    box.rotateY(Math.PI / 4)

    requestAnimationFrame(render)
  }

  
  document.addEventListener('mousedown', onDocumentMouseDown, false)
  function onDocumentMouseDown (event) {
    event.preventDefault()
    var projector = new THREE.Projector()
    var vector  = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5)
    projector.unprojectVector(vector, camera)
    var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize())
    var intersects = raycaster.intersectObjects(scene.children, true)
    if (intersects.length > 0) {
      intersects[0].object.material.color.setHex(Math.random() * 0xffffff)
    }
  }

  function render () {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
    box.rotation.x += 0.01
    box.rotation.y += 0.1
    box.position.x += step
    if (box.position.x > 50 || box.position.x < -50) step *= -1
  }

  window.onload = initScene
})()
