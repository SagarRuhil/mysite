'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface ThreeDModelProps {
  modelPath: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}

export default function ThreeDModel({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ThreeDModelProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(300, 300)
    mountRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    let model: THREE.Object3D | null = null

    const loader = new GLTFLoader()
    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene
        model.scale.set(scale, scale, scale)
        model.position.set(...position)
        model.rotation.set(...rotation)
        scene.add(model)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
      },
      (error) => {
        console.error('An error occurred loading the 3D model:', error)
      }
    )

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      // Stop any ongoing animations
      renderer.setAnimationLoop(null)

      // Dispose of the scene objects
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (object.material instanceof THREE.Material) {
            object.material.dispose()
          } else if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose())
          }
        }
      })

      // Dispose of the renderer
      renderer.dispose()

      // Remove the canvas element
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [modelPath, scale, position, rotation])

  return <div ref={mountRef} className="w-[300px] h-[300px]" />
}

