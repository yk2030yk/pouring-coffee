import React from 'react'

import * as S from './index.styled'
import { DefaultTemplate } from '@/components/templates/DefaultTemplate'
import { ThreeRenderBox } from '@/components/organisms/ThreeRenderBox'
import { CannonSample } from '@/threeComponents/CannonSample'
import GlbSample from '@/threeComponents/GlbSample'

export const HomePage: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <div>
          <CannonSample />
        </div>
        <div>
          <GlbSample />
        </div>
      </S.Wrapper>
    </DefaultTemplate>
  )
}
