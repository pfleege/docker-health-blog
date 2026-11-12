export interface SeedPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  author: string;
  published_at: string;
}



export const seedPosts: SeedPost[] = [
  {
    id: 1,
    title: 'Title-1',
    slug: 'slug-1',
    excerpt: 'Excerpt-1.',
    content:'Content-1',
    image_url: 'https://cdn.pixabay.com/photo/2020/03/05/00/13/hands-4903050_1280.jpg',
    author: 'Author-1',
    published_at: '2026-08-21'

  },
  {
    id: 2,
    title: 'Title-2',
    slug: 'slug-2',
    excerpt: 'Excerpt-2',
    content:'Content-2',
    image_url: 'https://cdn.pixabay.com/photo/2020/01/21/11/39/running-4782722_960_720.jpg',
    author: 'Author-2',
    published_at: '2026-08-22'

  },
  {
    id: 3,
    title: 'Title-3',
    slug: 'slug-3',
    excerpt: 'Excerpt-3',
    content:'Content-3',
    image_url: 'https://cdn.pixabay.com/photo/2023/09/11/14/19/weight-8246973_960_720.jpg',
    author: 'Author-3',
    published_at: '2026-08-23'

  },
];
