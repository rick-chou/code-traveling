import React from 'react'
import Iconfont from '@components/Iconfont'
import styles from './index.module.scss'

const index = () => {

  const fullScreen = ()=>{
    
  }

  return (
    <div>
      <h2>
        Draggable
        <Iconfont iconName="quanping" onClick={fullScreen}/>
      </h2>
    </div>
  )
}

export default index
