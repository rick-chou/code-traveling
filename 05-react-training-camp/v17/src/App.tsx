import { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { useHistory, Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Card } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { routes, routeObj } from '@/router';
import Home from './home';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  // 设置菜单列表互斥 同时只能打开一个
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const history = useHistory();
  const onOpenChange = (key: string[]) => {
    setOpenKeys([key.pop() as string]);
  };

  const renderCore = () => (
    <Card
      hoverable
      style={{ height: '80vh', overflow: 'scroll', borderRadius: 20 }}
    >
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ height: '100%' }}
          >
            {Object.keys(routeObj).map((item) => (
              <SubMenu key={item} icon={<NotificationOutlined />} title={item}>
                {routeObj[item].map((i) => (
                  <Menu.Item key={i.id} onClick={() => history.push(i.path)}>
                    {i.id}
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </Sider>

        <Content
          style={{ padding: '0 24px', minHeight: 280, overflow: 'scroll' }}
        >
          <Route path={'/'} exact component={Home} />
          {renderRoutes(routes)}
        </Content>
      </Layout>
    </Card>
  );

  const renderLayout = () => {
    if (qiankunWindow.__POWERED_BY_QIANKUN__) {
      return renderCore();
    }
    return (
      <Layout>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
          {renderCore()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          React V17 demo ©2021 Created by Chou
        </Footer>
      </Layout>
    );
  };

  return renderLayout();
}

export default App;
