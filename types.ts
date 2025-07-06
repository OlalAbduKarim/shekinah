
export interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export interface Event {
  id: number;
  title: string;
  dateTime: string; // Changed from date and time to a single ISO-like string
  location: string;
  description: string;
  imageUrl: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Devotional {
  title: string;
  scripture: string;
  body: string;
}