import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import { theme } from '@/styles'

/**
 * emotion-themingのthemeを利用する
 */
export const WithEmotionTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
