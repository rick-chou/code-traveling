import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

interface IConfig {
  id: string
  title: string
}

const Anchor = (props: { config: Array<IConfig> }) => {
  const { config } = props
  // 距离顶部的距离
  const [top, setTop] = useState(0)
  // 默认激活第一个tab
  const [activeTab, setActiveTab] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const _offset: Array<number> = []
      const { scrollTop } = document.documentElement
      const parentOffset = (document.getElementById(config[0].id)?.offsetParent as HTMLElement).offsetTop
      config.forEach((item: IConfig) => {
        _offset.push(document.getElementById(item.id)!.offsetTop + parentOffset)
      })
      if (scrollTop > parentOffset) {
        setTop(scrollTop - _offset[0])
      } else {
        setTop(0)
      }
      _offset.forEach((item, idx) => {
        if (scrollTop > _offset[idx]) {
          setActiveTab(idx + 2)
        }
        if (scrollTop < _offset[0]) {
          setActiveTab(1)
        }
      })
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const handleTabClick = (id: string, idx: number) => {
    setActiveTab(idx + 1)
    document.getElementById(id)?.scrollIntoView(true)
  }

  return (
    <ul className={styles.anchor} style={{ top }}>
      {config.map((item: IConfig, idx: number) => {
        return (
          <li key={item.id} className={idx + 1 === activeTab ? styles.active : ''} onClick={() => handleTabClick(item.id, idx)}>
            {item.title}
          </li>
        )
      })}
    </ul>
  )
}

export default Anchor
