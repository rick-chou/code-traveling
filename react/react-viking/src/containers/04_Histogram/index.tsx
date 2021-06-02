import React from 'react'
import Histogram from '@components/Chart/Histogram'

const App = () => {

  const data = [
    { schoolName: '滨江一中', avgScore: 300 },
    { schoolName: '滨江二中', avgScore: 520 },
    { schoolName: '滨江三中', avgScore: 610 },
    { schoolName: '滨江四中', avgScore: 450 },
    { schoolName: '滨江五中', avgScore: 480 },
    { schoolName: '滨江六中', avgScore: 380 },
    { schoolName: '滨江七中', avgScore: 380 },
    { schoolName: '滨江八中', avgScore: 380 },
    { schoolName: '滨江九中', avgScore: 380 },
    { schoolName: '滨江十中', avgScore: 380 },
    { schoolName: '滨江十一中', avgScore: 380 },
    { schoolName: '滨江十二中', avgScore: 380 },
    { schoolName: '滨江十三中', avgScore: 380 },
    { schoolName: '滨江十四中', avgScore: 380 },
  ];

  return (
    <Histogram height={300} data={data} />
  )
}

export default App
