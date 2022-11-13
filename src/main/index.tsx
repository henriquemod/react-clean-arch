import React from 'react'
import ReactDOM from 'react-dom'
import Router from '@/presentation/components/router/router'
import '@/presentation/styles/globals.scss'
import { routesConfig } from './config/routes-config'
import { RouterProviderProps } from 'react-router-dom'
import { makeLogin } from './factories/pages/login/login-factory'

const routes: RouterProviderProps['router'] = routesConfig({
  LoginComponent: makeLogin()
})

ReactDOM.render(<Router routes={routes} />, document.getElementById('main'))
