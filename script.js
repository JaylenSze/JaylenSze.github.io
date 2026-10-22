/* =============================================
   SCROLL-DRIVEN REVEAL
   ============================================= */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings in the same parent
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 80}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* =============================================
   STICKY NAV STYLE ON SCROLL
   ============================================= */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* =============================================
   MOBILE HAMBURGER
   ============================================= */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* =============================================
   ACTIVE NAV LINK HIGHLIGHT
   ============================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px' }
);

sections.forEach(s => sectionObserver.observe(s));


/* =============================================
   TIMELINE: scroll fill, lit dots, expand/collapse
   ============================================= */
const vtl = document.getElementById('vtl');
if (vtl) {
  const fill = document.getElementById('vtlFill');
  const items = [...vtl.querySelectorAll('.vtl__item')];
  const updateTimeline = () => {
    const rect = vtl.getBoundingClientRect();
    const mid = window.innerHeight * 0.55;
    const progress = Math.min(Math.max(mid - rect.top, 0), rect.height);
    fill.style.height = progress + 'px';
    items.forEach(it => it.classList.toggle('lit', it.getBoundingClientRect().top + 30 < mid));
  };
  window.addEventListener('scroll', updateTimeline, { passive: true });
  window.addEventListener('resize', updateTimeline);
  updateTimeline();

  vtl.querySelectorAll('.vtl__more').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.vtl__item');
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.firstChild.textContent = open ? 'Show less' : 'Show more';
      updateTimeline();
    });
  });
}
