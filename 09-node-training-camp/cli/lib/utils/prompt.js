const inquirer = require('inquirer');
const { pkgQuestions } = require('./constants');

/**
 * @description select repo
 * @param {Array} choices
 */
const getCustomRepo = (choices) =>
  inquirer.prompt([
    {
      type: 'list',
      message: 'Select a template',
      name: 'repo',
      choices,
      validate(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one topping.';
        }
        return true;
      },
    },
  ]);

/**
 * @description select tag
 * @param {Array} choices
 */
const getCustomTag = (choices) =>
  inquirer.prompt([
    {
      type: 'list',
      message: 'Select a tag',
      name: 'tag',
      choices,
      validate(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one topping.';
        }
        return true;
      },
    },
  ]);

const getPkgConfig = () => inquirer.prompt(pkgQuestions);

module.exports = {
  getCustomRepo,
  getCustomTag,
  getPkgConfig,
};
