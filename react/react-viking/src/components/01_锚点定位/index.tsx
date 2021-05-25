import React from 'react'
import styles from './index.module.scss'

const index = () => {
  return (
    <div>
      <div className={styles.box}>成绩概览</div>
      <div className={styles.box}>批次分布</div>
      <div className={styles.box}>成绩分布</div>
    </div>
  )
}

export default index
