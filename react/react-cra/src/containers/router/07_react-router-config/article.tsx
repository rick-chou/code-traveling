import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function Article(props: any) {
  console.log('props :>> ', props);
  return (
    <>
      <h1>Article</h1>
      <Link to='/article/a'>A</Link>
      <Link to='/article/b'>B</Link>
      {renderRoutes(props.route.routes)}
    </>
  );
}
