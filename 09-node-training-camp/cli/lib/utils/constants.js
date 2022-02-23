const { version } = require('../../package.json');

const repo = ['custom-ejs-template', 'react-v17-template'];

const tag = ['v1.0'];

const baseURL = 'https://api.github.com';

const orgName = 'YepGym';

const pkgQuestions = [
  {
    type: 'input',
    name: 'author',
    message: 'author',
    default() {
      return '秃头程序员';
    },
  },
  {
    type: 'input',
    name: 'version',
    message: 'version',
    default() {
      return '1.0.0';
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'description',
    default() {
      return 'react project';
    },
  },
];

module.exports = {
  version,
  repo,
  tag,
  baseURL,
  orgName,
  pkgQuestions,
};
