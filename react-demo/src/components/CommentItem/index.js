import React from 'react';
import { Tag } from 'antd';

class CommentItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { idx, comment, handleTagClose } = this.props;
    return (
      <Tag closable onClose={() => handleTagClose(idx)}>
        {comment}
      </Tag>
    );
  }
}

export default CommentItems;
