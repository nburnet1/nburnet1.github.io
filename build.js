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

// Minimal RFC 4180 CSV parser: quoted fields may contain commas, newlines and "" escapes.
const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [header, ...records] = rows.filter((r) => r.some((f) => f.trim()));
  return records.map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] || '').trim()])));
};

// books.csv rows are grouped by status in this order; rows keep their file order within a group.
const BOOK_STATUSES = ['Reading', 'On the Shelf', 'Read'];

const booksByStatus = (books) => {
  const unknown = books.filter((b) => !BOOK_STATUSES.some((s) => s.toLowerCase() === b.status.toLowerCase()));
  if (unknown.length) {
    throw new Error(`books.csv: unknown status for ${unknown.map((b) => `"${b.title}" (${b.status})`).join(', ')}; use ${BOOK_STATUSES.join(', ')}`);
  }
  return BOOK_STATUSES.map((status) => ({
    status,
    books: books.filter((b) => b.status.toLowerCase() === status.toLowerCase()),
  })).filter((group) => group.books.length);
};

async function build() {
  const resume = await fs.readJson('resume.json');
  const books = parseCsv(await fs.readFile('books.csv', 'utf-8'));
  const partials = { nav: await fs.readFile('partials/nav.mustache', 'utf-8') };
  const view = {
    ...resume,
    work: withDisplayDates(resume.work),
    education: withDisplayDates(resume.education),
    projects: withDisplayDates(resume.projects),
    bookshelf: booksByStatus(books),
  };

  const pages = [
    ['index.mustache', 'public/index.html'],
    ['books.mustache', 'public/books.html'],
  ];
  for (const [source, output] of pages) {
    const template = await fs.readFile(source, 'utf-8');
    await fs.outputFile(output, Mustache.render(template, view, partials));
  }

  console.log(`Build complete! Output: ${pages.map(([, output]) => output).join(', ')}`);
}

build();
