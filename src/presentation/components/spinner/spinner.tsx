/* eslint-disable react/prop-types */
import React from 'react'
import Styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

const Spinner = (props: Props): JSX.Element => (
  <div {...props} className={[Styles.spinner, props.className].join(' ')}>
    <div /> <div /> <div /> <div />
  </div>
)

export default Spinner
