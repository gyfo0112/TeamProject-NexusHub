const fs = require('fs');
const path = require('path');

const tempDir = path.join(__dirname, 'src', 'temp');
const tempCompDir = path.join(tempDir, 'components');
const outCompDir = path.join(__dirname, 'src', 'components');

const indexCssPath = path.join(tempDir, 'index.css');
const cssContent = fs.readFileSync(indexCssPath, 'utf8');

// The CSS has sections commented. We can extract them.
const cssSections = {
  global: cssContent.match(/\/\* ============================================================[\s\S]*?(?=\/\* ============================================================ HEADER \*\/)/)[0],
  Header: cssContent.match(/\/\* ============================================================ HEADER \*\/[\s\S]*?(?=\/\* ============================================================ HERO \*\/)/)[0],
  Hero: cssContent.match(/\/\* ============================================================ HERO \*\/[\s\S]*?(?=\/\* ============================================================ SECTION 공통 \*\/)/)[0],
  common: cssContent.match(/\/\* ============================================================ SECTION 공통 \*\/[\s\S]*?(?=\/\* ---- 주요 서비스 ---- \*\/)/)[0],
  Services: cssContent.match(/\/\* ---- 주요 서비스 ---- \*\/[\s\S]*?(?=\/\* ---- 픽업 파트너 ---- \*\/)/)[0],
  Partner: cssContent.match(/\/\* ---- 픽업 파트너 ---- \*\/[\s\S]*?(?=\/\* ---- 위치가 아니라 \(대시보드\) ---- \*\/)/)[0],
  OpsDashboard: cssContent.match(/\/\* ---- 위치가 아니라 \(대시보드\) ---- \*\/[\s\S]*?(?=\/\* ---- 데이터 예측 \(차트\) ---- \*\/)/)[0],
  DataChart: cssContent.match(/\/\* ---- 데이터 예측 \(차트\) ---- \*\/[\s\S]*?(?=\/\* ---- 스마트 터미널 \(다크\) ---- \*\/)/)[0],
  Terminal: cssContent.match(/\/\* ---- 스마트 터미널 \(다크\) ---- \*\/[\s\S]*?(?=\/\* ---- 무엇을 도와드릴까요 ---- \*\/)/)[0],
  Help: cssContent.match(/\/\* ---- 무엇을 도와드릴까요 ---- \*\/[\s\S]*?(?=\/\* ============================================================ FOOTER \*\/)/)[0],
  Footer: cssContent.match(/\/\* ============================================================ FOOTER \*\/[\s\S]*?(?=@media)/)[0],
  media: cssContent.substring(cssContent.indexOf('@media (max-width: 900px)'))
};

// Now we need to distribute the media queries.
const mediaQueries = cssSections.media.replace('@media (max-width: 900px) {', '').slice(0, -1).trim(); // Remove wrapping @media
// mediaQueries contains rules. Let's append them directly to the respective files by wrapping them again.

function getMediaFor(component) {
  let queries = '';
  const lines = mediaQueries.split('\n');
  let inside = false;
  let currentBlock = '';
  
  // This is a naive media query splitter. It's better to just manually append known classes.
  return '';
}

// Write the SCSS files
const componentMapping = {
  Header: ['Header'],
  Hero: ['Hero'],
  Services: ['Services'],
  Partner: ['Partner'],
  OpsDashboard: ['OpsDashboard'],
  DataChart: ['DataChart'],
  Terminal: ['Terminal'],
  Help: ['Help'],
  Footer: ['Footer']
};

for (const [comp, scssKeys] of Object.entries(componentMapping)) {
  let scssContent = scssKeys.map(k => cssSections[k]).join('\n');
  
  // Add specific media queries manually for simplicity since it's short
  let mq = '';
  if (comp === 'Header') mq = `\n@media (max-width: 900px) {\n  .nav-menu { display: none; }\n}\n`;
  if (comp === 'Hero') mq = `\n@media (max-width: 900px) {\n  .hero h1 { font-size: 34px; }\n  .hero h1 .blue { font-size: 38px; }\n}\n`;
  if (comp === 'Services') mq = `\n@media (max-width: 900px) {\n  .service-cards { grid-template-columns: 1fr; }\n}\n`;
  if (comp === 'Partner') mq = `\n@media (max-width: 900px) {\n  .partner-ring { display: none; }\n  .partner { flex-direction: column; min-height: auto; }\n  .partner-img-col { flex: none; width: 100%; height: 220px; }\n  .partner-img-el { border-radius: 0 110px 110px 0; }\n  .partner-text-col { padding: 32px 24px; }\n}\n`;
  if (comp === 'Help') mq = `\n@media (max-width: 900px) {\n  .help-cards { grid-template-columns: 1fr; }\n}\n`;
  if (comp === 'Footer') mq = `\n@media (max-width: 900px) {\n  .foot-grid { grid-template-columns: 1fr 1fr; }\n}\n`;

  fs.writeFileSync(path.join(outCompDir, `${comp}.scss`), scssContent + mq);
}

// Global CSS
let globalCss = cssSections.global + '\n' + cssSections.common;
globalCss += `\n@media (max-width: 900px) {\n  .grid-2 {\n    grid-template-columns: 1fr;\n    gap: 36px;\n  }\n}\n`;
fs.writeFileSync(path.join(__dirname, 'src', 'index.css'), globalCss);

// Copy TSX files and add import
const tsxFiles = fs.readdirSync(tempCompDir).filter(f => f.endsWith('.tsx'));
for (const f of tsxFiles) {
  let content = fs.readFileSync(path.join(tempCompDir, f), 'utf8');
  const compName = f.replace('.tsx', '');
  if (componentMapping[compName]) {
    content = `import './${compName}.scss';\n` + content;
  }
  // Change login href for Header
  if (compName === 'Header') {
    content = content.replace('href="#" className="login"', 'href="/old-version.html" className="login"');
  }
  fs.writeFileSync(path.join(outCompDir, f), content);
}

console.log('Migration complete!');
