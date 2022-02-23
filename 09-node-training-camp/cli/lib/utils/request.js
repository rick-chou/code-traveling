const ora = require('ora');
const axios = require('axios');
const chalk = require('chalk');
const { baseURL, orgName } = require('./constants');

const service = axios.create({
  baseURL,
  timeout: 2000,
});

const spinner = ora('Loading...');

/**
 * @param {Function} request
 * @returns {Promise} Api request with loading
 */
const apiRequest = async (request) =>
  new Promise((resolve, reject) => {
    spinner.start();
    request()
      .then((res) => {
        spinner.text = 'Success';
        spinner.succeed();
        resolve(res);
      })
      .catch((err) => {
        spinner.text = 'Success';
        spinner.succeed();
        // spinner.text = chalk.yellow('Oops, something went wrong');
        // spinner.fail();
        reject(err);
      });
  });

/**
 * @description Get Repo
 */
const getRepo = () => apiRequest(() => service.get(`/orgs/${orgName}/repos`));

/**
 * @description Get Tag
 * @param {string} repo
 */
const getTag = (repo) =>
  apiRequest(() => service.get(`/repos/${orgName}/${repo}/tags`));

module.exports = {
  getRepo,
  getTag,
};
