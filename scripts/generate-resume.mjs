import { mkdir, writeFile } from "node:fs/promises";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const outputPath = new URL(
  "../public/documents/afzal-resume-generated.pdf",
  import.meta.url,
);
const pdf = await PDFDocument.create();
pdf.setTitle("P. M. F. Afzal | Senior Project Manager");
pdf.setAuthor("P. M. F. Afzal");
pdf.setSubject("Technology delivery and project leadership experience");

const regular = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
const ink = rgb(0.09, 0.14, 0.2);
const muted = rgb(0.4, 0.44, 0.48);
const bronze = rgb(0.65, 0.54, 0.39);
const line = rgb(0.88, 0.87, 0.83);
const width = 595.28;
const height = 841.89;
const margin = 48;

function addPage() {
  const page = pdf.addPage([width, height]);
  page.drawRectangle({ x: 0, y: height - 8, width, height: 8, color: ink });
  return page;
}

function drawWrapped(
  page,
  text,
  x,
  y,
  maxWidth,
  font,
  size,
  color,
  lineGap = 4,
) {
  const words = text.split(/\s+/);
  let current = "";
  let currentY = y;
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) > maxWidth && current) {
      page.drawText(current, { x, y: currentY, size, font, color });
      currentY -= size + lineGap;
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) page.drawText(current, { x, y: currentY, size, font, color });
  return currentY - size - lineGap;
}

function section(page, label, y) {
  page.drawText(label.toUpperCase(), {
    x: margin,
    y,
    size: 9,
    font: bold,
    color: bronze,
    characterSpacing: 1.2,
  });
  page.drawLine({
    start: { x: margin + 115, y: y + 3 },
    end: { x: width - margin, y: y + 3 },
    thickness: 0.6,
    color: line,
  });
  return y - 21;
}

let page = addPage();
page.drawText("P. M. F. Afzal", {
  x: margin,
  y: 765,
  size: 30,
  font: bold,
  color: ink,
});
page.drawText("SENIOR PROJECT MANAGER  |  TECHNOLOGY DELIVERY", {
  x: margin,
  y: 743,
  size: 9,
  font: bold,
  color: bronze,
  characterSpacing: 0.8,
});
page.drawText("Bengaluru, India  |  25+ years in the IT industry", {
  x: margin,
  y: 724,
  size: 9,
  font: regular,
  color: muted,
});
page.drawLine({
  start: { x: margin, y: 706 },
  end: { x: width - margin, y: 706 },
  thickness: 0.8,
  color: line,
});

let y = section(page, "Professional profile", 684);
y =
  drawWrapped(
    page,
    "Technology delivery and project management professional with over 25 years of experience across software development, technical consulting, project management and enterprise delivery leadership. Brings technical understanding together with structured execution, stakeholder communication and business-focused delivery.",
    margin,
    y,
    width - margin * 2,
    regular,
    9.5,
    muted,
    4,
  ) - 13;
y = section(page, "Experience", y);

const roles = [
  [
    "ITC Infotech",
    "Senior Project Manager",
    "December 2013 - Present",
    "Overseeing technology projects through initiation, requirements analysis, scope estimation, execution, monitoring, change management and closure. Responsibilities include project planning, configuration management, milestone tracking, stakeholder communication, dependency coordination and risk mitigation.",
  ],
  [
    "Torry Harris Business Solutions",
    "Project Manager",
    "August 2005 - November 2013",
    "Managed project execution, resource planning and delivery across clients in APAC and MEA. Coordinated multidisciplinary teams, supported enterprise integration initiatives, deployments, post-go-live activities, service delivery and stakeholder reporting.",
  ],
  [
    "Automated Workflow",
    "Technical Consultant & Lead Developer",
    "April 2000 - July 2005",
    "Contributed to presales, proof-of-concept activities, requirements understanding, solution design and development. Technical lead across customer engagements in India and APAC.",
  ],
  [
    "Automated Workflow",
    "Developer",
    "February 1998 - February 2000",
    "Started in software development, working with FoxPro and Visual Basic and undertaking programming and testing assignments.",
  ],
];

for (const [organization, title, dates, description] of roles) {
  page.drawText(organization, {
    x: margin,
    y,
    size: 11,
    font: bold,
    color: ink,
  });
  page.drawText(dates, {
    x: width - margin - regular.widthOfTextAtSize(dates, 8),
    y: y + 1,
    size: 8,
    font: regular,
    color: muted,
  });
  y -= 14;
  page.drawText(title, { x: margin, y, size: 8.5, font: bold, color: bronze });
  y -= 14;
  y =
    drawWrapped(
      page,
      description,
      margin,
      y,
      width - margin * 2,
      regular,
      8,
      muted,
      3,
    ) - 10;
}

