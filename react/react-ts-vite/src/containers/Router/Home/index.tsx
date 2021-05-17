import { Button } from 'antd'
import React from 'react'
import { useParams, useLocation, useHistory, useRouteMatch, Link } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  let anchorRef = React.useRef<HTMLAnchorElement | null>(null)
  React.useEffect(() => {
    console.log(anchorRef.current)
  }, [])
  return (
    <div>
      <Button onClick={() => history.push('/router/article/209')}>Article</Button>
      <Button>
        <Link
          to={{
            pathname: '/router/article/209',
            state: { zz: true },
          }}
          innerRef={anchorRef}
        >
          Article
        </Link>
      </Button>
    </div>
  )
}

export default Home
