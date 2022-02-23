const ejs = require('ejs');
const fs = require('fs');

const projectName = 'chou-cli';
const projectDescription = 'description ......';
const projectAuthor = 'chou';

ejs
  .renderFile('./template.json', {
    projectName,
    projectDescription,
    projectAuthor,
  })
  .then((res) => {
    fs.writeFile('./package.json', res, (err) => {
      console.log(err);
    });
  });
