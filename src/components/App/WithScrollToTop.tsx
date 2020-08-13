import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 画面遷移時(pathnameが変更された際)にスクロール位置をトップに戻す
 */
export const WithScrollToTop: React.FC = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}
