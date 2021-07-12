import React, { FC } from 'react'
import { Button } from 'antd'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@router/index'
const App: FC = () => {
  return (
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
  )
}

export default App


// import { Button } from 'antd'
// import { BrowserRouter as Router, NavLink } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
// import routes from '@router/index'

// import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
// const { Content, Sider } = Layout;

// ReactDOM.render(
//   <Layout>
//     <Layout>
//       <Sider width={200} className="site-layout-background">
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={[routes[0].path]}
//           style={{ height: '100%', borderRight: 0 }}
//         >
//           {
//             routes.map((route, idx) => {
//               const { routes: childRoutes, path } = route
//               return (
//                 <SubMenu icon={<UserOutlined />} title={route.path.slice(1)} key={idx}>
//                   {
//                     childRoutes.map((route, idx) => {
//                       return (
//                         <Menu.Item key={route.path}>{route.path}</Menu.Item>
//                       )
//                     })
//                   }
//                 </SubMenu>
//               )
//             })
//           }
//         </Menu>
//       </Sider>
//       <Layout style={{ padding: '0 24px 24px' }}>
//         <Breadcrumb style={{ margin: '16px 0' }}>
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: 24,
//             margin: 0,
//             minHeight: 280,
//           }}
//         >
//           Content
//         </Content>
//       </Layout>
//     </Layout>
//   </Layout>,
//   document.getElementById('root')
// );