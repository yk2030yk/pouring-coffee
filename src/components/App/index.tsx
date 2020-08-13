import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { WithScrollToTop } from './WithScrollToTop'
import { WithErrorBoundary } from './WithErrorBoundary'
import { WithGlobalStyle } from './WithGlobalStyle'
import { WithEmotionTheme } from './WithEmotionTheme'
import { WithRecoil } from './WithRecoil'
import { Routes } from './Routes'

export const App: React.FC = () => (
  <WithRecoil>
    <WithEmotionTheme>
      <WithGlobalStyle>
        <BrowserRouter>
          <WithErrorBoundary>
            <WithScrollToTop>
              <Routes />{' '}
            </WithScrollToTop>
          </WithErrorBoundary>
        </BrowserRouter>
      </WithGlobalStyle>
    </WithEmotionTheme>
  </WithRecoil>
)
