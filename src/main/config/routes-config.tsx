import { createBrowserRouter, RouterProviderProps } from 'react-router-dom'

type Props = {
  LoginComponent: JSX.Element
  SignUpComponent: JSX.Element
}

export const routesConfig = ({
  LoginComponent,
  SignUpComponent
}: Props): RouterProviderProps['router'] =>
  createBrowserRouter([
    {
      path: '/login',
      element: LoginComponent
    },
    {
      path: '/signup',
      element: SignUpComponent
    }
  ])
