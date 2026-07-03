const GHL = 'https://www.ghlindia.com';
const IMAGE_BASE = `${GHL}/assets/img/blogimages`;

export const fallbackCareerJobs = [
  {
    id: 'investor-relationship-officer',
    route: '#/apply_now',
    path: 'apply_now',
    title: 'Investor Relationship Officer',
    salary: 'Rs.15,000 to Rs.25,000',
    description: 'Premium investment plans that are backed by assets and bank guarantee must be sold to the clients...',
    image: `${IMAGE_BASE}/C-R-E-Hiring-WEB.jpg`,
    details: {
      intro: [],
      salary: [
        'Salary ranges from Rs.15,000 to Rs.25,000',
        'Lucrative incentives vary from 1% to 2% of the total sales will be given when the target is achieved',
      ],
      qualifications: [
        "Any bachelor's degree",
        'Good communication skills in English and Hindi, or English and Telugu, or English and Kannada',
        'Good listening skill',
        'Basic computer knowledge',
      ],
      responsibilities: [
        'Premium investment plans that are backed by assets and bank guarantee must be sold to the clients',
        'Inbound and outbound calls should be handled',
        'Product explanation should be done to the clients',
        'Leads must be followed regularly to convert it into sales',
        'Handle client queries through calls, WhatsApp messages, and emails',
        'CRM application must be managed',
        'Building and nurturing strong, long-lasting relationships with clients is essential',
      ],
      closing: [],
    },
    applyPostUrl: `${GHL}/apply_now`,
  },
  {
    id: 'content-writer',
    route: '#/apply_now1',
    path: 'apply_now1',
    title: 'Content Writer',
    salary: 'Rs.15,000 to Rs.18,000',
    description: "If you're a talented writer with a passion for storytelling and a desire to make an impact.....",
    image: `${IMAGE_BASE}/Content-Writer.jpg`,
    details: {
      intro: [
        "Are you good at creating interesting content that grabs people's attention? Do you enjoy telling stories and paying close attention to details? If yes, we want you to join us as a Content Writer!",
        "As a Content Writer at GHL, you'll get to craft compelling content that connects with our audience. Whether it's through blog posts, ad copy, or social media captions, you'll be instrumental in defining our brand's identity and message.",
      ],
      salary: ['15000 to 18000'],
      qualifications: [
        'Ability to research and generate creative ideas',
        'Strong attention to detail',
        'Excellent time-management and listening skills',
      ],
      responsibilities: [
        'Researching industry-related topics',
        'Creating YouTube scripts in a storytelling format',
        'Writing clear and engaging content for various platforms',
        'Collaborating with our team to brainstorm and develop creative ideas',
        'Proofreading and editing content before publication',
      ],
      closing: [
        "If you're a talented writer with a passion for storytelling and a desire to make an impact, we'd love to hear from you!",
      ],
      email: 'sumitha@ghlindia.com',
    },
    applyPostUrl: `${GHL}/apply_now`,
  },
];

const text = (node) => node?.textContent?.replace(/\s+/g, ' ').trim() || '';

const toAbsoluteGhlUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${GHL}/${url.replace(/^\/+/, '')}`;
};

const normalizeSalary = (salary) => salary.replace(/\s+/g, ' ').trim();

const getJobByPath = (path) => fallbackCareerJobs.find((job) => job.path === path) || fallbackCareerJobs[0];

const parseCareerList = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const cards = Array.from(doc.querySelectorAll('.blog-posts .card'));

  if (!cards.length) {
    throw new Error('Career cards were not found in live HTML');
  }

  return cards.map((card, index) => {
    const fallback = fallbackCareerJobs[index] || fallbackCareerJobs[0];
    const image = toAbsoluteGhlUrl(card.querySelector('img')?.getAttribute('src')) || fallback.image;
    const paragraphs = Array.from(card.querySelectorAll('.card-body p')).map(text).filter(Boolean);
    const readMoreHref = card.querySelector('a[href]')?.getAttribute('href') || fallback.path;
    const path = readMoreHref.replace(/^\/+/, '');
    const title = paragraphs.find((value) => !/^(Job Title:|Salary:|Description:)/i.test(value)) || fallback.title;
    const salaryIndex = paragraphs.findIndex((value) => /^Salary:/i.test(value));
    const description = paragraphs.find((value) => /^Description:/i.test(value))?.replace(/^Description:\s*/i, '') || fallback.description;
    const salary = salaryIndex >= 0 ? paragraphs[salaryIndex + 1] : fallback.salary;

    return {
      ...fallback,
      path,
      route: `#/${path}`,
      title,
      salary: normalizeSalary(salary || fallback.salary),
      description,
      image,
      applyPostUrl: `${GHL}/${path}`,
    };
  });
};

