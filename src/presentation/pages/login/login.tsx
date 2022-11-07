/* eslint-disable @typescript-eslint/no-misused-promises */
import { Authentication } from '@/domain/usecases'
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader as Header
} from '@/presentation/components'
import Context, {
  FormStateProps,
  IFormContext
} from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './login-styles.scss'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState<FormStateProps>({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    }))
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState((prev) => ({
        ...prev,
        isLoading: true
      }))
      const account = await authentication.auth({ email: state.email, password: state.password })
      localStorage.setItem('accessToken', account.accessToken)
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        mainError: error.message
      }))
    }
  }

  const ctx: IFormContext = {
    state,
    setState
  }

  return (
    <Context.Provider value={ctx}>
      <div className={Styles.login}>
        <Header />
        <form data-testid="form" action="" className={Styles.form} onSubmit={handleSubmit}>
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
            disabled={!!state.emailError || !!state.passwordError}
          >
            Entrar
          </button>
          <Link to="/signup" data-testid="signup" className={Styles.link}>Criar conta</Link>
          <FormStatus />
        </form>
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default Login
