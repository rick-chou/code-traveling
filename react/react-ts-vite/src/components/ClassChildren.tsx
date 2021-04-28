import React from 'react'

interface IProps {
  obj: Array<number>
  num: number
}

interface IState {
  name: string
  age: number
}

class ClassChildren extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      name: 'chou',
      age: 18,
    }
  }
  shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    console.log(nextProps, nextState)
    return true
  }
  componentDidUpdate() {
    console.log('子组件更新了')
  }
}

export default ClassChildren
