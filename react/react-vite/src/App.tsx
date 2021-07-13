import React, { FC } from 'react'
import { BrowserRouter as Router, NavLink, useHistory, withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@router/index'

import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';

import '@style/antd.css'

const { SubMenu } = Menu;
const { Content, Sider, Header, Footer } = Layout;



const App: FC = (props) => {

  const history = useHistory()

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header">
        {/* todo */}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>🏠</Breadcrumb.Item>
          <Breadcrumb.Item>FE</Breadcrumb.Item>
          <Breadcrumb.Item>React</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              style={{ height: '100%' }}
            >
              {
                routes.map((route, idx) => {
                  const { routes: childRoutes, path } = route
                  return (
                    <SubMenu icon={<FormOutlined />} title={path.slice(1)} key={idx}>
                      {
                        childRoutes.map((route) => {
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
            {renderRoutes(routes)}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2021 Created by Chou</Footer>
    </Layout>
  )
}

export default withRouter(App)