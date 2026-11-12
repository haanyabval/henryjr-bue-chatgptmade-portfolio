# Henry Bue — IT Portfolio

A responsive, multi-page portfolio starter for a third-year BSIT student exploring web development, networking, databases, and cybersecurity.

## Pages

- `/` Home
- `/about` About & education
- `/projects` Filterable project showcase
- `/skills` Skills and learning areas
- `/experience` Academic and practical experience
- `/lab` Learning journal
- `/resume` Resume download placeholder
- `/contact` Contact form
- `/api/contact` Server-side contact endpoint (Resend optional)

## Stack

- Next.js App Router + React + TypeScript
- CSS design system (easy to replace with Tailwind utilities)
- Lucide icons
- Next.js Route Handler for contact form
- Resend email API (optional)
- GitHub for version control; Vercel for deployment

## Run locally

1. Install Node.js LTS (20.9+).
2. Extract this folder and open it in VS Code.
3. In the project folder run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000.

Before publishing, replace placeholder email, add your real profile photo (optional), add a PDF at `public/henry-bue-resume.pdf`, and update each project with accurate status, screenshots, and repository/demo links.

## Contact form setup (optional)

1. Create a Resend account and verify a sending domain (or use its permitted test sender while testing).
2. Copy `.env.example` to `.env.local`.
3. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
4. Restart the dev server. Never commit `.env.local` or expose API keys in client-side code.

If you do not configure Resend, the form safely returns a setup message and the page displays your email contact fallback.

## Publish to GitHub

Create an empty repository named `henry-bue-portfolio` under `haanyabval`, then:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/haanyabval/henry-bue-portfolio.git
git push -u origin main
```

Enable GitHub Pages only for static exports; this project uses a server route for contact and is best deployed on Vercel. Connect the GitHub repository to Vercel, import the project, add the three environment variables in Vercel Project Settings, and deploy.

## Suggested improvements before internship applications

- Add 2–3 strongest projects with repository links, role, tech stack, screenshots, and what you personally implemented.
- Add a one-page PDF resume and a professional email address.
- Add a project case study for IntRENEt that clearly labels it an academic prototype and separates planned features from implemented/tested features.
- Add real networking lab evidence (topology, addressing table, configuration summary) and database evidence (ERD, schema, sample queries).
- Add a cybersecurity learning log limited to ethical, defensive lab work.
- Add accessibility checks, metadata/SEO, analytics with consent, and a privacy notice if collecting messages.