const parseDetailListAfterHeading = (doc, headingPattern) => {
  const heading = Array.from(doc.querySelectorAll('.blog-description h5')).find((node) => (
    headingPattern.test(text(node))
  ));
  const list = heading?.nextElementSibling?.tagName === 'OL' ? heading.nextElementSibling : null;
  return list ? Array.from(list.querySelectorAll('li')).map(text).filter(Boolean) : [];
};

const listOrFallback = (items, fallback) => (items.length ? items : fallback);

const parseCareerDetail = (html, path) => {
  const fallback = getJobByPath(path);
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const detail = doc.querySelector('.blog-description');

  if (!detail) {
    throw new Error('Career detail content was not found in live HTML');
  }

  const image = toAbsoluteGhlUrl(detail.querySelector('img')?.getAttribute('src')) || fallback.image;
  const heading = text(detail.querySelector('h6')) || fallback.title;
  const paragraphs = Array.from(detail.querySelectorAll('.col-md-6:first-child > p')).map(text).filter(Boolean);
  const email = detail.querySelector('a[href^="mailto:"]')?.getAttribute('href')?.replace('mailto:', '') || fallback.details.email;
  const salaryHeading = Array.from(detail.querySelectorAll('.blog-description h5')).find((node) => /^Salary:/i.test(text(node)));
  const salaryFromHeading = salaryHeading && salaryHeading.nextElementSibling?.tagName !== 'OL'
    ? text(salaryHeading).replace(/^Salary:\s*/i, '')
    : '';

  return {
    ...fallback,
    title: heading,
    image,
    salary: normalizeSalary(salaryFromHeading || fallback.salary),
    details: {
      intro: paragraphs.length ? paragraphs.slice(0, 2) : fallback.details.intro,
      salary: listOrFallback(parseDetailListAfterHeading(doc, /^Salary:/i), fallback.details.salary),
      qualifications: listOrFallback(
        parseDetailListAfterHeading(doc, /Qualifications|What we're looking for/i),
        fallback.details.qualifications
      ),
      responsibilities: listOrFallback(
        parseDetailListAfterHeading(doc, /Job Description|Responsibilities/i),
        fallback.details.responsibilities
      ),
      closing: paragraphs.length > 2 ? paragraphs.slice(2) : fallback.details.closing,
      email,
    },
  };
};

export const loadCareerJobs = async () => {
  try {
    const response = await fetch('/career');
    if (!response.ok) throw new Error(`Career fetch failed: ${response.status}`);
    const html = await response.text();
    return parseCareerList(html);
  } catch (error) {
    console.warn('Using fallback career jobs:', error);
    return fallbackCareerJobs;
  }
};

export const loadCareerJobDetail = async (hash) => {
  const path = hash === '#/apply_now1' ? 'apply_now1' : 'apply_now';

  try {
    const response = await fetch(`/${path}`);
    if (!response.ok) throw new Error(`Career detail fetch failed: ${response.status}`);
    const html = await response.text();
    return parseCareerDetail(html, path);
  } catch (error) {
    console.warn('Using fallback career detail:', error);
    return getJobByPath(path);
  }
};
