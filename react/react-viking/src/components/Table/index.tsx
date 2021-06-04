import React from 'react'
import { Table } from 'antd'
import './index.module.scss'

interface IProps {
  [k: string]: any
}

const List = (props: IProps) => {
  const { dataSource, handlePageChange, onShowSizeChange, columns, defaultPageSize, rowKey, handleTableChange } = props

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      size="middle"
      rowKey={rowKey}
      onChange={handleTableChange}
      pagination={{
        hideOnSinglePage: true, // 只有一页时 隐藏分页器
        showSizeChanger: true, // 展示 pageSize 切换器
        size: 'default',
        onChange: handlePageChange, // 页码改变时回调
        onShowSizeChange, // pageSize改变时回调
        defaultPageSize: defaultPageSize ? defaultPageSize : 10, // 默认显示条数
        // pageSizeOptions: [10, 20, 30],
      }}
    />
  )
}

export default List
