import {
  Controlled as CodeMirror,
  IControlledCodeMirror,
} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';

// import 'codemirror/theme/ayu-mirage.css';
// import 'codemirror/theme/base16-dark.css';
// import 'codemirror/theme/base16-light.css';
// import 'codemirror/theme/bespin.css';
import 'codemirror/theme/dracula.css';
// import 'codemirror/theme/duotone-light.css';
// import 'codemirror/theme/eclipse.css';
// import 'codemirror/theme/elegant.css';
// import 'codemirror/theme/gruvbox-dark.css';
// import 'codemirror/theme/hopscotch.css';
// import 'codemirror/theme/icecoder.css';
// import 'codemirror/theme/idea.css';
// import 'codemirror/theme/lucario.css';
// import 'codemirror/theme/material-darker.css';
// import 'codemirror/theme/material-palenight.css';
// import 'codemirror/theme/material.css';
// import 'codemirror/theme/mbo.css';
// import 'codemirror/theme/mdn-like.css';
// import 'codemirror/theme/monokai.css';
// import 'codemirror/theme/moxer.css';
// import 'codemirror/theme/neat.css';
// import 'codemirror/theme/neo.css';
// import 'codemirror/theme/oceanic-next.css';
// import 'codemirror/theme/panda-syntax.css';
// import 'codemirror/theme/railscasts.css';
// import 'codemirror/theme/rubyblue.css';
// import 'codemirror/theme/seti.css';
// import 'codemirror/theme/shadowfox.css';
// import 'codemirror/theme/ssms.css';
// import 'codemirror/theme/the-matrix.css';
// import 'codemirror/theme/tomorrow-night-eighties.css';
// import 'codemirror/theme/ttcn.css';
// import 'codemirror/theme/xq-light.css';

const CodeBox = ({
  value,
  onChange,
  onBeforeChange,
}: IControlledCodeMirror) => (
  <CodeMirror
    value={value}
    options={{
      mode: 'javascript',
      theme: 'dracula dark',
      autofocus: true, //自动获取焦点
      lineNumbers: true, //显示行号
      smartIndent: true, //自动缩进
      lineWrapping: true,
    }}
    onChange={onChange}
    onBeforeChange={onBeforeChange}
  />
);

export default CodeBox;
