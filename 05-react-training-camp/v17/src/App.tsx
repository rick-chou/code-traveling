import { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { useHistory, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { NotificationOutlined } from '@ant-design/icons';
import { Card } from '@nanshu/ui';

import { routes, routeObj } from '@/router';
import Home from './home';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function App() {
  // 设置菜单列表互斥 同时只能打开一个
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const history = useHistory();
  const onOpenChange = (key: string[]) => {
    setOpenKeys([key.pop() as string]);
  };

  const rednerCore = (height: string, width: string) => (
    <Card style={{ height, width }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ height: '100%', overflow: 'scroll' }}
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
          style={{ padding: '10px 24px', minHeight: 280, overflow: 'scroll' }}
        >
          <Route
            path={import.meta.env.VITE_APP_BASE_URL}
            exact
            component={Home}
          />
          {renderRoutes(routes)}
        </Content>
      </Layout>
    </Card>
  );

  const renderWrapper = () => {
    if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
      return (
        <div className="flex justify-center items-center h-screen">
          {rednerCore('81%', '88%')}
        </div>
      );
    }
    return rednerCore('80vh', '80vw');
  };

  return renderWrapper();
}

export default App;
