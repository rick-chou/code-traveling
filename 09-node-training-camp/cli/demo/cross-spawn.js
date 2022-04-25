const spawn = require('cross-spawn');

// Spawn NPM asynchronously
spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

// Spawn NPM synchronously
spawn.sync('npm', ['list', '-g', '-depth', '0'], {
  stdio: 'inherit',
});

spawn.sync('yarn', {
  stdio: 'inherit',
});
