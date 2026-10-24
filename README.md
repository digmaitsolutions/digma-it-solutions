# DigMa IT Solutions 🚀

> **High-Performance Enterprise Web, Mobile & Digital Growth Engineering Platform**

DigMa IT Solutions is a modern full-stack web application engineered with the **Next.js App Router**, **Vanilla CSS design system**, and robust API endpoints for lead acquisition, case studies, and service discovery.

---

## 📁 Project Architecture & Directory Structure

```text
digma-it-solutions/
├── public/
│   ├── images/
│   │   ├── hero-illustration.svg
│   │   ├── web-dev.svg
│   │   ├── app-dev.svg
│   │   ├── digital-marketing.svg
│   │   ├── portfolio-fintech.svg
│   │   ├── portfolio-healthtech.svg
│   │   ├── portfolio-ecommerce.svg
│   │   └── portfolio-ai.svg
│   ├── logo.svg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   ├── services/
│   │   │   ├── page.js
│   │   │   ├── web-development/page.js
│   │   │   ├── app-development/page.js
│   │   │   └── digital-marketing/page.js
│   │   ├── about/page.js
│   │   ├── portfolio/page.js
│   │   ├── contact/page.js
│   │   ├── privacy-policy/page.js
│   │   └── api/
│   │       └── leads/route.js
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Process.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── LeadForm.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   └── lib/
│       ├── validation.js
│       └── leads.js
├── .env.local
├── package.json
└── README.md
```

---

## 🛠️ Technology Stack

- **Core Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Runtime**: React 18 / Node.js 20+
- **Styling**: Vanilla CSS Design Tokens (`src/app/globals.css`), Glassmorphism, Micro-animations, Responsive Grids
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: Built-in client and server-side validation (`src/lib/validation.js`)
- **API Endpoints**: Next.js Server Route Handlers (`src/app/api/leads/route.js`)

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- Node.js 18.17+ or 20+
- npm 9+ or pnpm / yarn

### 2. Environment Configuration
The project includes a ready-to-use `.env.local`:
```env
NEXT_PUBLIC_APP_NAME="DigMa IT Solutions"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_COMPANY_EMAIL="contact@digmaitsolutions.com"
NEXT_PUBLIC_COMPANY_PHONE="+1 (800) 555-DIGMA"
```

### 3. Install Dependencies
```bash
cd digma-it-solutions
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser to view the application.

---

## 📡 API Reference: `/api/leads`

### `POST /api/leads`
Submit a new project inquiry or discovery call request.

#### Request Body
```json
{
  "name": "Jane Doe",
  "email": "jane@enterprise.com",
  "phone": "+1 (555) 234-5678",
  "company": "Enterprise Tech Corp",
  "service": "web-development",
  "budget": "30k-50k",
  "message": "We need to modernize our cloud frontend with Next.js App Router."
}
```

#### Successful Response (`201 Created`)
```json
{
  "success": true,
  "message": "Thank you! Your project inquiry has been received. Our solutions team will contact you within 24 hours.",
  "leadId": "lead_1729512300000_a8c2",
  "createdAt": "2026-10-21T18:30:00.000Z"
}
```

#### Validation Error (`400 Bad Request`)
```json
{
  "success": false,
  "message": "Validation failed. Please verify the submitted information.",
  "errors": {
    "email": "Please provide a valid business email address."
  }
}
```

### `GET /api/leads`
Retrieve lead statistics and recent activity preview.

---

## 🎨 Design System & Aesthetic Principles

- **Curated Palette**: Deep navy & space black canvas (`#07090e`, `#0d121f`), electric blue (`#3b82f6`), neon cyan (`#06b6d4`, `#38bdf8`), and subtle glowing borders.
- **Glassmorphic Depth**: Multilayered frosted glass overlays (`backdrop-filter: blur(18px)`), radial ambient background glows, and crisp responsive cards.
- **Micro-Interactions**: Hover elevation, subtle float keyframes, and smooth transition physics.
- **Semantic Structure**: Modern SEO tags, OpenGraph previews, and ARIA accessibility labels across all components.

---

## 🚢 Production Deployment

### Deploy to Vercel
```bash
npm run build
```
Push this repository to GitHub/GitLab and link it directly in your [Vercel Dashboard](https://vercel.com/) for automatic CI/CD edge deployment.

---

© 2026 DigMa IT Solutions Inc. All rights reserved.
