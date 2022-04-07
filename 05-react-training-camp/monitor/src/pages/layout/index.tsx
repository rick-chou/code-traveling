import { Alert, Layout, Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import { MProvider } from '@/sdk';

import MTable from '@/sdk/table';
import Demo1 from '../demo1';
import Demo2 from '../demo2';

const { Content, Sider } = Layout;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <MProvider>
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Layout
            className="site-layout-background"
            style={{ padding: '24px 0' }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
              >
                <Menu.Item key="1" onClick={() => navigate('demo1')}>
                  demo1
                </Menu.Item>
                <Menu.Item key="2" onClick={() => navigate('demo2')}>
                  demo2
                </Menu.Item>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Alert
                message="提示信息"
                description="右侧的MTable组件会实时打印的你操作行为。控制台会打印当前收集的信息。在控制台输入「MONITOR」查看当前log实例"
                type="info"
                showIcon
              />
              <div className="flex mt-5">
                <div className="w-1/4 mr-4">
                  {location.pathname === '/demo1' ? <Demo1 /> : <Demo2 />}
                </div>
                <div className="w-3/4 px-16 bg-white rounded-lg">
                  <MTable />
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </MProvider>
  );
};

export default App;
