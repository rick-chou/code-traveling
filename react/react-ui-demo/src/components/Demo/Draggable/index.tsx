import React from 'react'
import Iconfont from '@/components/Demo/Iconfont'

const index = (props: any) => {
  return (
    <div>
      <h2>
        Draggable
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
    </div>
  )
}

export default index
