/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context, {
  ContextProps
} from '@/presentation/contexts/form/form-context'

type Props = React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>

const Input = (props: Props): JSX.Element => {
  const values = useContext<ContextProps>(Context)
  const error = values.errorState[props.name] as string

  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getTitle = (): string => {
    return error
  }

  const getStatus = (): string => {
    return '🔴'
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
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
