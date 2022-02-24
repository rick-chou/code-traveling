const { version } = require('../../package.json');

const repo = ['custom-ejs-template', 'react-v17-template'];

const tag = ['v1.0'];

const baseURL = 'https://api.github.com';

const orgName = 'YepGym';

const pkgQuestions = [
  {
    type: 'input',
    name: 'projectAuthor',
    message: 'author',
    default() {
      return '秃头程序员';
    },
  },
  {
    type: 'input',
    name: 'projectVersion',
    message: 'version',
    default() {
      return '1.0.0';
    },
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'description',
    default() {
      return '这是秃头程序员写的一个祖传代码';
    },
  },
];

const dirExistQuestion = [
  {
    name: 'ok',
    type: 'confirm',
    message: 'Generate project in current directory?',
  },
];

module.exports = {
  version,
  repo,
  tag,
  baseURL,
  orgName,
  pkgQuestions,
  dirExistQuestion,
};
