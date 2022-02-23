const download = require('download-git-repo');
const { orgName } = require('./constants');

/**
 *
 * @param {string} repo github repo name
 * @param {string} dest destination
 * @param {string} extra branch or tag
 */
module.exports = async function loadRemotePreset(repo, dest, extra) {
  await new Promise((resolve, reject) => {
    download(
      `${orgName}/${repo}#${extra}`,
      dest,
      { clone: false },
      (err) => {
        if (err) return reject(err);
        return resolve();
      }
    );
  });
};
