import React from 'react';
import { Input } from 'antd';
import CommitItem from '../../components/CommentItem';
import styles from './index.module.scss';

class Comments extends React.Component {
  static getDerivedStateFromProps(props, state) {
    console.log('父组件的getDerivedStateFromProps执行了', props, state);
    return null;
  }
  constructor(props) {
    console.log('父组件constructor执行了');
    super(props);
    this.state = {
      tags: [],
      value: '',
    };
  }

  componentDidMount() {
    console.log('父组件的componentDidMount执行了');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('父组件的shouldComponentUpdate执行了', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('父组件的getSnapshotBeforeUpdate执行了', prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('父组件的componentDidUpdate', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    console.log('父组件的componentWillUnmount执行了');
  }

  render() {
    console.log('父组件的render执行了');
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
}

export default Comments;
