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
    // 遍历声明表达式
    VariableDeclaration(path) {
      // 替换
      if (path.node.kind === 'var') {
        path.node.kind = 'let';
      }
    },
  };
  traverse.default(ast, visitor);
  // 生成代码
  const newCode = generator.default(ast, {}, code).code;
  return newCode;
};
const code = `
  const a = 1
  var b = 2
  let c = 3
`;

const afterCode = transToLet(code);
console.log(afterCode);
// output
// const a = 1;
// let b = 2;
// let c = 3;
