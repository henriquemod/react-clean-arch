import { Login } from '@/presentation/pages'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

export const routesConfig = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  }
])
