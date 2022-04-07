import { Alert, Layout, Menu, Card } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import { MProvider } from '@/sdk';

import MTable from '@/sdk/components/table';
import Demo1 from '../demo1';
import Demo2 from '../demo2';

const { Content, Sider, Header, Footer } = Layout;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <MProvider>
      <Layout style={{ marginTop: 50, backgroundColor: '#FFF' }}>
        <Content style={{ padding: '0 50px' }}>
          <Card style={{ borderRadius: '0.5rem' }} hoverable>
            <Layout>
              <Sider width={200}>
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
                  <div className="w-1/4 mr-4">
                    {location.pathname === '/demo1' ? <Demo1 /> : <Demo2 />}
                  </div>
                  <div className="w-3/4 bg-white rounded-lg">
                    <MTable />
                  </div>
                </div>
              </Content>
            </Layout>
          </Card>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#FFF' }}>
          fe-monitor-demo ©2022 Created by Chou
        </Footer>
      </Layout>
    </MProvider>
  );
};

export default App;
