import React from 'react'

import Temp from '@containers/Temp'

import Draggable from '@/components/Demo/Draggable'
import Clipboard from '@/components/Demo/Clipboard'
import Preview from '@/components/Demo/Preview'
import Stretch from '@/components/Demo/Stretch'

function App() {
  return (
    <Temp>
      <Draggable />
      <Clipboard />
      <Preview />
      <Stretch />
    </Temp>
  )
}

export default App
