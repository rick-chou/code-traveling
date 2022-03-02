import React, { FC } from 'react'
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom'

interface RouteParams {
  id: string
}

const Article: FC = () => {
  const { id } = useParams<RouteParams>()
  const location = useLocation()
  const match = useRouteMatch('/router/article/:id')
  React.useEffect(() => {
    console.log(location)
    console.log(match)
  }, [])
  return <div>Article:{id}</div>
}

export default Article
