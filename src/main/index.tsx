import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import '@/presentation/styles/globals.scss'
import { routesConfig } from './config/routes-config'

ReactDOM.render(<Router routes={routesConfig} />, document.getElementById('main'))
