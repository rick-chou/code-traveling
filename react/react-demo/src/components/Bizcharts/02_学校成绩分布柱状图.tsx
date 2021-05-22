import React from 'react'
import { Chart, Interval, Tooltip } from 'bizcharts'
import Iconfont from '@/components/Demo/Iconfont'

const Histogram: React.FC = (props: any) => {
  const data = [
    { school: '全部学校', avg: 560 },
    { school: '滨江一中', avg: 520 },
    { school: '滨江二中', avg: 610 },
    { school: '滨江三中', avg: 445 },
    { school: '滨江四中', avg: 480 },
    { school: '滨江五中', avg: 480 },
    { school: '滨江六中', avg: 510 },
  ]

  return (
    <>
      <h2>
        学校成绩分布柱状图
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Chart height={200} autoFit data={data} interactions={['active-region']}>
        <Interval position="school*avg" />
        <Tooltip shared />
      </Chart>
    </>
  )
}

export default Histogram
