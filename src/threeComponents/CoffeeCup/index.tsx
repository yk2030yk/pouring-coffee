import React, { useRef, useState } from 'react'
import { useFrame } from 'react-three-fiber'

type Props = {
  color: string
}

export const Box: React.FC<Props> = ({ color }) => {
  const mesh = useRef()

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}
