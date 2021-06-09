import React from 'react'
import { Table } from 'antd'
import './index.module.scss'

interface IProps {
  dataSource: any
  handlePageChange?: any
  handleTableChange?: any
  handleShowSizeChange?: any
  columns: any
  defaultPageSize?: number
  total?: number
  pageSize?: any
  tableSize?: any
}

const List = (props: IProps) => {
  const { dataSource, handleTableChange, columns, defaultPageSize, total, pageSize, tableSize } = props

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      size={tableSize ? tableSize : 'middle'}
      onChange={handleTableChange} // 分页、排序、筛选变化时触发
      pagination={{
        hideOnSinglePage: true, // 只有一页时 隐藏分页器
        showSizeChanger: true, // 展示 pageSize 切换器
        size: pageSize ? pageSize : 'default',
        defaultPageSize: defaultPageSize ? defaultPageSize : 10, // 默认显示条数
        pageSizeOptions: ['10', '20', '30'],
        total,
      }}
    />
  )
}

export default List
