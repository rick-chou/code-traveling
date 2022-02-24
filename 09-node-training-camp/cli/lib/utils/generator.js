const Metalsmith = require('metalsmith');
const ejs = require('ejs');

/**
 * @description generator custom package.json
 * @param {string} source source
 * @param {string} dest destination
 * @param {Object} config template
 */
module.exports = function generator(source, dest, config) {
  return new Promise((resolve, reject) => {
    Metalsmith(process.cwd())
      .source(source)
      .clean(false)
      .use((files, meta, done) => {
        Object.keys(files).forEach((fileName) => {
          if (fileName === 'package.json') {
            const res = ejs.render(files[fileName].contents.toString(), config);
            files[fileName].contents = Buffer.from(res);
          }
        });
        done();
      })
      .destination(dest)
      .build((err) => {
        if (err) reject(err);
        resolve();
      });
  });
};
