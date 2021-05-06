import React from 'react'
import { connect } from 'react-redux'
import * as ACTIONS from '@store/redux/article/actionCreators'
import { Button, Image } from 'antd'

interface IProps {
  list: Array<any>
  getList: () => void
  getListAsync: () => void
  setList: (list: Array<any>) => void
}

const Article = (props: IProps) => {
  return (
    <div>
      <h1>Article</h1>
      <Button onClick={() => props.getList()}>Get List</Button>
      <Button onClick={() => props.getListAsync()}>Get List Async</Button>
      <br />
      {props?.list?.map((item) => {
        return <Image width={200} src={item.img} key={item.id} />
      })}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  list: state.article.list,
})

const mapDispatchToProps = (dispatch: any) => ({
  getList: () => dispatch(ACTIONS.getList()),
  getListAsync: () => dispatch(ACTIONS.getListAsync()),
  setList: (payload: Array<any>) => dispatch(ACTIONS.setList(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Article)
