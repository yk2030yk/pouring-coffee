import React from 'react'

import * as S from './index.styled'
import { DefaultTemplate } from '@/components/templates/DefaultTemplate'
import { ThreeRenderBox } from '@/components/organisms/ThreeRenderBox'

export const HomePage: React.FC = () => {
  return (
    <DefaultTemplate>
      <S.Wrapper>
        <ThreeRenderBox />
      </S.Wrapper>
    </DefaultTemplate>
  )
}
