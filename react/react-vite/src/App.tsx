import React, { FC } from 'react'
import { BrowserRouter as Router, NavLink, useHistory } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@router/index'

import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';

import '@style/antd.css'

const { SubMenu } = Menu;
const { Content, Sider, Header, Footer } = Layout;



const App: FC = () => {

  const history = useHistory()

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header">
        {/* todo */}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              {
                routes.map((route, idx) => {
                  const { routes: childRoutes, path } = route
                  return (
                    <SubMenu icon={<FormOutlined />} title={route.path.slice(1)} key={idx}>
                      {
                        childRoutes.map((route, idx) => {
                          const { path } = route
                          const childPath = path.split('/')
                          const _childPath = childPath[childPath.length - 1]
                          return (
                            <Menu.Item key={_childPath} onClick={() => history.push(path)}>{_childPath}</Menu.Item>
                          )
                        })
                      }
                    </SubMenu>
                  )
                })
              }
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Router>
              {routes.map((route, idx) => {
                return (
                  <NavLink to={route.path} key={idx}>
                    <Button>{route.path.slice(1).toUpperCase()}</Button>
                  </NavLink>
                )
              })}
              {renderRoutes(routes)}
            </Router>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2021 Created by Chou</Footer>
    </Layout>
  )
}

export default App