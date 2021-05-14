import React from 'react'
import { DatePicker, Space } from 'antd'
import Iconfont from '@components/Iconfont'
import locale from 'antd/es/date-picker/locale/zh_CN'
const { RangePicker } = DatePicker

const index = (props: any) => {
  const handleDateChange = (date: any) => {
    console.log(date)
  }

  return (
    <div>
      <h2>
        Date
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Space direction="vertical">
        <DatePicker onChange={handleDateChange} />
        <DatePicker onChange={handleDateChange} picker="week" />
        <DatePicker onChange={handleDateChange} picker="month" />
        <DatePicker onChange={handleDateChange} picker="quarter" />
        <DatePicker onChange={handleDateChange} picker="year" />
      </Space>
      <Space direction="vertical">
        <RangePicker onChange={handleDateChange} locale={locale} />
        <RangePicker onChange={handleDateChange} showTime disabledHours={() => [12, 13, 14]} />
        <RangePicker onChange={handleDateChange} picker="week" />
        <RangePicker onChange={handleDateChange} picker="month" />
        <RangePicker onChange={handleDateChange} picker="year" />
      </Space>
    </div>
  )
}

export default index
