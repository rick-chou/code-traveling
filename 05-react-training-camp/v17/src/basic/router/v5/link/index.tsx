const markdownText = `
~~~tsx
import { Button } from 'antd';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <div>
      <Button>
        <Link
          to={{
            pathname: '/basic/router/v5-article/209',
            state: { zz: true },
          }}
          innerRef={anchorRef}
        >
          Article
        </Link>
      </Button>
    </div>
  );
};

export default Home;
~~~
`;

import { Button } from 'antd';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { JsonTree, Markdown } from '@nanshu/ui';

const Home = () => {
  const anchorRef = useRef<HTMLAnchorElement | null>(null);
  return (
    <div>
      <Markdown children={markdownText} title="Link组件" />
      <Button>
        <Link
          to={{
            pathname: '/basic/router/v5-hook/209',
            state: { zz: true },
          }}
          innerRef={anchorRef}
        >
          Article: 209
        </Link>
      </Button>
      <JsonTree data={{ anchorRef }} />
    </div>
  );
};

export default Home;
