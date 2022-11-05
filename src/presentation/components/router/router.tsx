import { Login } from '@/presentation/pages'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import '@/presentation/styles/globals.scss'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  }
])

const Router = (): JSX.Element => (
    <RouterProvider router={router} />
)

export default Router
