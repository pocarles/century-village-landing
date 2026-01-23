import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const academyPosts = await getCollection('academy');
  
  // Sort by date (newest first)
  const sortedPosts = academyPosts.sort((a, b) =>
    b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: 'CenturySync Academy',
    description: 'Educational resources, compliance guides, and best practices for Florida condominium association boards.',
    site: context.site || 'https://centurysync.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: post.data.author,
      categories: [post.data.category, ...post.data.tags],
      link: `/academy/${post.slug}/`,
      content: post.body, // Full content RSS
    })),
    customData: `
      <language>en-us</language>
      <copyright>Copyright ${new Date().getFullYear()} CenturySync</copyright>
      <managingEditor>hello@centurysync.com (CenturySync Team)</managingEditor>
      <webMaster>hello@centurysync.com (CenturySync Team)</webMaster>
      <image>
        <url>https://centurysync.com/logo.png</url>
        <title>CenturySync Academy</title>
        <link>https://centurysync.com/academy</link>
      </image>
    `,
    stylesheet: false,
  });
}
