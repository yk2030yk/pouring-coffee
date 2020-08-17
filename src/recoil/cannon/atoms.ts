import * as CANNON from 'cannon'
import { atom } from 'recoil'

const defaultWorld = () => {
  const world = new CANNON.World()
  world.gravity.set(0, -9.82, 0)
  world.broadphase = new CANNON.NaiveBroadphase()
  world.solver.iterations = 5
  return world
}

export const worldState = atom({
  key: 'worldState',
  default: defaultWorld(),
})
