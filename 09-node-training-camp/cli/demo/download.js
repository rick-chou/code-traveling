const download = require('download-git-repo');

download(
  'direct:https://github.com/YepGym/react-v17-template',
  'test/tmp',
  { clone: true },
  (err) => {
    console.log(err ? 'Error' : 'Success');
  }
);
