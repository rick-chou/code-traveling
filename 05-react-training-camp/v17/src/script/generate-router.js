const fs = require('fs');
const isEmpty = require('lodash/isEmpty');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');

const ext = '.ts';

const targetDir = process.argv[2];

const routerDir = path.resolve(__dirname, '../router');

const dest = path.resolve(routerDir, targetDir) + ext;

const files = glob.sync(`**/${targetDir}/*.tsx`);

if (isEmpty(files)) {
  console.log('该目录下没有文件');
  return;
}

if (!fs.existsSync(routerDir)) {
  fs.mkdirSync(routerDir);
}

var result = '';
files.forEach((file) => {
  const fileName = path.basename(file, '.tsx');
  const aliasPath = file.replace(/.tsx/, '');
  const pathName = `import ${fileName} from '@${aliasPath}';\n`;
  result += pathName;
});

result += '\nconst routes = [\n';

files.forEach((file) => {
  const fileName = path.basename(file, '.tsx');
  const aliasPath = file.replace(/.tsx/, '');
  const pathName = `  { path: '${aliasPath}', component: ${fileName} },\n`;
  result += pathName;
});

result += '];\n';
result += '\nexport default routes;\n';

fs.writeFileSync(dest, result, {
  flag: 'w',
});

console.log(chalk.whiteBright.bgBlue(' done 👉 '), chalk.yellow(dest));
