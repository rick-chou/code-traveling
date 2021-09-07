import styles from './index.module.scss';
import { Button } from 'antd';

const App = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <h1>Header</h1>
      <Button>Antd</Button>
    </div>
  );
};

export default App;
