import React from 'react'

import Temp from '@containers/Temp'

import Liquid from '@/components/Antv/Liquid'
import GroupedHistogram from '@/components/Antv/GroupedHistogram'
import GroupedStackedHistogram from '@/components/Antv/GroupedStackedHistogram'
import BoxPlot from '@/components/Antv/BoxPlot'
import Histogram from '@/components/Antv/Histogram'
import HistogramNoSpace from '@/components/Antv/HistogramNoSpace'

function App() {
  return (
    <Temp full={true}>
      <Liquid />
      <Histogram />
      <HistogramNoSpace />
      <GroupedHistogram />
      <GroupedStackedHistogram />
      <BoxPlot />
    </Temp>
  )
}

export default App
