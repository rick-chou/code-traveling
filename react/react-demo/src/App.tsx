import React from 'react'

import Temp from '@containers/Temp'

import Draggable from '@components/Draggable'
import Clipboard from '@components/Clipboard'
import Preview from '@components/Preview'
import Stretch from '@components/Stretch'
import Affix from '@components/Affix'
import Breadcrumb from '@components/Breadcrumb'
import Carousel from '@components/Carousel'
import Date from '@components/Date'
import Rate from '@components/Rate'
import Space from '@components/Space'
import Tab from '@components/Tab'
import Transfer from '@components/Transfer'

function App() {
  return (
    <Temp>
      <Draggable />
      <Clipboard />
      <Preview />
      <Stretch />
      <Affix />
      <Breadcrumb />
      <Carousel />
      <Date />
      <Rate />
      <Space />
      <Tab />
      <Transfer />
    </Temp>
  )
}

export default App
