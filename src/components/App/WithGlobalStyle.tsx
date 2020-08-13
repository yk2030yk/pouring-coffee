import React from 'react'
import { Global } from '@emotion/core'

import { globalStyle } from '@/styles/globalStyle'

/**
 * GlobalStyleを使用する
 */
export const WithGlobalStyle: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={globalStyle} />
      {children}
    </>
  )
}
