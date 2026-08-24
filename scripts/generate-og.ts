import fs from 'fs';
import path from 'path';

const projectRoot = '/Users/abi/Documents/Me/Dev/nextJS-Portfolio';
const portraitPath = path.join(projectRoot, 'public/photos/abhijith-pa-founder-portrait.jpg');
const portraitBase64 = fs.readFileSync(portraitPath).toString('base64');
const portraitDataUrl = `data:image/jpeg;base64,${portraitBase64}`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=1200, height=630">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 1200px;
    height: 630px;
    background: #08090d;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #f8fafc;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 44px 52px;
  }

  /* Ambient Mesh Lighting */
  .glow-top-left {
    position: absolute;
    top: -100px;
    left: -100px;
    width: 550px;
    height: 550px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%);
    filter: blur(60px);
    pointer-events: none;
  }
  .glow-bottom-right {
    position: absolute;
    bottom: -80px;
    right: -40px;
    width: 650px;
    height: 650px;
    background: radial-gradient(circle, rgba(244, 63, 94, 0.32) 0%, rgba(217, 70, 239, 0.15) 50%, transparent 70%);
    filter: blur(70px);
    pointer-events: none;
  }
  .glow-center {
    position: absolute;
    top: 50%;
    left: 42%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%);
    filter: blur(50px);
    pointer-events: none;
  }

  /* Grid overlay */
  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 36px 36px;
    pointer-events: none;
  }

  /* Subtle border frame */
  .outer-frame {
    position: absolute;
    inset: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 28px;
    pointer-events: none;
  }

  /* Left Content Column */
  .content-col {
    position: relative;
    z-index: 10;
    max-width: 670px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Status Badge */
  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.35);
    padding: 6px 14px;
    border-radius: 9999px;
    width: fit-content;
    margin-bottom: 18px;
  }
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 10px #10b981;
  }
  .status-text {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #34d399;
  }
  .status-year {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #94a3b8;
    letter-spacing: 0.1em;
  }

  /* Main Name */
  .hero-name {
    font-size: 60px;
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.05;
    color: #ffffff;
    margin-bottom: 8px;
  }

  /* Role Title */
  .hero-role {
    font-size: 27px;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1.25;
    background: linear-gradient(135deg, #f43f5e 0%, #fb7185 50%, #f472b6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 12px;
  }

  /* Founder & Experience */
  .hero-founder {
    font-size: 18px;
    font-weight: 600;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 22px;
  }
  .founder-highlight {
    color: #ffffff;
    font-weight: 700;
  }
  .founder-sep {
    color: #64748b;
    font-size: 14px;
  }
  .founder-ex {
    color: #94a3b8;
    font-size: 15px;
    font-weight: 500;
  }

  /* Tech Stack Pills */
  .tech-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 26px;
    max-width: 620px;
  }
  .tech-pill {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(12px);
    padding: 6px 14px;
    border-radius: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 600;
    color: #e2e8f0;
    letter-spacing: 0.02em;
  }
  .tech-pill.accent {
    background: rgba(244, 63, 94, 0.12);
    border-color: rgba(244, 63, 94, 0.35);
    color: #fda4af;
  }

  /* Bottom Details */
  .footer-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .domain-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(244, 63, 94, 0.1);
    border: 1px solid rgba(244, 63, 94, 0.32);
    padding: 7px 16px;
    border-radius: 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    color: #fb7185;
    letter-spacing: 0.04em;
  }
  .location-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #94a3b8;
    font-size: 13px;
    font-weight: 600;
  }

  /* Right Column: Portrait Showcase */
  .portrait-wrapper {
    position: relative;
    z-index: 10;
    width: 360px;
    height: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .portrait-glow-border {
    position: absolute;
    inset: -3px;
    background: linear-gradient(135deg, #f43f5e, #a855f7 50%, #3b82f6);
    border-radius: 34px;
    filter: blur(2px);
    opacity: 0.85;
  }
  .portrait-card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 32px;
    overflow: hidden;
    background: #0d1117;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 
      0 25px 60px rgba(0, 0, 0, 0.9),
      0 0 50px rgba(244, 63, 94, 0.25);
  }
  .portrait-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    filter: contrast(1.06) brightness(1.02);
  }
  .portrait-gradient-bottom {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(8, 9, 13, 0.85) 0%, rgba(8, 9, 13, 0.05) 45%, transparent 100%);
  }
  .portrait-tag {
    position: absolute;
    bottom: 18px;
    left: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(13, 17, 23, 0.88);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 14px;
    padding: 10px 16px;
  }
  .portrait-tag-name {
    font-size: 13px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.02em;
  }
  .portrait-tag-role {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    font-weight: 700;
    color: #f43f5e;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
</style>
</head>
<body>
  <div class="glow-top-left"></div>
  <div class="glow-bottom-right"></div>
  <div class="glow-center"></div>
  <div class="grid-pattern"></div>
  <div class="outer-frame"></div>

  <!-- Left Column -->
  <div class="content-col">
    <div class="status-pill">
      <div class="status-dot"></div>
      <span class="status-text">AVAILABLE FOR WORK</span>
      <span class="status-year">· 2026</span>
    </div>

    <h1 class="hero-name">Abhijith P A</h1>
    <div class="hero-role">Full Stack Developer & AI Systems Engineer</div>
    
    <div class="hero-founder">
      <span class="founder-highlight">Founder of Abi Solutions</span>
      <span class="founder-sep">/</span>
      <span class="founder-ex">Ex-Steyp · Tegain · Ribos</span>
    </div>

    <div class="tech-pills">
      <div class="tech-pill accent">React</div>
      <div class="tech-pill accent">Next.js</div>
      <div class="tech-pill">Django</div>
      <div class="tech-pill">Python</div>
      <div class="tech-pill">AWS</div>
      <div class="tech-pill accent">AI Workflows</div>
      <div class="tech-pill">TypeScript</div>
      <div class="tech-pill">ERP & SaaS</div>
    </div>

    <div class="footer-row">
      <div class="domain-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        abisolutions.online
      </div>
      <div class="location-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        Wayanad, Kerala, India
      </div>
    </div>
  </div>

  <!-- Right Column: Portrait Card -->
  <div class="portrait-wrapper">
    <div class="portrait-glow-border"></div>
    <div class="portrait-card">
      <img src="${portraitDataUrl}" class="portrait-img" alt="Abhijith P A" />
      <div class="portrait-gradient-bottom"></div>
      <div class="portrait-tag">
        <span class="portrait-tag-name">Abhijith P A</span>
        <span class="portrait-tag-role">Abi Solutions · Lead</span>
      </div>
    </div>
  </div>
</body>
</html>
`;

const htmlPath = path.join(projectRoot, 'scripts/og-template.html');
fs.writeFileSync(htmlPath, html);
console.log('HTML written to', htmlPath);
