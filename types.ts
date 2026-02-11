
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  videoReference?: string;
  category: string;
  thumbnail: string;
}

export type Category = 'All' | 'Product Design' | 'UI/UX' | 'HCI' | 'Environment' | 'Social';
