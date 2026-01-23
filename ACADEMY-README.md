# CenturySync Academy - Documentation

## Overview

The CenturySync Academy is an educational blog section built with Astro Content Collections, providing compliance guides and best practices for Florida COA boards.

## Features

✅ **Content Collections**: Type-safe content management with Astro  
✅ **Full-Text Search**: Client-side search functionality  
✅ **RSS Feed**: Full-content RSS feed at `/academy/rss.xml`  
✅ **Category Filtering**: Filter articles by category  
✅ **SEO Optimized**: JSON-LD Article schema, meta tags, Twitter Cards  
✅ **Responsive Design**: Mobile-first design matching CenturySync branding  
✅ **Related Articles**: Automatic related content suggestions  
✅ **Social Sharing**: Built-in share buttons for Twitter, Facebook, LinkedIn  
✅ **Table of Contents**: Auto-generated for long articles  

## File Structure

```
src/
├── content/
│   ├── config.ts                      # Content Collections schema
│   └── academy/                       # Academy articles (MDX)
│       ├── understanding-hb1021-compliance.mdx
│       ├── document-retention-florida-coa.mdx
│       └── effective-board-communication.mdx
├── layouts/
│   └── AcademyLayout.astro           # Article page layout
├── pages/
│   └── academy/
│       ├── index.astro               # Academy main page
│       ├── [slug].astro              # Dynamic article pages
│       └── rss.xml.ts                # RSS feed generator
```

## Adding New Articles

### Step 1: Create a New MDX File

Create a new file in `/src/content/academy/` with a descriptive slug:

```bash
touch src/content/academy/my-article-slug.mdx
```

### Step 2: Add Frontmatter

Start your article with YAML frontmatter:

```mdx
---
title: "Your Article Title"
description: "A compelling description for SEO and previews (150-160 characters recommended)"
pubDate: 2026-01-23
author: "CenturySync Team"
category: "Compliance"
tags: ["Tag1", "Tag2", "Tag3"]
featured: false
---

## Your First Heading

Your content starts here...
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ Yes | Article title (appears in headlines and SEO) |
| `description` | string | ✅ Yes | Short summary (used in cards and meta tags) |
| `pubDate` | date | ✅ Yes | Publication date (YYYY-MM-DD format) |
| `author` | string | No | Defaults to "CenturySync Team" |
| `category` | enum | ✅ Yes | Must be one of the predefined categories (see below) |
| `tags` | array | No | Array of tag strings for filtering/search |
| `featured` | boolean | No | Defaults to false; featured articles appear prominently |
| `image` | string | No | Optional image URL for future use |

### Available Categories

- `Compliance`
- `Board Management`
- `Documentation`
- `Communication`
- `Financial`
- `Technology`
- `Legal`

To add a new category, edit `/src/content/config.ts`:

```typescript
category: z.enum([
  'Compliance',
  'Board Management',
  'Documentation',
  'Communication',
  'Financial',
  'Technology',
  'Legal',
  'Your New Category' // Add here
]),
```

### Step 3: Write Your Content

Use standard Markdown/MDX syntax:

```mdx
## Main Section

Regular paragraph text with **bold** and *italic*.

### Subsection

- Bullet point 1
- Bullet point 2
- Bullet point 3

### Another Subsection

1. Numbered list
2. Item 2
3. Item 3

> **Note:** Blockquotes are styled for callouts

