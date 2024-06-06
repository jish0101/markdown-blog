## My Personal Blog - Built with Next.js 14, TypeScript, and MDX

This is a personal blog project built with Next.js 14, TypeScript, and MDX. It provides a simple and clean foundation for writing and publishing blog posts, leveraging Velite for a type-safe data layer.

### Tech Stack

* **Frontend:**
    * Next.js 14: A powerful framework for building performant and scalable React applications.
    * TypeScript: Enhances code readability and maintainability with static typing.
    * MDX: Allows embedding JSX components within Markdown files for interactive content.
* **Data Layer:**
    * Velite.js: Simplifies building type-safe data layers from various file formats (Markdown/MDX, YAML, JSON) using Zod schemas.

### Features

* **Static Site Generation (SSG):** Improves SEO and loading performance by pre-rendering posts at build time.
* **MDX Support:** Write content in Markdown with the flexibility to add interactive elements using JSX.
* **TypeScript:** Enhances code clarity and catches potential errors during development.
* **Type-Safe Data Layer (Velite):** Ensures data consistency and prevents runtime errors.

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/jish0101/markdown-blog.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. (Optional) Configure ESLint and Prettier according to your preferences.

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the Next.js development server and open your blog in the browser at http://localhost:3000 by default.

### Writing Blog Posts

1. Create new MDX files in the `content/blog` directory.
2. Use Markdown syntax for writing content and JSX components for interactive elements.
3. Add frontmatter (metadata) to your posts within the opening `---` block (inspired by YAML).
4. Leverages Velite to define Zod schemas for your blog post data, ensuring type safety.

Here's an example of a basic blog post structure:

```mdx
---
title: "My First Blog Post"
date: 2024-06-07
published: true
---

This is the content of my first blog post! You can use Markdown for formatting and add JSX components for interactivity.
```

### Deployment

You can deploy this project to various platforms that support Next.js applications. Some popular options include:

* Vercel

### Contributing

Feel free to contribute to this project by creating pull requests with improvements or new features. 
