import { getCollection } from 'astro:content';

const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

/** "Mar. 2026", matching the style used across the site. */
export function formatMonth(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** "Mar. 14, 2026" for blog posts. */
export function formatDay(date: Date): string {
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

/** All projects, newest first. */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Published posts (drafts only show in `npm run dev`), newest first. */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
