import React from 'react'
import Button from 'terra-button'
import classNames from 'classnames'
import styles from './button.component'

const cx = classNames.bind(styles)
const ButtonOnClick = () => (
  // eslint-disable-next-line no-alert
  <Button
    text='Click Me'
    onClick={() => alert('Ive been clicked!')}
    className={cx('button')}
  />
)
export default ButtonOnClick
