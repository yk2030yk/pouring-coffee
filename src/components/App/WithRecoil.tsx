import React from 'react'
import { RecoilRoot } from 'recoil'

export const WithRecoil: React.FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}
