import React, { useState } from 'react'
import Draggable from '@components/Draggable'
import Clipboard from '@components/Clipboard'
import Preview from '@components/Preview'
import Stretch from '@components/Stretch'
import Temp from '@containers/Temp'

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
