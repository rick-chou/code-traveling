import express from 'express'
import Home from './components/Home'
import { renderToString } from 'react-dom/server'
const app = express()

app.get('/', (req, res) => {
  const html = renderToString(<Home />)
  res.send(html)
})

app.listen(3000, () => {
  console.log('server start')
})
