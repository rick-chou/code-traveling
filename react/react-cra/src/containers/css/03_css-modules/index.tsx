import styles from './index.module.scss';

const App = () => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <h1>Header</h1>
    </div>
  );
};

export default App;
