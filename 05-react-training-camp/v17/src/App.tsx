import { renderRoutes } from 'react-router-config';
import { useHistory, withRouter } from 'react-router-dom';
import routes from './router';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  FormOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App(props) {
  const history = useHistory();
  console.log('history', history);
  console.log(props);
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
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            ></Menu>
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
