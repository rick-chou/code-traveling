const generator = require('./utils/generator');
const loadRemotePreset = require('./utils/loadRemotePreset');

/**
 * @description new project
 */
module.exports = async function create() {
  const preset = await generator();
  console.log(preset);
  await loadRemotePreset(preset.repo, preset.projectName, preset.tag);
  if (preset.version) {
    console.log('custom todo');
  }
};
