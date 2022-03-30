import React, { useState, useEffect } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { ProFormRadio } from '@ant-design/pro-form';
import { omit } from 'lodash';
import { addUser, delUser, readUser, updateUser } from '@/api';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id: number;
  nickname?: string;
  password?: string;
  status?: boolean;
  address?: string;
  tel?: string;
  created_at?: string;
  update_at?: string;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    nickname: 'chou',
    password: '209',
    address: 'HangZhou',
    tel: '123',
    status: false,
    created_at: '2020-05-26T09:42:56Z',
    update_at: '2020-05-26T09:42:56Z',
  },
];

export default () => {
  useEffect(() => {
    fetchList();
  }, []);

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>(
    'bottom'
  );

  const fetchList = () => readUser({}).then((res) => setDataSource(res.data));

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: 'nickname',
      dataIndex: 'nickname',
      width: '15%',
    },
    {
      title: 'password',
      dataIndex: 'password',
      width: '15%',
    },
    {
      title: 'status',
      key: 'status',
      dataIndex: 'status',
      valueType: 'switch',
      valueEnum: {
        true: {
          text: 'true',
          status: 'Success',
        },
        false: {
          text: 'false',
          status: 'Error',
        },
      },
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
    {
      title: 'tel',
      dataIndex: 'tel',
    },
    {
      title: 'created_at',
      dataIndex: 'createdAt',
      valueType: 'date',
      readonly: true,
    },
    {
      title: 'update_at',
      dataIndex: 'updatedAt',
      valueType: 'date',
      readonly: true,
    },
    {
      title: 'op',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          Edit
        </a>,
        <a
          key="delete"
          onClick={async () => {
            await delUser(record.id);
            await fetchList();
          }}
        >
          Del
        </a>,
      ],
    },
  ];

  return (
    <>
      <EditableProTable<DataSourceType>
        locale={{}}
        rowKey="id"
        headerTitle="User Info"
        // maxLength={5}
        scroll={{
          x: 960,
        }}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: position as 'top',
                record: () =>
                  ({ id: (Math.random() * 1000000).toFixed(0) } as any),
              }
            : false
        }
        loading={false}
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: 'top',
                value: 'top',
              },
              {
                label: 'bottom',
                value: 'bottom',
              },
              {
                label: 'hidden',
                value: 'hidden',
              },
            ]}
          />,
        ]}
        columns={columns}
        request={async () => ({
          data: dataSource,
          total: 3,
          success: true,
        })}
        // pagination={{ showQuickJumper: true, pageSize: 5 }}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            if (dataSource.some((item) => item.id === rowKey)) {
              await updateUser(omit(data, ['createdAt', 'updatedAt', 'index']));
            } else {
              await addUser(omit(data, ['id', 'index']));
            }
            await fetchList();
          },
          onChange: setEditableRowKeys,
        }}
      />
    </>
  );
};
