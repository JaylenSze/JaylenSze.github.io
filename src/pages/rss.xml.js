import rss from '@astrojs/rss';
import { getPosts } from '../lib/content';

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: "Jaylen Sze's blog",
    description: 'Notes and write-ups on what I am building and learning.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
