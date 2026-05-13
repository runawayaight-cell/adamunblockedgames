import { Game } from '../types';

// Games array with the new Basket Hoop game.
export const GAMES: Game[] = [
  {
    id: 'basket-hoop',
    title: 'Basket Hoop',
    description: 'Shoot some epic hoops and show off your skills in this slam-dunk basketball challenge!',
    category: 'Sports',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
    iframeUrl: 'https://classroom-a.b-cdn.net/games/2024/construct/311/basket-hoop/index-gg.html',
    isFeatured: true
  }
];

export const CATEGORIES: Game['category'][] = ['Action', 'Puzzle', 'Racing', 'Sports', 'Arcade', 'Strategy'];
