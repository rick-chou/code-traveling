import React, { ReactElement } from 'react'
import commonStyles from '@styles/common.module.scss'
import styles from './index.module.scss'

interface IProps {
  onClick?: () => void
}

function tempWrapper(Component: ReactElement) {
  return (
    <div>
      {Component}
    </div>
  )
}

const index = (props: any) => {
  return (
    <div className={styles.container}>
      {props.children.map((child: ReactElement, idx: number) => {
        return (
          <div className={commonStyles.container} key={idx}>
            {/* {child} */}
            {tempWrapper(child)}
          </div>
        )
      })}
    </div>
  )
}

export default index
