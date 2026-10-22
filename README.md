# Jaylen Sze's Personal Website

Live at [jaylensze.github.io](https://jaylensze.github.io)

This is my personal site. It's plain HTML, CSS and JavaScript with no frameworks or build step, hosted for free on GitHub Pages. I wanted something simple that I could edit quickly and fully understand.

## What's on it

- A short intro with links to my GitHub, LinkedIn, email and resume
- Education and technical skills
- Projects: Wikipedia Racing, Mic Drop Madness and FacePalm
- Leadership and activities, split into current, university projects and high school
- Awards, including the Putnam, Euclid, Cayley and CCC, with links to certificates

## How it's put together

```
.
├── index.html   # the page and all of its content
├── style.css    # styling and responsive layout
├── script.js    # scroll animations, sticky nav, mobile menu
├── js-icon.png  # favicon
└── files/       # resume and certificate PDFs
```

Fonts are Inter and JetBrains Mono from Google Fonts. The scroll animations use `IntersectionObserver`, so there are no libraries to install.

## Running it locally

Open `index.html` in a browser. If you'd rather use a local server:

```bash
python -m http.server 8000
```

Then go to http://localhost:8000.

## Updating it

Edit the files, then:

```bash
git add .
git commit -m "what I changed"
git push
```

GitHub Pages picks up the change in about a minute.

## Contact

- Email: [jaylensze@gmail.com](mailto:jaylensze@gmail.com)
- LinkedIn: [linkedin.com/in/jaylensze](https://www.linkedin.com/in/jaylensze/)
- GitHub: [github.com/JaylenSze](https://github.com/JaylenSze)
