import React from 'react'
import Iconfont from '@components/Iconfont'

const index = (props: any) => {
  return (
    <div>
      <h2>
        Affix
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
    </div>
  )
}

export default index
