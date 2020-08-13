import { css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { mixins, theme } from '.'

export const globalStyle = css`
  ${emotionNormalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #app,
  #root {
    width: 100%;
  }

  body {
    ${mixins.defaultFont}
    background-color: ${theme.color.white};
  }
`
