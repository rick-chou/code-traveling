import React, { useEffect } from 'react'
import 'https://gitee.com/LuckyChou/ReStart-FE/raw/main/assets/icon/iconfont.css'

interface IProps {
  iconName: string
  onClick?: () => void
}

const index = (props: IProps) => {
  return <i onClick={props.onClick} className={`icon-${props.iconName}`} />
}

export default index
