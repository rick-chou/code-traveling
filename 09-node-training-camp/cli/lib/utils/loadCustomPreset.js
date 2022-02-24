const merge = require('deepmerge');
const to = require('await-to-js').default;
const { getRepo, getTag } = require('./request');
const { getCustomRepo, getCustomTag, getPkgConfig } = require('./prompt');
const { repo, tag } = require('./constants');

/**
 * @description get custom preset
 * @returns {Object} custom preset
 * @example
 * {
 *  repo: 'custom-ejs-template',
 *  tag: 'v1.0',
 *  projectName: 'react-demo',
 *  author: 'chou',
 *  version: '1.0.0',
 *  description: 'react template cli'
 * }
 */
module.exports = async function loadCustomPreset() {
  const projectName = {
    projectName: process.argv[3],
  };

  const [repoError, repoResult] = await to(getRepo());
  const repoList = repoError ? repo : repoResult.data.map((item) => item.name);
  const customRepo = await getCustomRepo(repoList);

  const [tagError, tagResult] = await to(getTag(customRepo.repo));
  const tagList = tagError ? tag : tagResult.data.map((item) => item.name);
  const customTag = await getCustomTag(tagList);

  if (customRepo.repo === 'custom-ejs-template') {
    const pkgConfig = await getPkgConfig();
    return merge.all([customRepo, customTag, pkgConfig, projectName]);
  }

  return merge.all([customRepo, customTag, projectName]);
};
