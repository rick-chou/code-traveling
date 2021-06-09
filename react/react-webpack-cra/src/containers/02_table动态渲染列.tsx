import React from 'react'

import Table from '@components/table'
import { subjects } from '@components/table/config'

const App = () => {
  return (
    <div>
      <Table column={subjects} />
    </div>
  )
}

export default App
