import React from 'react'

import Temp from '@containers/Temp'

import Draggable from '@/components/Demo/Draggable'
import Clipboard from '@/components/Demo/Clipboard'
import Preview from '@/components/Demo/Preview'
import Stretch from '@/components/Demo/Stretch'
import Code from '@/components/Demo/CodeEditor'

function App() {
  return (
    <Temp>
      <Draggable />
      <Clipboard />
      <Preview />
      <Stretch />
      <Code />
    </Temp>
  )
}

export default App
