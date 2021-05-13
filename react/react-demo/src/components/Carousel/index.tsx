import React from 'react'
import Iconfont from '@components/Iconfont'
import { Carousel } from 'antd'
import { getArr } from '@/utils/tools'
import styles from './index.module.scss'

const index = (props: any) => {
  const arr = getArr(3)

  const handleAfterChange = (current: number) => {
    console.log('current:', current)
  }

  const handleBeforeChange = (from: number, to: number) => {
    console.log('from:', from, 'to:', to)
  }
  return (
    <div>
      <h2>
        Carousel
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Carousel afterChange={handleAfterChange} beforeChange={handleBeforeChange}>
        {arr.map((item) => {
          return (
            <div key={item}>
              <h3 className={styles.item}>{item}</h3>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default index
