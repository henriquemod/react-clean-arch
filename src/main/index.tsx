import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/presentation/components/router/router'
import '@/presentation/styles/globals.scss'
import { routesConfig } from './config/routes-config'
import { RouterProviderProps } from 'react-router-dom'
import { makeLogin } from './factories/pages/login/login-factory'
import { SignUp } from '@/presentation/pages'

const routes: RouterProviderProps['router'] = routesConfig({
  LoginComponent: makeLogin(),
  SignUpComponent: <SignUp />
})

ReactDOM.render(<Router routes={routes} />, document.getElementById('main'))
