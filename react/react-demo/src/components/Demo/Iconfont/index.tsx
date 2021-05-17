import React, { useEffect } from 'react'
import '@assets/icon/iconfont.css'

interface IProps {
  iconName: string
  className?: string
  onClick?: () => void
}

const index = (props: IProps) => {
  return <i onClick={props.onClick} className={`icon-${props.iconName} iconfont ${props.className}`} />
}

export default index
