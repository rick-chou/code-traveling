import { renderRoutes } from 'react-router-config';

export default function Article(props: any) {
  return <>{renderRoutes(props.route.routes)}</>;
}
