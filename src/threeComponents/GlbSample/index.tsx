import React, { Suspense, useState } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// @ts-ignore
import model from '../../glt/cuo2.glb'

function Duck() {
  const gltf = useLoader(GLTFLoader, model)
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        transparent
        opacity={0.5}
        color="#f00"
      />
    </mesh>
  )
}

function App() {
  const [clicked, set] = useState(false)
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        <Suspense fallback={<Box />}>{clicked && <Duck />}</Suspense>
      </Canvas>
      {!clicked && (
        <button onClick={() => set(true)}>Load duck w/ 1s delay</button>
      )}
    </>
  )
}

export default App
