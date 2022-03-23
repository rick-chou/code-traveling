import Collapse from 'antd/lib/collapse/Collapse';
import ReactMarkdown from 'react-markdown';
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as Theme from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IProps extends ReactMarkdownOptions {
  title?: string;
  theme?: keyof typeof Theme;
}

const { Panel } = Collapse;

const Markdown = ({ children, title, theme = 'vs' }: IProps) => {
  const renderCore = () => (
    <ReactMarkdown
      children={children}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={Theme[theme]}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );

  const renderCollapse = () => (
    <Collapse defaultActiveKey={['1']} style={{ marginBottom: '5vh' }}>
      <Panel header={title} key="1">
        {renderCore()}
      </Panel>
    </Collapse>
  );

  return title ? renderCollapse() : renderCore();
};

export default Markdown;
