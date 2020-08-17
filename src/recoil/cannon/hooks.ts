import * as CANNON from 'cannon'
import { useEffect, useState, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { useFrame } from 'react-three-fiber'
import { worldState } from './atoms'

export const useWorld = () => {
  const world = useRecoilValue(worldState)
  useFrame(() => world.step(1 / 60))
}

export const useCannon = (
  bodyPayload: ConstructorParameters<typeof CANNON.Body>,
  setUpBody: (body: CANNON.Body) => void
) => {
  const ref = useRef<any>()
  const world = useRecoilValue(worldState)
  const [body] = useState(() => new CANNON.Body(...bodyPayload))

  useEffect(() => {
    setUpBody(body)
    world.addBody(body)
    return () => world.remove(body)
  }, [setUpBody, body, world])

  useFrame(() => {
    if (ref.current) {
      ref.current.position.copy(body.position)
      ref.current.quaternion.copy(body.quaternion)
    }
  })

  return ref
}
