import { styled, theme } from '@/styles'

export const BasicBox = styled.div`
  margin-top: ${theme.space.basic};
  &:first-child {
    margin-top: 0;
  }
`
