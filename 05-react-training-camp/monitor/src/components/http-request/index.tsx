import { Button, Card, Space } from 'antd';
import axios from 'axios';

const HttpRequest = () => {
  return (
    <Card style={{ borderRadius: '0.5rem' }} hoverable>
      <Space direction="vertical" size={'large'}>
        <Button
          type="primary"
          onClick={() =>
            axios.get('https://api.github.com/repos/twbs/bootstrap')
          }
        >
          XMLHttpRequest Success
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => axios.get('https://nanshu710.com')}
        >
          Unhandledrejection Error
        </Button>
      </Space>
    </Card>
  );
};

export default HttpRequest;
