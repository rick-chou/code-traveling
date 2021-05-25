import React from 'react'

import Temp from '@containers/Temp'

import Histogram from '@/components/Bizcharts/01_学生成绩分布直方图'
import Column from '@/components/Bizcharts/02_学校成绩分布柱状图'
import ColumnClass from '@/components/Bizcharts/03_班级成绩报告柱状图'
import BoxPlot from '@/components/Bizcharts/04_箱型图'
import BulletChart from '@/components/Bizcharts/05_子弹图'

function App() {
  return (
    <Temp>
      <Histogram />
      <Column />
      <ColumnClass />
      <BoxPlot />
      <BulletChart />
    </Temp>
  )
}

export default App
