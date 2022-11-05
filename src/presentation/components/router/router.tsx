import React from 'react'
import {
  RouterProvider,
  RouterProviderProps
} from 'react-router-dom'

type Props = {
  routes: RouterProviderProps['router']
}

const Router = (props: Props): JSX.Element => (
    <RouterProvider router={props.routes} />
)

export default Router
