const markdownText = `
~~~tsx
const App = () => {
  const gameList = ['剑盾', '塞尔达', '马里奥制造', '风花雪月'];
  const gamesUI = gameList.map((item, index) => {
    // 🙅‍♂️ 避免使用index作为唯一的key去使用 一般后端返回的数据都有唯一的key值
    return <div key={index}>{item}</div>;
  });
  return gamesUI;
};
~~~
`;

import { Markdown } from '@nanshu/ui';

const App = () => {
  const gameList = ['剑盾', '塞尔达', '马里奥制造', '风花雪月'];
  const renderGamesUI = () =>
    gameList.map((item, index) => {
      // 🙅‍♂️ 避免使用index作为唯一的key去使用 一般后端返回的数据都有唯一的key值
      return <div key={index}>{item}</div>;
    });
  return (
    <>
      <Markdown children={markdownText} title="列表渲染" />
      {renderGamesUI()}
    </>
  );
};

export default App;
