const esc = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const shortUrl = (url = '') => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Schema dates are ISO 8601 (YYYY, YYYY-MM or YYYY-MM-DD).
const shortDate = (date = '') => {
  const [year, month] = date.split('-');
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
};

const range = (start, end) => {
  if (!start) return '';
  return `${shortDate(start)} &ndash; ${end ? shortDate(end) : 'Present'}`;
};

const bullets = (items = []) =>
  items.length ? `<ul>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>` : '';

const section = (title, body) =>
  body ? `<section><h2>${esc(title)}</h2>${body}</section>` : '';

const header = ({ name, label, summary, email, phone, url, location = {}, profiles = [] }) => {
  const place = [location.city, location.region].filter(Boolean).join(', ');
  const contact = [
    place && esc(place),
    phone && `<a href="tel:${esc(phone.replace(/[^\d+]/g, ''))}">${esc(phone)}</a>`,
    email && `<a href="mailto:${esc(email)}">${esc(email)}</a>`,
    url && `<a href="${esc(url)}">${esc(shortUrl(url))}</a>`,
    ...profiles.map((p) => `<a href="${esc(p.url)}">${esc(shortUrl(p.url))}</a>`),
  ].filter(Boolean);

  return `<header>
    <h1>${esc(name)}</h1>
    ${label ? `<p class="label">${esc(label)}</p>` : ''}
    <p class="contact">${contact.join('<span class="sep">|</span>')}</p>
    ${summary ? `<p class="summary">${esc(summary)}</p>` : ''}
  </header>`;
};

const work = (jobs = []) =>
  jobs
    .map(
      (job) => `<article>
      <div class="row">
        <h3>${esc(job.position)} <span class="org">&middot; ${esc(job.name)}</span></h3>
        <span class="date">${range(job.startDate, job.endDate)}</span>
      </div>
      ${bullets(job.highlights)}
    </article>`,
    )
    .join('');

const projects = (items = []) =>
  items
    .map(
      (p) => `<article>
      <div class="row">
        <h3>${p.url ? `<a href="${esc(p.url)}">${esc(p.name)}</a>` : esc(p.name)}${
          p.description ? ` <span class="org">&middot; ${esc(p.description)}</span>` : ''
        }</h3>
        <span class="date">${range(p.startDate, p.endDate)}</span>
      </div>
      ${bullets(p.highlights)}
    </article>`,
    )
    .join('');

const skills = (groups = []) =>
  groups.length
    ? `<dl class="skills">${groups
        .map((g) => `<dt>${esc(g.name)}</dt><dd>${esc((g.keywords || []).join(', '))}</dd>`)
        .join('')}</dl>`
    : '';

const education = (items = []) =>
  items
    .map(
      (e) => `<article>
      <div class="row">
        <h3>${esc(e.institution)} <span class="org">&middot; ${esc(
          [e.studyType, e.area].filter(Boolean).join(', '),
        )}${e.score ? `, GPA ${esc(e.score)}` : ''}</span></h3>
        <span class="date">${range(e.startDate, e.endDate)}</span>
      </div>
    </article>`,
    )
    .join('');

const css = `
  @page { size: Letter; margin: 0.4in 0.5in; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, "Liberation Sans", sans-serif;
    font-size: var(--base, 10pt);
    line-height: 1.28;
    color: #000;
    background: #fff;
    width: 7.5in; /* Letter width minus side margins, so screen measurement matches print */
  }
  a { color: inherit; text-decoration: none; }
  header { text-align: center; }
  h1 { font-size: 2.15em; font-weight: 700; letter-spacing: 0.02em; line-height: 1.1; }
  .label { font-size: 1.08em; color: #1a1a1a; margin-top: 0.1em; }
  .contact { margin-top: 0.3em; }
  .sep { margin: 0 0.6em; color: #444; }
  .summary { margin-top: 0.35em; font-style: italic; }
  section { margin-top: 0.7em; }
  h2 {
    font-size: 1.05em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #0b2545;
    border-bottom: 0.12em solid #0b2545;
    padding-bottom: 0.08em;
    margin-bottom: 0.35em;
  }
  article { margin-bottom: 0.45em; break-inside: avoid; }
  article:last-child { margin-bottom: 0; }
  .row { display: flex; justify-content: space-between; align-items: baseline; gap: 1em; }
  h3 { font-size: 1em; font-weight: 700; }
  h3 .org { font-weight: 400; color: #1a1a1a; }
  .date { white-space: nowrap; }
  ul { margin: 0.1em 0 0 1.3em; }
  li { padding-left: 0.1em; }
  .skills { display: grid; grid-template-columns: max-content 1fr; column-gap: 1em; row-gap: 0.1em; }
  .skills dt { font-weight: 700; }
`;

// Shrinks the base font (never below MIN_PT) until the content fits one Letter page.
const fitScript = `
  (() => {
    const MAX_PT = 10, MIN_PT = 8.6, STEP = 0.1;
    const pageHeightPx = (11 - 2 * 0.4) * 96;
    const root = document.documentElement;
    for (let pt = MAX_PT; pt >= MIN_PT; pt -= STEP) {
      root.style.setProperty('--base', pt.toFixed(1) + 'pt');
      if (document.body.scrollHeight <= pageHeightPx) break;
    }
  })();
`;

export const render = (resume) => {
  const { basics = {} } = resume;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(basics.name)} - Resume</title>
  <style>${css}</style>
</head>
<body>
  ${header(basics)}
  ${section('Experience', work(resume.work))}
  ${section('Projects', projects(resume.projects))}
  ${section('Skills', skills(resume.skills))}
  ${section('Education', education(resume.education))}
  <script>${fitScript}</script>
</body>
</html>`;
};

export const pdfRenderOptions = { format: 'Letter', printBackground: true, preferCSSPageSize: true };
