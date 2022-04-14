const markdownText = `
~~~tsx
import { FC } from 'react';
import { useParams, useLocation, useRouteMatch, useHistory } from 'react-router-dom';

interface RouteParams {
  id: string;
}

const Article: FC = () => {
  const { id } = useParams<RouteParams>();
  const location = useLocation();
  const match = useRouteMatch('/basic/router/v5-article/:id');
  const history = useHistory();
  return (
    <>
      <div className="text-4xl">Article:{id}</div>
      <Button onClick={() => history.push('/basic/router/v5-article/209')}>
        Article
      </Button>
    </>
  );
};

export default Article;
~~~
`;

import { JsonTree, Markdown } from '@nanshu/ui';
import { Button } from 'antd';
import { FC } from 'react';
import {
  useParams,
  useLocation,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

interface RouteParams {
  id: string;
}

const Article: FC = () => {
  const params = useParams<RouteParams>();
  const location = useLocation();
  const match = useRouteMatch('/basic/router/v5-hook/:id');
  const history = useHistory();
  return (
    <>
      <Markdown
        children={markdownText}
        title="useParams / useLocation / useRouteMatch / useHistory"
      />
      <div className="text-4xl">Article: {params.id}</div>
      <JsonTree data={{ params }} />
      <JsonTree data={{ location }} />
      <JsonTree data={{ match }} />
      <Button onClick={() => history.push('/basic/router/v5-hook/209')}>
        Article: 209
      </Button>
    </>
  );
};

export default Article;
