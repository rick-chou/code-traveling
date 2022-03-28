import { useState } from 'react';
import { Descriptions } from 'antd';

import { ProSettings, SettingDrawer } from '@ant-design/pro-layout';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';

import Table from './table';

import defaultProps from './_defaultProps';
import { logoImg } from '@/res';

const content = (
  <Descriptions size="small" column={2}>
    <Descriptions.Item label="创建人">张三</Descriptions.Item>
    <Descriptions.Item label="联系方式">
      <a>421421</a>
    </Descriptions.Item>
    <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
    <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
    <Descriptions.Item label="备注">
      中国浙江省杭州市西湖区古翠路
    </Descriptions.Item>
  </Descriptions>
);

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
  });
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      {/* @ts-ignore */}
      <ProLayout
        {...defaultProps}
        location={{
          pathname,
        }}
        waterMarkProps={{
          content: 'chou',
        }}
        title="Doraemon"
        logo={logoImg}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        <PageContainer
          content={content}
          tabList={[
            {
              tab: '基本信息',
              key: 'base',
            },
            {
              tab: '详细信息',
              key: 'info',
            },
          ]}
        >
          <div
            style={{
              height: '120vh',
            }}
          >
            <Table />
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById('test-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};
