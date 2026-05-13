export interface Game {
  id: string;
  title: string;
  description: string;
  category: 'Action' | 'Puzzle' | 'Racing' | 'Sports' | 'Arcade' | 'Strategy';
  thumbnailUrl: string;
  iframeUrl: string;
  isFeatured?: boolean;
}

export type Category = Game['category'] | 'All';
