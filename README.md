# Kalanithi Portfolio

A modern, recruiter-friendly developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

The app will usually start at `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
.
├── public
│   ├── profile-placeholder.svg
│   ├── Kalanithi_resume.pdf
│   └── resume.pdf
├── src
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── data
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Personalization

- Replace `kalanithi@example.com` in `src/data/portfolio.js` with your real email.
- Replace placeholder LinkedIn and GitHub links in `src/data/portfolio.js`.
- The live resume link already points to `public/Kalanithi_resume.pdf`.
- Update project demo and GitHub URLs if you want live links.

## Deployment to Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel and click `Add New Project`.
3. Import the GitHub repository.
4. Vercel should auto-detect Vite settings.
5. Use these build settings if prompted:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Click `Deploy`.

## Recommended Updates Before Job Applications

- Add your real contact information and profile URLs.
- Replace placeholder project/demo links with your own.
- Upload a polished resume PDF.
- Add a custom domain for a stronger professional impression.
