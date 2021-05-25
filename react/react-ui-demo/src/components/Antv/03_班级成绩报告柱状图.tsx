import React, { useState, useEffect } from 'react'
import { Chart } from '@antv/g2'
import DataSet from '@antv/data-set'
import Iconfont from '@/components/Demo/Iconfont'

const Histogram: React.FC = (props: any) => {
  useEffect(() => {
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
    const chart = new Chart({
      container: 'column-class',
      autoFit: true,
    })

    chart.data(data)
    chart.scale('avg', {
      nice: true,
      alias: '平均分',
    })

    chart.tooltip({
      showMarkers: false,
    })
    chart.interaction('active-region')

    chart.interval().position('class*avg')

    chart.render()
  }, [])

  return (
    <>
      <h2>
        班级成绩报告柱状图
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <div id="column-class" style={{ width: '100%', height: '80%' }}></div>
    </>
  )
}

export default Histogram
