import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function ThreeDScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(500, 500)
    mountRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = false

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const loader = new GLTFLoader()
    loader.load(
      '/3d-models/laptop.glb',
      (gltf) => {
        const model = gltf.scene
        model.scale.set(0.5, 0.5, 0.5)
        model.rotation.x = Math.PI / 8
        scene.add(model)

        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the 3D model:', error)
      }
    )

    camera.position.z = 2

    const particles = new THREE.BufferGeometry()
    const particleCount = 5000

    const posArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x00fff0,
    })

    const particlesMesh = new THREE.Points(particles, particleMaterial)
    scene.add(particlesMesh)

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      particlesMesh.rotation.y += 0.001
      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      const width = mountRef.current?.clientWidth || 500
      const height = mountRef.current?.clientHeight || 500
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}

