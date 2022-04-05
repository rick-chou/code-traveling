const markdownText = `
~~~scss
.title {
  color: red;
  font-size: 28px;
}
~~~
`;

import { Markdown } from '@/components';

import styles from './index.module.scss';

const App = () => {
  return (
    <>
      <Markdown children={markdownText} title="css modules" />
      <div className={styles.title}>css modules</div>
    </>
  );
};

export default App;
