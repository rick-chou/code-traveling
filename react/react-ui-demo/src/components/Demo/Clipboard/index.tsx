/**
 * 只有线上图片会被识别会file文件
 */

import React from 'react'
import { Button } from 'antd'
import Iconfont from '@/components/Demo/Iconfont'

const index = (props: any) => {
  const handlePaste = (e: any) => {
    console.log('files', e.clipboardData.files)
    console.log('items', e.clipboardData.items)

    const {
      clipboardData: { items, files },
    } = e

    Object.values(files).forEach((file) => {
      console.log(file)
    })

    Object.values(items as object).forEach((item) => {
      console.log(item)
      if (item.kind === 'string') {
        item.getAsString((str: string) => console.log(str))
      }
      if (item.kind === 'file') {
        const pasteFile = item.getAsFile()
        console.log(pasteFile)
      }
    })
  }

  return (
    <div onPaste={(e) => handlePaste(e)}>
      <h2>
        Clipboard
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <Button onClick={() => navigator.clipboard.readText().then((text) => console.log(text))}>GET CLIPBOARD</Button>
    </div>
  )
}

export default index
