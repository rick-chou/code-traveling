import React, { useState, useEffect } from 'react'
import { Chart } from '@antv/g2'
import DataSet from '@antv/data-set'
import Iconfont from '@/components/Demo/Iconfont'

const Histogram: React.FC = (props: any) => {
  useEffect(() => {
    const data = [
      { school: '全部学校', avg: 560 },
      { school: '滨江一中', avg: 520 },
      { school: '滨江二中', avg: 610 },
      { school: '滨江三中', avg: 445 },
      { school: '滨江四中', avg: 480 },
      { school: '滨江五中', avg: 480 },
      { school: '滨江六中', avg: 510 },
    ]
    const chart = new Chart({
      container: 'column',
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

    chart.interval().position('school*avg')

    chart.render()
  }, [])

  return (
    <>
      <h2>
        学校成绩分布柱状图
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <div id="column" style={{ width: '100%', height: '80%' }}></div>
    </>
  )
}

export default Histogram
