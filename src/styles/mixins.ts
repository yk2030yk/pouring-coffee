import { css } from '@emotion/core'

import theme from './theme'

/**
 * デフォルト値
 */
export const defaultFont = css`
  font-family: ${theme.fontFamily.default};
  font-size: ${theme.fontSize.default};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.color.indianInk};
  letter-spacing: 1px;
`
