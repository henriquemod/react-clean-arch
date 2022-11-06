import { createContext } from 'react'

export type FormStateProps = {
  isLoading: boolean
  email: string
  password: string
  emailError: string
  passwordError: string
  mainError: string
}

export interface IFormContext {
  state: FormStateProps
  setState: React.Dispatch<React.SetStateAction<FormStateProps>>
}

export default createContext(null)
