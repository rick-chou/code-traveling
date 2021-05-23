import React from 'react'
import { BulletChart } from 'bizcharts'
import Iconfont from '@/components/Demo/Iconfont'

const Bullet: React.FC = (props: any) => {
  const data = [
    {
      title: '满意度',
      measures: [83],
      targets: [90],
    },
  ]

  return (
    <>
      <h2>
        BulletChart
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <BulletChart data={data} measureField="measures" rangeField="ranges" targetField="target" rangeMax={100} />
    </>
  )
}

export default Bullet
