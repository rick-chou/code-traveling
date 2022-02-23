const tmp = require('tmp');

tmp.file((err, path, fd, cleanupCallback) => {
  if (err) throw err;

  console.log('File: ', path);
  console.log('Filedescriptor: ', fd);

  // If we don't need the file anymore we could manually call the cleanupCallback
  // But that is not necessary if we didn't pass the keep option because the library
  // will clean after itself.
  cleanupCallback();
});

tmp.dir((err, path, cleanupCallback) => {
  if (err) throw err;

  console.log('Dir: ', path);

  // Manual cleanup
  cleanupCallback();
});

const tmpobj = tmp.dirSync();
console.log('Dir: ', tmpobj.name);
// Manual cleanup
tmpobj.removeCallback();
