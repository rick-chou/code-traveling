import React from 'react'
import Iconfont from '@components/Iconfont'

const index = (props: any) => {
  console.log(props)

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
