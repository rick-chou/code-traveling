const download = require('download-git-repo');
const ora = require('ora');
const { orgName } = require('./constants');

/**
 *
 * @param {string} repo github repo name
 * @param {string} dest destination
 * @param {string} extra branch or tag
 */
module.exports = async function loadRemotePreset(repo, dest, extra) {
  const spinner = ora('downloading...');
  await new Promise((resolve, reject) => {
    spinner.start();
    download(`${orgName}/${repo}#${extra}`, dest, { clone: false }, (err) => {
      if (err) return reject(err);
      spinner.text = 'success';
      spinner.succeed();
      return resolve();
    });
  });
};
