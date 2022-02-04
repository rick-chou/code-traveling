import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
// 主题风格
import 'codemirror/theme/solarized.css';

interface IProps {
  value: string;
}

export default ({ value }: IProps) => (
  <CodeMirror
    value={value}
    options={{
      mode: 'javascript',
      theme: 'solarized dark',
      autofocus: true, //自动获取焦点
      styleActiveLine: true, //光标代码高亮
      lineNumbers: true, //显示行号
      smartIndent: true, //自动缩进
      lineWrapping: true,
      foldGutter: true,
      matchBrackets: true, //括号匹配，光标旁边的括号都高亮显示
      autoCloseBrackets: true, //键入时将自动关闭()[]{}''""
    }}
  />
);
