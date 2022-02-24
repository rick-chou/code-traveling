const validateProjectName = require('validate-npm-package-name');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const loadCustomPreset = require('./utils/loadCustomPreset');
const loadRemotePreset = require('./utils/loadRemotePreset');
const generator = require('./utils/generator');
const showSign = require('./utils/sign');
const { dirExistQuestion } = require('./utils/constants');

/**
 * @description new project
 */
module.exports = async function create() {
  const projectName = process.argv[3];

  /**
   * @description Check if the dir exists
   */
  if (fs.existsSync(projectName)) {
    const { ok } = await inquirer.prompt(dirExistQuestion);
    if (!ok) {
      return;
    }
    fs.emptyDirSync(projectName);
  }

  /**
   * @description Check if the dirname validate
   */
  const result = validateProjectName(projectName);
  if (!result.validForNewPackages) {
    return console.error(chalk.red(`Invalid project name: "${projectName}"`));
  }

  /**
   * @description Generator new project
   */
  const preset = await loadCustomPreset();
  await loadRemotePreset(preset.repo, preset.projectName, preset.tag);
  if (preset.projectVersion) {
    await generator(preset.projectName, preset.projectName, preset);
  }

  /**
   * @description Display some info
   */
  const sign = await showSign();
  const projectPath = path.join(process.cwd(), projectName);
  console.log(`Success! Created ${projectName} at ${projectPath}`);
  console.log();
  console.log('We suggest that you begin by typing:');
  console.log();
  console.log(chalk.cyan('  cd'), projectName);
  console.log(`  ${chalk.cyan('yarn start')}`);
  console.log();
  console.log();
  console.log('Happy hacking!');
  console.log();
  console.log(sign);
};
