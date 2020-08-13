import { styled, theme } from '@/styles'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const ContentAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: ${theme.space.basic};
`

export const ContentArea = styled.div`
  width: 1000px;
  height: 100%;
`
