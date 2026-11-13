import { Post } from "@/types";


export const seedPosts: Post[] = [
  {
    id: 1,
    title: 'Optimizing Sleep Architecture for Peak Cognitive Performance',
    slug: 'sleep',
    excerpt: 'Discover how deep sleep cycles dictate mental clarity, recovery rates, and longevity.',
    content:'Sleep is not merely a period of inactivity; it is an active state of neurological restoration. During slow-wave sleep (SWS), the glymphatic system clears metabolic waste products accumulated during waking hours. To maximize your cognitive output, focus on consistent circadian alignment, limiting blue light exposure 90 minutes before rest, and maintaining a bedroom ambient temperature between 15-18°C.',
    image_url: 'https://cdn.pixabay.com/photo/2024/03/07/07/02/ai-generated-8617809_1280.jpg',
    author: 'Dr. Erica Johnsson',
    published_at: '2026-08-21'

  },
  {
    id: 2,
    title: 'The Science of Zone 2 Cardio: Building Metabolic Health',
    slug: 'cardio',
    excerpt: 'Why low-intensity steady-state training is the ultimate foundation for mitochondrial efficiency.',
    content:'Zone 2 cardio—performed at an intensity where you can still maintain a conversation—targets slow-twitch muscle fibers. This stimulates mitochondrial biogenesis and enhances your cells ability to oxidize both fats and glucose. Incorporating 3 to 4 sessions of 45 minutes weekly dramatically lowers metabolic disease risk and builds enduring aerobic capacity.',
    image_url: 'https://cdn.pixabay.com/photo/2017/08/04/01/52/karate-2578819_1280.jpg',
    author: 'Marcus Helander, PT',
    published_at: '2026-08-22'

  },
  {
    id: 3,
    title: 'Micronutrient Density: Beyond the Macronutrient Split',
    slug: 'nutrition',
    excerpt: 'Unlock cellular vitality by prioritizing foods rich in essential vitamins, minerals, and polyphenols.',
    content:'While tracking macros (proteins, carbs, fats) is crucial for body composition, true physiological vitality stems from micronutrients. Organ meats, dark leafy greens, berries, and brightly colored root vegetables deliver critical enzymatic cofactors required for energy production, hormonal regulation, and robust antioxidant defense.',
    image_url: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg',
    author: 'Sarah Sonder, NS',
    published_at: '2026-08-23'

  },
];
