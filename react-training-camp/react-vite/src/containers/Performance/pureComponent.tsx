import { Button, Tag } from 'antd'
import React, { Component, PureComponent } from 'react'

interface IProps {
  arr?: Array<number>
  str?: string
}

interface IState {
  arr: Array<number>
  str: string
}

class Child extends Component<IProps, Partial<IState>> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  componentDidUpdate() {
    console.log('使用Component子组件更新了')
  }

  render() {
    return (
      <div>
        <h1>子组件</h1>
        <h2>{this.props.str}</h2>
      </div>
    )
  }
}

class PureChild extends PureComponent<IProps, Partial<IState>> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  componentDidUpdate() {
    console.log('使用PureComponent子组件更新了')
  }

  render() {
    return (
      <div>
        <h1>子组件</h1>
        <h2>{this.props.str}</h2>
      </div>
    )
  }
}

class Parent extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      arr: [1, 2, 3],
      str: 'hello',
    }
  }

  componentDidUpdate() {
    console.log('父组件更新了')
  }

  render() {
    return (
      <div>
        <h1>父组件</h1>
        {this.state.arr!.map((item, idx) => {
          return <Tag key={idx}>{item}</Tag>
        })}
        <br />
        <Button onClick={() => this.setState({ arr: [...this.state.arr, this.state.arr.length + 1] })}>改变子组件不需要的属性</Button>
        <Button onClick={() => this.setState({ str: 'world' })}>改变子组件需要的属性</Button>
        <Child str={this.state.str} />
        <PureChild str={this.state.str} />
      </div>
    )
  }
}

export default Parent
