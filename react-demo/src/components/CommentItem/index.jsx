import React from 'react';
import { Tag } from 'antd';

class CommentItems extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log('子组件的getDerivedStateFromProps执行了', props, state);
    return null;
  }
  constructor(props) {
    console.log('子组件constructor执行了');
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('子组件的componentDidMount执行了');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('子组件的shouldComponentUpdate执行了', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('子组件的getSnapshotBeforeUpdate执行了', prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('子组件的componentDidUpdate', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('子组件的componentWillUnmount执行了');
  }

  render() {
    console.log('子组件的render执行了');
    const { idx, comment, handleTagClose } = this.props;
    return (
      <Tag closable onClose={() => handleTagClose(idx)}>
        {comment}
      </Tag>
    );
  }
}

// 默认props 也可以使用static修饰符在类内声明
CommentItems.defaultProps = {
  comment: 'React',
};

export default CommentItems;
