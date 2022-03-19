import { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { useHistory, withRouter } from 'react-router-dom';
import { routes, routeObj } from '@router';

import { Layout, Menu, Breadcrumb } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App(props) {
  // 设置菜单列表互斥 同时只能打开一个
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const history = useHistory();
  // console.log('history', history);
  // console.log(props);
  const onOpenChange = (key: string[]) => {
    setOpenKeys([key.pop() as string]);
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <h1 style={{ color: '#FFF' }}>React Docs 🐣🐣🐣</h1>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{ padding: '24px 0' }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{ height: '100%' }}
            >
              {Object.keys(routeObj).map((item) => (
                <SubMenu
                  key={item}
                  icon={<NotificationOutlined />}
                  title={item}
                >
                  {routeObj[item].map((i) => (
                    <Menu.Item key={i.id} onClick={() => history.push(i.path)}>
                      {i.id}
                    </Menu.Item>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </Sider>

          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {renderRoutes(routes)}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2021 Created by Chou</Footer>
    </Layout>
  );
}

export default withRouter(App);
