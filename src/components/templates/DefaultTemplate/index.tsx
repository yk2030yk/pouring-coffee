import React from 'react'

import * as S from './index.styled'

export const DefaultTemplate: React.FC = ({ children }) => (
  <S.Wrapper>
    <S.ContentAreaWrapper>
      <S.ContentArea>{children}</S.ContentArea>
    </S.ContentAreaWrapper>
  </S.Wrapper>
)
