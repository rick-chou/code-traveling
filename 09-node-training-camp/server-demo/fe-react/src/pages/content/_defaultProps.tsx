import { SmileOutlined, TabletOutlined } from '@ant-design/icons';

const prefix = '/content';

export default {
  route: {
    path: prefix,
    routes: [
      {
        path: `${prefix}/welcome`,
        name: '欢迎',
        icon: <SmileOutlined />,
        component: './Welcome',
      },
      {
        name: '列表页',
        icon: <TabletOutlined />,
        path: `${prefix}/list`,
        component: './ListTableList',
      },
    ],
  },
  location: {
    pathname: prefix,
  },
  fixSiderbar: true,
  navTheme: 'light',
  layout: 'side',
  contentWidth: 'Fluid',
  headerHeight: 48,
  primaryColor: '#1890ff',
  splitMenus: false,
};
