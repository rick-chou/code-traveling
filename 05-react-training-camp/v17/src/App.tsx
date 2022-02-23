import React, { FC } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@router/index';

import { Layout, Menu, Breadcrumb } from 'antd';
import { FormOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider, Header, Footer } = Layout;

const App: FC = () => {
  const history = useHistory();

  // 设置菜单列表互斥 同时只能打开一个
  const [openKeys, setOpenKeys] = React.useState<any>([]);

  const rootSubMenuKeys = routes.reduce((a: Array<any>, b) => {
    return a.concat(b.path);
  }, []);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className='header'>{/* todo */}</Header>
      <Content style={{ padding: '0 50px' }}>
        {/* 面包屑 */}
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>🏠</Breadcrumb.Item>
          <Breadcrumb.Item>FE</Breadcrumb.Item>
          <Breadcrumb.Item>React</Breadcrumb.Item>
        </Breadcrumb>

        <Layout className='site-layout-background' style={{ padding: '24px 0' }}>
          {/* 侧边栏导航 */}
          <Sider className='site-layout-background' width={200}>
            <Menu
              mode='inline'
              style={{ height: '100%' }}
              openKeys={openKeys}
              onOpenChange={onOpenChange}>
              {routes.map((route, idx) => {
                const { routes: childRoutes, path } = route;
                return (
                  <SubMenu icon={<FormOutlined />} title={path.slice(1)} key={path}>
                    {childRoutes.map((route) => {
                      const { path } = route;
                      const childPath = path.split('/');
                      const _childPath = childPath[childPath.length - 1];
                      return (
                        <Menu.Item key={path} onClick={() => history.push(path)}>
                          {_childPath}
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              })}
            </Menu>
          </Sider>

          {/* 内容区 */}
          <Content style={{ padding: '0 24px', minHeight: 280 }}>{renderRoutes(routes)}</Content>
        </Layout>
      </Content>

      {/* 页脚 */}
      <Footer style={{ textAlign: 'center' }}>©2021 Created by Chou</Footer>
    </Layout>
  );
};

export default withRouter(App);
