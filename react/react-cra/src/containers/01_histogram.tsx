import React from 'react'
import Histogram from '@components/chart/histogram'

const App = () => {
  const data = [
    { score: 5.0, studentNum: 50 },
    { score: 10.0, studentNum: 68 },
    { score: 15.0, studentNum: 4 },
    { score: 20.0, studentNum: 0 },
    { score: 25.0, studentNum: 0 },
    { score: 30.0, studentNum: 0 },
    { score: 35.0, studentNum: 0 },
    { score: 40.0, studentNum: 0 },
    { score: 45.0, studentNum: 0 },
    { score: 50.0, studentNum: 0 },
    { score: 55.0, studentNum: 0 },
    { score: 60.0, studentNum: 0 },
    { score: 65.0, studentNum: 0 },
    { score: 70.0, studentNum: 0 },
    { score: 75.0, studentNum: 0 },
    { score: 80.0, studentNum: 0 },
    { score: 85.0, studentNum: 0 },
    { score: 90.0, studentNum: 0 },
    { score: 95.0, studentNum: 0 },
    { score: 100.0, studentNum: 0 },
  ]
  return (
    <div>
      <Histogram height={300} data={data} />
    </div>
  )
}

export default App
