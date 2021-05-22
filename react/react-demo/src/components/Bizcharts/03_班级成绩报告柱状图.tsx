import React from 'react'
import { Chart, Interval, Tooltip } from 'bizcharts'
import Iconfont from '@/components/Demo/Iconfont'

const Histogram: React.FC = (props: any) => {
  const data = [
    { school: '', avg: 560, class: '全部班级' },
    { school: '滨江一中', avg: 560, class: '高一（一）班' },
    { school: '滨江一中', avg: 520, class: '高一（二）班' },
    { school: '滨江二中', avg: 610, class: '高一（三）班' },
    { school: '滨江三中', avg: 445, class: '高二（一）班' },
    { school: '滨江四中', avg: 480, class: '高一（三）班' },
    { school: '滨江五中', avg: 480, class: '高一（二）班' },
    { school: '滨江六中', avg: 510, class: '高二（一）班' },
  ]

  return (
    <>
      <h2>
        班级成绩报告柱状图
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Chart height={200} autoFit data={data} interactions={['active-region']}>
        <Interval position="class*avg" />
        <Tooltip shared />
      </Chart>
    </>
  )
}

export default Histogram
