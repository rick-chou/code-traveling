import React from 'react'

import Temp from '@containers/Temp'

// import Liquid from '@/components/Antv/Liquid'
import GroupedHistogram from '@/components/Antv/GroupedHistogram'
import GroupedStackedHistogram from '@/components/Antv/GroupedStackedHistogram'
import BoxPlot from '@/components/Antv/BoxPlot'
import Histogram from '@/components/Antv/01_学生成绩分布直方图'
import Column from '@/components/Antv/02_学校成绩分布柱状图'
import ColumnClass from '@/components/Antv/03_班级成绩报告柱状图'

function App() {
  return (
    <Temp>
      {/* <Liquid /> */}
      <Histogram />
      <Column />
      <ColumnClass />
      <GroupedHistogram />
      <GroupedStackedHistogram />
      <BoxPlot />
    </Temp>
  )
}

export default App
