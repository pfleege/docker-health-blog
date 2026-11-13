// src/types/index.ts

export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  published_at: string;
}

export interface BulletPoint {
  label: string;
  text: string;
}

export interface TextContentSection {
  subtitle: string;
  subtext: string[];
  bulletPoints: BulletPoint[];
}

export interface BlogPostSeed {
  title: string;
  textContent: TextContentSection[];
}

export interface BlogArticle {
  id: number;
  topic: string;
  title: string;
  textContent: TextContentSection[];
}