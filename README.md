# Jaylen Sze's Personal Website

Live at [jaylensze.github.io](https://jaylensze.github.io)

## What's on it

- Hero section with my name, U of T CS & Math, "Aspiring Researcher", and contact email
- Light and dark theme toggle (light theme by default, saved in `localStorage`)
- Interactive timeline of current work (clubs, research, and active projects with GitHub links) plus collapsible University and High School entries, including past projects (Wikipedia Racing, Mic Drop Madness, FacePalm)
- Awards list (Innis Later Life Scholarship, Dean's List, Putnam, Governor General's Academic Medal, Euclid, CCC Senior Division Honour Roll, Cayley) with links to official contest results
- Top nav with links to Timeline, Awards, Resume, GitHub, and the theme toggle; footer with email, GitHub, and LinkedIn

## Working on the site

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

- Homepage: `src/pages/index.astro`, layout in `src/layouts/BaseLayout.astro`, styles in `src/styles/global.css`, client script in `public/script.js`
- Project detail pages (`/projects/`): Markdown files in `src/content/projects/`
- Blog posts (`/blog/`, `/rss.xml`): Markdown files in `src/content/blog/`. Posts with `draft: true` only show in `npm run dev`
- Static files (resume, contest result PDFs, favicons): `public/`

## Contact

- Email: jaylensze at gmail dot com
- LinkedIn: [linkedin.com/in/jaylensze](https://www.linkedin.com/in/jaylensze/)
- GitHub: [github.com/JaylenSze](https://github.com/JaylenSze)
