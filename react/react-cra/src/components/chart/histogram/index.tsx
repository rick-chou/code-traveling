import React from 'react'
import { Chart, Geom, Tooltip, Effects, Axis } from 'bizcharts'

interface IChartData {
  score: number
  studentNum: number
}

interface IProps {
  height: number
  data: Array<IChartData>
}

const Histogram = (props: IProps) => {
  const { height, data } = props
  const size = 522 / data.length
  const scoreInterval = data[data.length - 1].score / 20 // 分数间隔
  const cols = {
    score: {
      nice: true,
    },
    studentNum: {
      nice: true,
    },
  }

  return (
    <Chart height={height} width={575} autoFit data={data} interactions={['active-region']} padding={[20, 30, 50, 35]} scale={cols}>
      <Axis name="score" visible={false} />

      {/* <Effects>
        {(chart: any) => {
          chart.render() // 第一次渲染获取scale
          // 重新绘制x轴 Axis不支持偏移量
          chart.filteredData.map((item: IChartData) => {
            return chart.annotation().text({
              position: { score: item.score, studentNum: 0 },
              content: item.score,
              style: {
                textAlign: 'center',
                fill: '#8c8c8c',
              },
              offsetX: size / 2,
              offsetY: 12,
              rotate: (Math.PI / 180) * 40,
            })
          })
        }}
      </Effects> */}

      <Geom
        type="interval"
        position="score*studentNum"
        size={size}
        color="#619eee"
        style={{
          fill: '#619eee',
          fillOpacity: 0.8,
        }}
        tooltip={[
          'score*studentNum',
          (score, studentNum) => {
            return {
              nameStar: (score - scoreInterval < 0 ? 0 : score - scoreInterval).toFixed(2).replace(/(?:\.0*|(\.\d+?)0+)$/, '$1'),
              nameEnd: score - 0,
              value: parseInt(studentNum),
            }
          },
        ]}
      />
      <Tooltip
        shared
        crosshairs={
          {
            // type: 'rect',
          }
        }
        showTitle={false}
        containerTpl={`
          <div class="g2-tooltip">
          <div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>
          <ul class="g2-tooltip-list" style="height: 50px;"></ul>
          </div>
          `}
        itemTpl={`
          <li data-index={index} style="margin-bottom:4px;">
          {nameStar}~{nameEnd}分数段<br /><br />
          <span style="background-color:{color};" class="g2-tooltip-marker"></span>
          <span style="padding-left: 2px">人数：{value}</span><br />
        </li>`}
      />
    </Chart>
  )
}

export default Histogram
