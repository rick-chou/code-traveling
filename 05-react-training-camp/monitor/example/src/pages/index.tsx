import { Alert, Layout, Menu } from 'antd';
import { Card } from '@nanshu/ui';
import { useHistory, useLocation } from 'react-router-dom';

import { MProvider, init, MTable } from '@chou/monitor';

import Dom from '@/components/dom';
import Error from '@/components/error';
import Http from '@/components/http';
import Router from '@/components/router';

const { Content, Sider } = Layout;

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const instance = init(['dom']);

  const renderComp = () => {
    switch (location.pathname) {
      case '/dom':
        return <Dom />;
      case '/error':
        return <Error />;
      case '/http':
        return <Http />;
      case '/router':
        return <Router />;
    }
  };

  return (
    <MProvider instance={instance}>
      <div className="flex items-center h-screen">
        <Layout className="!bg-white">
          <Content className="px-8">
            <Card className="min-h-[80vh]">
              <Layout>
                <Sider width={200}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    className="h-full"
                  >
                    <Menu.Item key="1" onClick={() => history.push('/dom')}>
                      DOM
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => history.push('/router')}>
                      ROUTER
                    </Menu.Item>
                    <Menu.Item key="3" onClick={() => history.push('/error')}>
                      ERROR
                    </Menu.Item>
                    <Menu.Item key="4" onClick={() => history.push('/http')}>
                      HTTP
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Content
                  style={{
                    padding: '0 24px',
                    paddingBottom: 40,
                    backgroundColor: '#FFF',
                  }}
                >
                  <Alert
                    message="提示信息"
                    description="右侧的MTable组件会实时打印的你操作行为。控制台会打印当前收集的信息。在控制台输入「MONITOR」查看当前log实例"
                    type="info"
                    showIcon
                  />
                  <div className="flex mt-5">
                    <div className="w-1/4 mr-4">{renderComp()}</div>
                    <div className="w-3/4 bg-white rounded-lg">
                      <MTable />
                    </div>
                  </div>
                </Content>
              </Layout>
            </Card>
          </Content>
        </Layout>
      </div>
    </MProvider>
  );
};

export default App;
