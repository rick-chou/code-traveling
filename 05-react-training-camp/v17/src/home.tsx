import { Card } from 'antd';

const Home = () => {
  return (
    <Card hoverable style={{ height: '70vh', borderRadius: '10px' }}>
      <iframe
        style={{ height: '65vh', width: '100%' }}
        src="https://juejin.cn/column/6960832559445966861"
      ></iframe>
    </Card>
  );
};

export default Home;
