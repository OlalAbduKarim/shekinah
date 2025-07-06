
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Sermon {
  title: string;
  speaker: string;
  date: string;
  videoId: string; // YouTube video ID
}

export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface Devotional {
    title: string;
    author: string;
    date: string;
    excerpt: string;
    imageUrl: string;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}
