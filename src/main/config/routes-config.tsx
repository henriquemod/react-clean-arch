import { createBrowserRouter, RouterProviderProps } from 'react-router-dom'

type Props = {
  LoginComponent: JSX.Element
}

export const routesConfig = ({
  LoginComponent
}: Props): RouterProviderProps['router'] =>
  createBrowserRouter([
    {
      path: '/login',
      element: LoginComponent
    }
  ])
