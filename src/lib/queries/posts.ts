import { ensureDatabase, pool } from "../db";
import { Post } from "@/types";

interface PostRow {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  published_at: string;
}

const COLUMNS =
  "id, slug, title, excerpt, content, image_url, author, published_at";

function mapRow(row: PostRow): Post {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    image_url: row.image_url,
    author: row.author,
    published_at: row.published_at,
  };
}

export async function getPosts(options: { author?: string; limit?: number } = {}): Promise<Post[]> {
  await ensureDatabase();
  const params: unknown[] = [];
  let where = "";
  if (options.author) {
    params.push(options.author);
    where = `WHERE lower(author) = lower($${params.length})`;
  }
  let limit = "";
  if (options.limit) {
    params.push(options.limit);
    limit = `LIMIT $${params.length}`;
  }
  const { rows } = await pool.query<PostRow>(
    `SELECT ${COLUMNS} FROM posts ${where} ORDER BY published_at DESC ${limit}`,
    params,
  );
  return rows.map(mapRow);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  await ensureDatabase();
  const { rows } = await pool.query<PostRow>(`SELECT ${COLUMNS} FROM posts WHERE slug = $1`, [slug]);
  return rows[0] ? mapRow(rows[0]) : null;
}

export async function getPostById(id: string): Promise<Post | null> {
  await ensureDatabase();
  const { rows } = await pool.query<PostRow>(`SELECT ${COLUMNS} FROM posts WHERE id = $1`, [id]);
  return rows[0] ? mapRow(rows[0]) : null;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("fi-GB", { day: "numeric", month: "long", year: "numeric" }).format(date);
}
