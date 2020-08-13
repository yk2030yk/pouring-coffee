import React from 'react'
import { Switch } from 'react-router-dom'

import * as pageRoutes from './pageRoutes'
import { AppRoute } from './AppRoute'
import { ROUTE_TYPE } from './routeConfig'
import { CoffeeActApplicationError } from '@/errors'

export const Routes: React.FC = () => {
  return (
    <Switch>
      {Object.values(pageRoutes).map((routeConfig) => {
        switch (routeConfig.routeType) {
          case ROUTE_TYPE.STANDARD:
            return <AppRoute {...routeConfig} />
          default:
            throw new CoffeeActApplicationError(
              `Not Match RouteType(${routeConfig})`
            )
        }
      })}
    </Switch>
  )
}
