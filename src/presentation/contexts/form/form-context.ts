import { createContext } from 'react'

export type FormErrorStateProps = {
  email: string
  password: string
  main: string
}

export type FormStateProps = {
  isLoading: boolean
}

export interface ContextProps {
  state: FormStateProps
  errorState: FormErrorStateProps
}

export default createContext(null)
