import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import Iconfont from '@/components/Demo/Iconfont'
const index = (props: any) => {
  const [value, setValue] = useState('some code')
  return (
    <div>
      <h2>
        Clipboard
        <Iconfont iconName="quanping" onClick={props.onClick} />
      </h2>
      <CodeMirror
        value={value}
        options={{
          lineNumbers: true, //显示行号
          mode: { name: 'text/x-javascript' }, //语言
          autofocus: true, //自动获取焦点
          styleActiveLine: true, //光标代码高亮
          theme: 'yonce', //主题
          scrollbarStyle: 'overlay',
          lineWrapping: false, //代码自动换行
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirrorfoldgutter'], //end
        }}
        onBeforeChange={(editor, data, value) => {
          setValue(value)
        }}
        onChange={(editor, data, value) => {
          console.log(value)
        }}
      />
    </div>
  )
}

export default index
