# Jaylen Sze's Personal Website

Live at [jaylensze.github.io](https://jaylensze.github.io)

## What's on it

- A short intro with links to my GitHub, LinkedIn, email and resume
- Education and technical skills
- Projects: Wikipedia Racing, Mic Drop Madness and FacePalm
- Leadership and activities, split into current, university projects and high school
- Awards, including the Putnam, Euclid, Cayley and CCC, with links to the official contest results

## Working on the site

Built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

- Homepage: `src/pages/index.astro`, layout in `src/layouts/BaseLayout.astro`, styles in `src/styles/global.css`
- Projects: one Markdown file per project in `src/content/projects/`. Set `featured: true` to show it on the homepage
- Blog posts: one Markdown file per post in `src/content/blog/`. Posts with `draft: true` only show in `npm run dev`
- PDFs and other static files: `public/`

## Contact

- Email: [jaylensze@gmail.com](mailto:jaylensze@gmail.com)
- LinkedIn: [linkedin.com/in/jaylensze](https://www.linkedin.com/in/jaylensze/)
- GitHub: [github.com/JaylenSze](https://github.com/JaylenSze)
