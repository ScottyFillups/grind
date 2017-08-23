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
    camera.lookAt(new THREE.Vector3(-1, 0, -1))
    camera.position.set(2500, 800, 2500)
    
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

    loader = new THREE.JSONLoader()
    loader.load('gooseFull.js', function(geometry) {
      var gooseMaterial = new THREE.MeshLambertMaterial({
        map: THREE.ImageUtils.loadTexture('goose.jpg')
      })
      mesh = new THREE.Mesh(geometry, gooseMaterial)
      mesh.scale.set(1000, 1000, 1000)
      scene.add(mesh)
    })

    scene.add(box)
    scene.add(childBox)
    box.rotateY(Math.PI / 4)

    requestAnimationFrame(render)
  }

  function render () {
    renderer.render(scene, camera)
    requestAnimationFrame(render)
    box.rotation.x += 0.01
    box.rotation.y += 0.1
    box.position.x += step
    mesh.rotation.x += 1
    if (box.position.x > 50 || box.position.x < -50) step *= -1
  }

  window.onload = initScene
})()
