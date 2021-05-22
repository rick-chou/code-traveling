import React, { useEffect } from 'react'
import { DataView } from '@antv/data-set'
import { Chart } from '@antv/g2'
import Iconfont from '@/components/Demo/Iconfont'

const BoxPlot: React.FC = (props: any) => {
  useEffect(() => {
    const data = [
      { x: '全校', low: 1, q1: 9, median: 16, q3: 22, high: 24 },
      { x: '高一（1）班', low: 1, q1: 5, median: 8, q3: 12, high: 16 },
      { x: '高一（2）班', low: 1, q1: 8, median: 12, q3: 19, high: 26 },
      { x: '高一（3）班', low: 2, q1: 8, median: 12, q3: 21, high: 28 },
    ]
    const dv = new DataView().source(data)
    dv.transform({
      type: 'map',
      callback: (obj) => {
        obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high]
        return obj
      },
    })
    const chart = new Chart({
      container: 'box-plot',
      autoFit: true,
    })
    chart.data(dv.rows)
    chart.scale('range', {
      max: 35,
      nice: true,
    })
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl:
        '<li class="g2-tooltip-list-item" data-index={index} style="margin-bottom:4px;">' +
        '<span style="background-color:{color};" class="g2-tooltip-marker"></span>' +
        '{name}<br/>' +
        '<span style="padding-left: 16px">最大值：{high}</span><br/>' +
        '<span style="padding-left: 16px">上四分位数：{q3}</span><br/>' +
        '<span style="padding-left: 16px">中位数：{median}</span><br/>' +
        '<span style="padding-left: 16px">下四分位数：{q1}</span><br/>' +
        '<span style="padding-left: 16px">最小值：{low}</span><br/>' +
        '</li>',
    })
    chart
      .schema()
      .position('x*range')
      .shape('box')
      .tooltip('x*low*q1*median*q3*high', (x, low, q1, median, q3, high) => {
        return {
          name: x,
          low,
          q1,
          median,
          q3,
          high,
        }
      })
      .style({
        stroke: '#545454',
        fill: '#1890FF',
        fillOpacity: 0.3,
      })

    chart.interaction('active-region')

    chart.render()
  }, [])

  return (
    <>
      <h2>
        BoxPlot
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <div id="box-plot" style={{ width: '100%', height: '80%' }}></div>
    </>
  )
}

export default BoxPlot
