const fs = require('fs-extra');
const Mustache = require('mustache');

async function build() {
  const template = await fs.readFile('index.mustache', 'utf-8');
  const resume = await fs.readJson('resume.json');
  const html = Mustache.render(template, resume);
  await fs.outputFile('public/index.html', html);

  console.log('Build complete! Output: public/index.html');
}

build();
