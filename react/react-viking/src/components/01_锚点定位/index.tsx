import React, { useState, useEffect, useRef } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

const App = () => {
  const [top, setTop] = useState(0)
  const [activeTab, setActiveTab] = useState(1)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement
      const containerOffsetTop = (containerRef.current as HTMLElement).offsetTop
      const offsetTop1 = (document.querySelector('#one') as HTMLElement).offsetTop + containerOffsetTop
      const offsetTop2 = (document.querySelector('#two') as HTMLElement).offsetTop + containerOffsetTop
      // const offsetTop3 = (document.querySelector('#three') as HTMLElement).offsetTop + containerOffsetTop
      if (scrollTop > containerOffsetTop) {
        setTop(scrollTop - offsetTop1)
      } else {
        setTop(0)
      }
      if (scrollTop > offsetTop1) {
        setActiveTab(2)
      }
      if (scrollTop > offsetTop2) {
        setActiveTab(3)
      }
      if (scrollTop < offsetTop1) {
        setActiveTab(1)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })

  const FloatBox = () => {
    const handleClick = (id: string) => {
      document.querySelector(id)?.scrollIntoView(true)
    }

    return (
      <div className={styles.floatBox} style={{ top }}>
        {['one', 'two', 'three'].map((item, idx) => {
          return (
            <span
              className={classNames({
                [styles.active]: idx + 1 === activeTab,
              })}
              onClick={() => {
                handleClick(`#${item}`)
                setActiveTab(idx + 1)
              }}
              key={idx}
            >
              {item}
            </span>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <header>
        <h1>Scroll</h1>
      </header>
      <div ref={containerRef} className={styles.container}>
        <FloatBox />
        {['one', 'two', 'three'].map((item, idx) => {
          return (
            <div
              className={classNames({
                [styles.box]: true,
              })}
              id={item}
              key={idx}
            >
              {item}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
