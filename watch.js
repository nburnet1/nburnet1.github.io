const chokidar = require('chokidar');
const { exec } = require('child_process');

const watcher = chokidar.watch(['index.mustache', 'resume.json'], {
  ignoreInitial: true
});

watcher.on('all', (event, path) => {
  console.log(`${path} changed, rebuilding...`);
  exec('node build.js', (err, stdout, stderr) => {
    if (err) {
      console.error('Build error:', stderr);
    } else {
      console.log(stdout);
    }
  });
});
