/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context, { IFormContext } from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>

const Input = (props: Props): JSX.Element => {
  const { state, setState } = useContext<IFormContext>(Context)
  const error = state[`${props.name}Error`] as string

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const getTitle = (): string => {
    return error || 'Tudo certo!'
  }

  const getStatus = (): string => {
    return error ? '🔴' : '🟢'
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} data-testid={props.name} readOnly onFocus={enableInput} onChange={handleChange} />
      <span
        data-testid={`${props.name}-status`}
        title={getTitle()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  )
}

export default Input
