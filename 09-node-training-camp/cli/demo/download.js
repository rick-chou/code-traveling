const download = require('download-git-repo');

download(
  'YepGym/react-v17-template',
  'test/tmp',
  { clone: false },
  (err) => {
    console.log(err ? 'Error' : 'Success');
  }
);
