import React, { memo } from 'react'
import { Logo } from '../logo'
import Styles from './login-header-styles.scss'

const LoginHeader = (): JSX.Element => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Dev - Enquetes para Programadores</h1>
  </header>
)

export default memo(LoginHeader)
