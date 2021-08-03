import React, { Component } from 'react'
import { Statistic, Button, Space } from 'antd'
import { LikeOutlined, PieChartOutlined } from '@ant-design/icons'

interface IProps {}

interface IState {
  count: number
  other: number
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      count: 0,
      other: 0,
    }
  }

  componentDidMount() {
    console.log('render...')
  }

  componentDidUpdate() {
    console.log('render...')
  }

  // 普通调用
  addCount = () => {
    this.setState({ other: this.state.other + 1 })
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
      this.setState({ other: this.state.other + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
    })
  }

  // Promise
  addCountByPromise = () => {
    Promise.resolve().then(() => {
      this.setState({ other: this.state.other + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
      this.setState({ count: this.state.count + 1 })
    })
  }

  render() {
    const { count, other } = this.state
    return (
      <>
        <Space size="large">
          <Statistic value={count} prefix={<LikeOutlined />} />
          <Statistic value={other} prefix={<PieChartOutlined />} />
        </Space>
        <br />
        <Button onClick={this.addCount}>普通调用</Button>
        <Button onClick={this.addCountByCallback}>回调函数</Button>
        <Button onClick={this.addCountBySetTimeOut}>定时器</Button>
        <Button onClick={this.addCountByPromise}>Promise</Button>
      </>
    )
  }
}

export default App
