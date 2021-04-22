import React from 'react';
import { Input } from 'antd';
import CommitItem from '../../components/CommentItem';
import styles from './index.module.scss';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      value: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleInputPressEnter = (e) => {
    this.setState({
      tags: [...this.state.tags, e.target.value],
      value: '',
    });
  };
  handleTagClose(idx) {
    this.setState({
      tags: this.state.tags.splice(idx, 1),
    });
  }

  render() {
    return (
      <div className={styles.commentWrapper}>
        <Input
          placeholder="请输入..."
          value={this.state.value}
          onPressEnter={(e) => this.handleInputPressEnter(e)}
          onChange={(e) => this.handleInputChange(e)}
        />
        <div>
          {this.state.tags.map((comment, idx) => {
            return (
              <CommitItem
                comment={comment}
                key={idx}
                idx={idx}
                handleTagClose={() => this.handleTagClose}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Comments;