[Link text](https://example.com)

`inline code` for technical terms

\`\`\`javascript
// Code blocks are syntax highlighted
const example = "code";
\`\`\`
```

### Step 4: Build and Preview

```bash
npm run dev
```

Visit `http://localhost:4321/academy` to see your article in the list.

Visit `http://localhost:4321/academy/your-slug` to see the full article.

## Content Guidelines

### Writing Style

- **Educational tone**: Professional but approachable
- **Practical focus**: Actionable advice, not just theory
- **Florida-specific**: Reference Florida statutes and regulations
- **Examples**: Use Century Village context when relevant
- **Scannable**: Use headings, lists, and short paragraphs

### SEO Best Practices

1. **Title**: 50-60 characters, include target keyword
2. **Description**: 150-160 characters, compelling summary
3. **Headings**: Use H2 for main sections, H3 for subsections
4. **Keywords**: Naturally include in first paragraph
5. **Internal links**: Link to related Academy articles
6. **External links**: Link to authoritative sources (Florida statutes, etc.)

### Recommended Article Length

- **Quick Guides**: 800-1,200 words
- **In-Depth Articles**: 1,500-2,500 words
- **Comprehensive Guides**: 2,500+ words

## Featured Articles

Set `featured: true` to highlight important articles on the Academy homepage. Limit to 3-5 featured articles at any time.

## RSS Feed

The RSS feed is automatically generated at build time and includes:

- Full article content (not just excerpts)
- Publication dates
- Categories and tags
- Author information

Access at: `https://centurysync.com/academy/rss.xml`

## Search Functionality

The Academy includes client-side search that filters articles by:
- Title
- Description
- Tags
- Content preview

For production, Pagefind will be integrated for full-text search (see Deployment section).

## Social Sharing

Each article includes share buttons for:
- Twitter/X
- Facebook
- LinkedIn
- Copy Link

Open Graph and Twitter Card meta tags are automatically generated.

## Related Articles

Related articles are automatically selected based on:
1. Same category as current article
2. Most recent first
3. Limited to 2 suggestions

## Design Integration

The Academy seamlessly integrates with CenturySync's design system:

- **Colors**: Uses existing Tailwind config (primary-600, accent colors)
- **Typography**: Inter font with defined heading scales
- **Components**: Reuses `.glass`, `.btn-shine`, `.card-hover`, etc.
- **Animations**: `.reveal` animations on scroll
- **Responsive**: Mobile-first breakpoints match main site

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding Pagefind (Production Search)

After building for production:

```bash
# Build the site
npm run build

# Run Pagefind indexer
npx pagefind --site dist

# The search index is created at dist/pagefind/
```

To integrate Pagefind into the build process, add to `package.json`:

```json
{
  "scripts": {
    "build": "astro build && npx pagefind --site dist"
  }
}
```

Then add the Pagefind script to Academy pages:

```html
<script>
  // Load Pagefind
  const pagefind = await import('/pagefind/pagefind.js');
  await pagefind.init();
  
  // Search function
  async function search(query) {
    const results = await pagefind.search(query);
    return results;
  }
</script>
```

## Deployment

The Academy is included in the standard CenturySync build:

```bash
npm run build
```

Output is in `/dist/academy/` and includes:
- `/academy/index.html` - Main Academy page
- `/academy/[slug]/index.html` - Individual articles
- `/academy/rss.xml` - RSS feed

Deploy the entire `/dist/` directory to your hosting provider.

## Sitemap Integration

Academy pages are automatically included in the sitemap thanks to `@astrojs/sitemap` integration. The sitemap is generated at `/sitemap-index.xml`.

## Maintenance

### Regular Tasks

1. **Weekly**: Publish 1-2 new articles
2. **Monthly**: Review and update featured articles
3. **Quarterly**: Audit older articles for accuracy
4. **Annually**: Archive or update outdated compliance information

### Content Calendar Ideas

- HB 1021 compliance updates
- Board management tips
- Document retention guides
- Communication strategies
- Financial planning for COAs
- Technology adoption guides
- Legal requirement summaries
- Seasonal maintenance checklists
- Hurricane preparedness (for Florida)
- Annual meeting planning

## Troubleshooting

### "Module not found" errors

Run: `npm install`

### Articles not showing up

1. Check frontmatter syntax (YAML is sensitive to spacing)
2. Ensure `pubDate` is in YYYY-MM-DD format
3. Verify `category` matches one of the enum values
4. Restart dev server: `npm run dev`

### Build errors

Check the Content Collections schema in `/src/content/config.ts` matches your frontmatter.

### Styling issues

The Academy inherits styles from `/src/styles/global.css`. Changes to Tailwind config require restarting the dev server.

## Future Enhancements

Potential additions for future versions:

- [ ] Full Pagefind integration
- [ ] Author profiles
- [ ] Article series/collections
- [ ] PDF export
- [ ] Comments/discussions
- [ ] Newsletter integration
- [ ] View count tracking
- [ ] Estimated reading progress
- [ ] Print-friendly styling
- [ ] Multi-language support

## Support

Questions? Visit our office hours every Wednesday, 2-5 PM at 100-110 Century Blvd, Suite 202, or email hello@centurysync.com.
