const fs = require('fs-extra');
const Mustache = require('mustache');

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// resume.json stores ISO 8601 dates (JSON Resume schema); show them as "Month YYYY" on the site.
const displayDate = (date) => {
  if (!date) return date;
  const [year, month] = date.split('-');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
};

const withDisplayDates = (items = []) =>
  items.map((item) => ({ ...item, startDate: displayDate(item.startDate), endDate: displayDate(item.endDate) }));

async function build() {
  const template = await fs.readFile('index.mustache', 'utf-8');
  const resume = await fs.readJson('resume.json');
  const html = Mustache.render(template, {
    ...resume,
    work: withDisplayDates(resume.work),
    education: withDisplayDates(resume.education),
    projects: withDisplayDates(resume.projects),
  });
  await fs.outputFile('public/index.html', html);

  console.log('Build complete! Output: public/index.html');
}

build();
