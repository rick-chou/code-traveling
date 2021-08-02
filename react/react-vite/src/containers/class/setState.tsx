import React, { Component } from 'react'
import { Statistic, Button } from 'antd'
import { LikeOutlined } from '@ant-design/icons'

interface IProps {}

interface IState {
  count: number
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  // 普通调用
  addCount = () => {
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
  }
  // 回调函数
  addCountByCallback = () => {
    this.setState({ count: this.state.count + 1 }, () => this.setState({ count: this.state.count + 1 }, () => this.setState({ count: this.state.count + 1 }, () => this.setState({ count: this.state.count + 1 }))))
  }

  // 定时器
  addCountBySetTimeOut = () => {
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
    })
  }

  // Promise
  addCountByPromise = () => {
    Promise.resolve().then(() => {
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
    })
  }

  render() {
    const { count } = this.state
    return (
      <>
        <Statistic value={count} prefix={<LikeOutlined />} />
        <Button onClick={this.addCount}>普通调用</Button>
        <Button onClick={this.addCountByCallback}>回调函数</Button>
        <Button onClick={this.addCountBySetTimeOut}>定时器</Button>
        <Button onClick={this.addCountByPromise}>Promise</Button>
      </>
    )
  }
}

export default App
