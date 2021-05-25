import React, { useState, useEffect } from 'react'
import DataSet from '@antv/data-set'
import { Chart } from '@antv/g2'
import Iconfont from '@/components/Demo/Iconfont'

const HistogramNoSpace: React.FC = (props: any) => {
  useEffect(() => {
    // const data = [
    //   { score: '34.2', studentNum: '13', ratio: '3.3' },
    //   { score: '68.4', studentNum: '206', ratio: '51.5' },
    //   { score: '102.6', studentNum: '76', ratio: '19' },
    //   { score: '136.8', studentNum: '64', ratio: '16' },
    //   { score: '171.0', studentNum: '10', ratio: '2.5' },
    //   { score: '205.2', studentNum: '4', ratio: '1' },
    //   { score: '239.4', studentNum: '6', ratio: '1.5' },
    //   { score: '273.6', studentNum: '12', ratio: '3' },
    //   { score: '307.8', studentNum: '0', ratio: '0' },
    //   { score: '342.0', studentNum: '5', ratio: '1.3' },
    //   { score: '376.2', studentNum: '2', ratio: '0.5' },
    //   { score: '410.4', studentNum: '2', ratio: '0.5' },
    //   { score: '444.6', studentNum: '0', ratio: '0' },
    //   { score: '478.8', studentNum: '0', ratio: '0' },
    //   { score: '513.0', studentNum: '0', ratio: '0' },
    //   { score: '547.2', studentNum: '0', ratio: '0' },
    //   { score: '581.4', studentNum: '0', ratio: '0' },
    //   { score: '615.6', studentNum: '0', ratio: '0' },
    //   { score: '649.8', studentNum: '0', ratio: '0' },
    //   { score: '684.0', studentNum: '0', ratio: '0' },
    // ]
    const values = [
      1.2, 3.4, 3.7, 4.3, 5.2, 5.8, 6.1, 6.5, 6.8, 7.1, 7.3, 7.7, 8.3, 8.6, 8.8, 9.1, 9.2, 9.4, 9.5, 9.7, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 13.9, 14.0, 14.2, 14.5, 15, 15.2, 15.6, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6, 21,
      23.4,
    ]
    const data = values.map((value) => {
      return {
        value,
      }
    })
    const ds = new DataSet()
    const dv = ds.createView().source(data)
    dv.transform({
      type: 'bin.histogram',
      field: 'value',
      binWidth: 2,
      as: ['value', 'count'],
    })

    const chart = new Chart({
      container: 'histogram',
      autoFit: true,
    })

    chart.data(dv.rows)
    chart.scale({
      value: {
        min: 0,
        tickInterval: 2,
      },
      count: {
        max: 14,
        nice: true,
      },
    })

    chart.tooltip({
      showMarkers: false,
      position: 'top',
    })

    chart.interval().position('value*count')

    chart.interaction('element-highlight')

    chart.render()
  }, [])

  return (
    <>
      <h2>
        学生成绩分布直方图
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <div id="histogram" style={{ width: '100%', height: '80%' }}></div>
    </>
  )
}

export default HistogramNoSpace
