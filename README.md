# The Pulse – Health Blog Showcase

![](./public/docker-health-blog.png)

A showcase health blog built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** and **PostgreSQL**,
packaged for **Docker**. Dark carbon-fiber theme with orange highlights.

## Quick start (Docker)

```bash
docker compose up --build
```

Then open http://localhost:3000.

On first request the app creates the database schema and inserts showcase data
(3 articles with cover images). Data persists in the `pgdata` Docker volume.
To start fresh: `docker compose down -v`.

Optional: copy `.env.example` to `.env` to change the database credentials
(the defaults are for local development only).

## Local development

Run only the database in Docker, and Next.js on your machine:

```bash
docker compose up -d db
cp .env.example .env.local
npm install
npm run dev
```

## How it works

| Concern              | Where                                                                       |
| -------------------- | --------------------------------------------------------------------------- |
| Schema + seeding     | `src/lib/db.ts` (runs once, guarded by a Postgres advisory lock)            |
| Showcase articles    | `src/lib/seed-data.ts`                                                      |
| Queries              | `src/lib/queries/posts.ts`                                                  |
| Pages                | `src/app/page.tsx`, `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx` |
| Theme (carbon fiber) | `src/app/globals.css`, `tailwind.config.ts`                                 |

## Adding your own posts

Insert an image and a post directly in PostgreSQL, for example:

```sql
INSERT INTO posts (id, title, slug, excerpt, content, image_url, author, published_at)
VALUES ('4', 'My post', 'my-slug', 'My excerpt', 'My content', 'https://my-url', 'Author name', 'Date');
```

## Notes

- Content is sample text for demonstration and is not medical advice.
- Pages are rendered dynamically, so the build does not need a database connection.
