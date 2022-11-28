/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Footer,
  FormStatus,
  Input,
  LoginHeader as Header
} from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './signup-styles.scss'

type Props = {
  validation: Validation
}

const SignUp: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    nameError: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      nameError: validation.validate('name', state.name)
    }))
  }, [state.name])

  const ctx = {
    state,
    setState
  }

  return (
    <Context.Provider value={ctx}>
      <div className={Styles.signup}>
        <Header />
        <form action="" className={Styles.form}>
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirme sua senha"
          />
          <button
            disabled
            type="submit"
            data-testid="submit"
            className={Styles.submit}
          >
            Cadastrar
          </button>
          <Link to="/login" className={Styles.link}>
            Voltar para Login
          </Link>
          <FormStatus />
        </form>
        <Footer />
      </div>
    </Context.Provider>
  )
}

export default SignUp
