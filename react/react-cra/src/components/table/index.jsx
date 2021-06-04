import React from 'react';
import { Table } from 'antd';
import PropTypes, { number } from 'prop-types';
import './index.scss';
const List = (props) => {
  const { dataSource, onChange, onShowSizeChange, columns, defaultPageSize } =
    props;

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      size="middle"
      pagination={{
        hideOnSinglePage: true, // 只有一页时 隐藏分页器
        showSizeChanger: true, // 展示 pageSize 切换器
        size: 'large',
        onChange, // 页码改变时回调
        onShowSizeChange, // pageSize改变时回调
        defaultPageSize: defaultPageSize ? defaultPageSize : 10, // 默认显示条数
        // pageSizeOptions: [10, 20, 30],
      }}
    />
  );
};

List.propTypes = {
  dataSource: PropTypes.array,
  onChange: PropTypes.func,
  onShowSizeChange: PropTypes.func,
  columns: PropTypes.array,
  defaultPageSize: number,
};

export default List;
