import React from 'react'
import Iconfont from '@components/Iconfont'
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons'
import { Steps, Space } from 'antd'
import styles from './index.module.scss'
const { Step } = Steps

const index = (props: any) => {
  return (
    <div className={styles.box}>
      <h2>
        Step
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Space size={70} direction={'vertical'}>
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>

        <Steps>
          <Step status="finish" title="Login" icon={<UserOutlined />} />
          <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
          <Step status="process" title="Pay" icon={<LoadingOutlined />} />
          <Step status="wait" title="Done" icon={<SmileOutlined />} />
        </Steps>

        <Steps current={1} status="error">
          <Step title="Finished" description="This is a description" />
          <Step title="In Process" description="This is a description" />
          <Step title="Waiting" description="This is a description" />
        </Steps>
      </Space>
    </div>
  )
}

export default index
