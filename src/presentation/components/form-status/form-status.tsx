import React, { useContext } from 'react'
import { Spinner } from '@/presentation/components'
import Styles from './form-status-styles.scss'
import Context, {
  ContextProps
} from '@/presentation/contexts/form/form-context'

const FormStatus = (): JSX.Element => {
  const { state, errorState } = useContext<ContextProps>(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && (
        <span className={Styles.error}>{errorState.main}</span>
      )}
    </div>
  )
}

export default FormStatus
