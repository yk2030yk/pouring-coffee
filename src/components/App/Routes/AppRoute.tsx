import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

type Props = {
  component: React.FC
} & RouteProps

export const AppRoute: React.FC<Props> = ({
  component: Component,
  ...props
}) => (
  <Route {...props}>
    <Component />
  </Route>
)
