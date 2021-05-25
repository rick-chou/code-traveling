import React from 'react'
import { Chart, Interval, Tooltip, Geom, Axis } from 'bizcharts'
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
      <Chart height={200} autoFit data={data} interactions={['active-region']} padding={[30, 30, 30, 50]}>
        <Interval position="class*avg" />
        <Geom type="interval" position={'class*avg'} color="#619eee" />
        {/* <Tooltip>
          {(title, items) => {
            console.log(title, items)
            // items 是个数组，即被触发tooltip的数据。
            // 获取items的颜色
            const color = items![0].color
            return (
              <>
                <div>{title}</div>
                <div>{items![0].data.school}</div>
                <span style={{ background: `${color}`, width: '8px', height: '8px', borderRadius: '50%', display: 'inlineBlock', marginRight: '8px' }}></span>
              </>
            )
          }}
        </Tooltip> */}
        <Axis
          name="class"
          label={{
            formatter: (text, item, index) => {
              // return text.split("").join("\n")
              return text + '\n\n' + data[index].school
            },
          }}
        />
      </Chart>
    </>
  )
}

export default Histogram
