// 解析
const parser = require('@babel/parser');
// 遍历
const traverse = require('@babel/traverse');
// 生成
const generator = require('@babel/generator');

const transToLet = (code) => {
  const ast = parser.parse(code);
  // 访问者对象
  const visitor = {
    Identifier(path) {
      if (path.node.name === 'console') {
        const parent = path.findParent((parentPath) =>
          parentPath.isExpressionStatement()
        );
        parent.remove();
      }
    },
  };
  traverse.default(ast, visitor);
  // 生成代码
  const newCode = generator.default(ast, {}, code).code;
  return newCode;
};
const code = `
  const a = '123';
  console.log(a);
  window.console.log(a);
  console.log('hello ast');
  console.warn('>>> error <<<');
`;

const afterCode = transToLet(code);
console.log(afterCode);
