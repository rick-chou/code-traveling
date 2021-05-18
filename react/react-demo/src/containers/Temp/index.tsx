import React, { ReactElement, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import commonStyles from '@styles/common.module.scss'
import styles from './index.module.scss'

const index = (props: any) => {
  const [isFull, setIsFull] = useState<Array<boolean>>(new Array(React.Children.count(props.children)).fill(props.full ? props.full : false))
  // const dispatch = useDispatch()
  // const fullScreen = useSelector((state) => state.common.fullScreen)

  const toggleFullScreen = (idx: number) => {
    const _isFull = [...isFull]
    _isFull[idx] = !_isFull[idx]
    setIsFull(_isFull)
    // dispatch.common.toggleFullScreen()
  }

  return (
    <div className={styles.container}>
      {React.Children.map(props.children, (child: ReactElement, idx: number) => {
        return (
          <div className={`${commonStyles.container} ${isFull[idx] ? `${commonStyles.fullScreen}` : ''}`} key={idx}>
            {React.cloneElement(child, {
              onClick: () => toggleFullScreen(idx),
            })}
          </div>
        )
      })}
    </div>
  )
}

export default index
