'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function FloatingSphere() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(300, 300)
    containerRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(1, 32, 32)
    const material = new THREE.MeshPhongMaterial({
      color: 0x00fff0,
      wireframe: true,
    })
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(10, 10, 10)
    scene.add(light)

    camera.position.z = 3

    function animate() {
      requestAnimationFrame(animate)
      sphere.rotation.x += 0.01
      sphere.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute top-1/2 right-10 -translate-y-1/2" />
}

