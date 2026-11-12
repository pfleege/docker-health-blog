// src/lib/db.ts

import { Pool, type PoolClient } from "pg";
import { seedPosts } from "./seed-data";

declare global {
  // eslint-disable-next-line no-var
  var __pgPool: Pool | undefined;
  // eslint-disable-next-line no-var
  var __dbReady: Promise<void> | undefined;

}

const connectionString =
  process.env.DATABASE_URL ?? "postgres://health:health_dev_password@localhost:5432/health";

export const pool: Pool = globalThis.__pgPool ?? new Pool({ connectionString, max: 10 });
if (process.env.NODE_ENV !== "production") globalThis.__pgPool = pool;

const SCHEMA = `
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS posts_published_at_idx ON posts (published_at DESC);
`;

async function seed(client: PoolClient): Promise<void> {
  await client.query("BEGIN");
  try {
    for (const post of seedPosts) {

      await client.query(
        `INSERT INTO posts
           (id, title, slug, excerpt, content, image_url, author, published_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`,
        [
          post.id,
          post.title,
          post.slug,
          post.excerpt,
          post.content,
          post.image_url,
          post.author,
          post.published_at,
        ],
      );
    }
    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  }
}



async function init(): Promise<void> {
  const client = await pool.connect();
  try {
    // Use advisory lock to avoid parallel server work.
    await client.query("SELECT pg_advisory_lock(424242)");
    try {
      await client.query(SCHEMA);
      const { rows } = await client.query<{ count: number }>("SELECT count(*)::int AS count FROM posts");
      if (rows[0].count === 0) {
        console.log("[db] Empty database detected, inserting showcase data...");
        await seed(client);

      }
    } finally {
      await client.query("SELECT pg_advisory_unlock(424242)");
    }
  } finally {
    client.release();
  }
}

// Create schema + add showcase data
export function ensureDatabase(): Promise<void> {
  if (!globalThis.__dbReady) {
    globalThis.__dbReady = init().catch((err) => {
      globalThis.__dbReady = undefined; // allow retry on next request
      throw err;
    });
  }
  return globalThis.__dbReady;
}