page = addPage();
page.drawText("P. M. F. Afzal", {
  x: margin,
  y: 774,
  size: 18,
  font: bold,
  color: ink,
});
page.drawText("TECHNOLOGY DELIVERY  |  PROJECT LEADERSHIP", {
  x: margin,
  y: 755,
  size: 8,
  font: bold,
  color: bronze,
  characterSpacing: 0.8,
});
let y2 = section(page, "Areas of expertise", 724);

const expertise = [
  [
    "Project & Program Leadership",
    "Project planning; scope and schedule management; delivery monitoring; risk management; change management.",
  ],
  [
    "Technology & Solution Delivery",
    "System design; middleware architecture; systems integration; systems migration; technical consulting.",
  ],
  [
    "Business & Stakeholder Management",
    "Client relationship management; stakeholder communication; requirements analysis; vendor coordination; costing and budgeting.",
  ],
  [
    "People & Operational Leadership",
    "Resource planning; capacity management; team building; mentoring; cross-functional collaboration; process improvement.",
  ],
];

for (const [title, details] of expertise) {
  page.drawText(title, { x: margin, y: y2, size: 10, font: bold, color: ink });
  y2 -= 14;
  y2 =
    drawWrapped(
      page,
      details,
      margin,
      y2,
      width - margin * 2,
      regular,
      8.5,
      muted,
      3,
    ) - 11;
}

y2 = section(page, "Career highlights", y2 - 2);
const highlights = [
  "Led multidisciplinary teams involving business analysts, architects, developers and test engineers.",
  "Coordinated projects across technical, financial and business disciplines.",
  "Managed project planning, scheduling, work breakdown structures and delivery roadmaps.",
  "Handled project dependencies, change requests and stakeholder expectations.",
  "Supported enterprise integration initiatives involving dealers, customers and suppliers.",
  "Participated in steering committee discussions and management reporting.",
  "Managed delivery risks through mitigation and contingency planning.",
];
for (const item of highlights) {
  page.drawText("-", { x: margin, y: y2, size: 8, font: bold, color: bronze });
  y2 =
    drawWrapped(
      page,
      item,
      margin + 12,
      y2,
      width - margin * 2 - 12,
      regular,
      8,
      muted,
      2,
    ) - 4;
}

y2 = section(page, "Education", y2 - 4);
page.drawText("B.Sc. Computer Science", {
  x: margin,
  y: y2,
  size: 9,
  font: bold,
  color: ink,
});
page.drawText("Bangalore University", {
  x: margin + 175,
  y: y2,
  size: 8.5,
  font: regular,
  color: muted,
});
y2 -= 15;
page.drawText("MCA studies - not completed", {
  x: margin,
  y: y2,
  size: 9,
  font: bold,
  color: ink,
});
page.drawText("Madurai Kamaraj University", {
  x: margin + 175,
  y: y2,
  size: 8.5,
  font: regular,
  color: muted,
});
y2 -= 25;
y2 = section(page, "Certifications & professional development", y2);
page.drawText("Certified ScrumMaster", {
  x: margin,
  y: y2,
  size: 9,
  font: bold,
  color: ink,
});
page.drawText("September 12, 2025", {
  x: width - margin - regular.widthOfTextAtSize("September 12, 2025", 8),
  y: y2,
  size: 8,
  font: regular,
  color: muted,
});
y2 -= 13;
y2 =
  drawWrapped(
    page,
    "Scrum Alliance | Active through September 12, 2027 | Certification ID 001782496",
    margin,
    y2,
    width - margin * 2,
    regular,
    8,
    muted,
    3,
  ) - 7;
page.drawText("Project Management Professional (PMP) course", {
  x: margin,
  y: y2,
  size: 9,
  font: bold,
  color: ink,
});
y2 -= 13;
y2 =
  drawWrapped(
    page,
    "January 15-27, 2025 | PMI course Certificate of Achievement, delivered by RPS Learning & Development. Course completion; not a PMP credential.",
    margin,
    y2,
    width - margin * 2,
    regular,
    8,
    muted,
    3,
  ) - 7;
y2 = section(page, "Selected client experience", y2);
drawWrapped(
  page,
  "Woolworths  |  ABSA  |  David Jones  |  Michelin  |  AVIVA  |  AMEX  |  RAK Bank  |  Insight  |  Sundial  |  Toyota Kirloskar Motor  |  Hindustan Unilever  |  Kotak Life Insurance  |  Prudential",
  margin,
  y2,
  width - margin * 2,
  regular,
  8,
  muted,
  3,
);

const bytes = await pdf.save();
await mkdir(new URL("../public/documents/", import.meta.url), {
  recursive: true,
});
await writeFile(outputPath, bytes);
console.log("Generated public/documents/afzal-resume-generated.pdf");
