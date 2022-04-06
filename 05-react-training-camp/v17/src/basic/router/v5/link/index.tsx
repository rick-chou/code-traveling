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
import { JSONTree, Markdown } from '@/components';

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
      <JSONTree data={anchorRef} title="anchorRef" />
    </div>
  );
};

export default Home;
