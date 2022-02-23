const Metalsmith = require('metalsmith');
const ejs = require('ejs');

Metalsmith(process.cwd())
  .source('./test')
  .clean(false)
  .use((files, meta, done) => {
    Object.keys(files).forEach((fileName) => {
      const projectName = 'chou-cli';
      const projectDescription = 'description ......';
      const projectAuthor = 'chou';
      if (fileName === 'package.json') {
        const res = ejs.render(files[fileName].contents.toString(), {
          projectAuthor,
          projectDescription,
          projectName,
        });
        files[fileName].contents = Buffer.from(res);
      }
    });
    done();
  })
  .destination('./test')
  .build((err) => {
    if (err) throw err;
    console.log('Build finished!');
  });
