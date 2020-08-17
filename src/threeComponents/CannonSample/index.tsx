import React, { useState, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { useCannon } from '@/recoil/cannon/hooks'
import { RecoilRoot } from 'recoil'
import * as CANNON from 'cannon'
import { styled } from '@/styles'
import { useWorld } from '@/recoil/cannon/hooks'

const Cb = styled.div`
  & > canvas {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 0;
    pointer-events: none;
    overflow: hidden;
  }
`

type Props = {
  position: [number, number, number]
}

const Plane: React.FC<Props> = ({ position }) => {
  // Register plane as a physics body with zero mass
  const ref = useCannon([{ mass: 0 }], (body) => {
    body.addShape(new CANNON.Plane())
    body.position.set(...position)
  })
  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial attach="material" color="#171717" />
    </mesh>
  )
}

export const Box: React.FC<Props> = ({ position }) => {
  const ref = useCannon([{ mass: 100000 }], (body) => {
    body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
    body.position.set(...position)
  })

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" roughness={0.5} color="#575757" />
    </mesh>
  )
}

export const WithWorld = () => {
  useWorld()
  return null
}

export const CannonSample = () => {
  return (
    <Cb>
      <Canvas
        shadowMap
        camera={{ position: [0, 0, 15] }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }}
      >
        <RecoilRoot>
          <WithWorld />
          <pointLight position={[-10, -10, 30]} intensity={0.25} />
          <spotLight
            intensity={0.3}
            position={[30, 30, 50]}
            angle={0.2}
            penumbra={1}
            castShadow
          />
          <Plane position={[0, 0, -10]} />
          <Box position={[1, 0, 1]} />
          <Box position={[2, 1, 5]} />
          <Box position={[0, 0, 6]} />
          <Box position={[-1, 1, 8]} />
          <Box position={[-2, 2, 13]} />
          <Box position={[2, -1, 13]} />
        </RecoilRoot>
      </Canvas>
    </Cb>
  )
}
