import {
  Footer,
  FormStatus,
  Input,
  LoginHeader as Header
} from '@/presentation/components'
import React, { useState } from 'react'
import Styles from './login-styles.scss'
import Context, {
  FormErrorStateProps,
  FormStateProps,
  ContextProps
} from '@/presentation/contexts/form/form-context'

const Login: React.FC = () => {
  const [state] = useState<FormStateProps>({
    isLoading: false
  })

  const [errorState] = useState<FormErrorStateProps>({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    main: ''
  })

  const ctx: ContextProps = {
    state,
    errorState
  }

  return (
    <Context.Provider value={ctx}>
      <div className={Styles.login}>
        <Header />
        <form action="" className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button
            data-testid="submit"
            type="submit"
            className={Styles.submit}
            disabled
          >
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default Login
