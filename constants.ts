
import { Sermon, Event, LeadershipMember } from './types';

export const MOCK_SERMONS: Sermon[] = [
  {
    id: 1,
    title: "The Power of Forgiveness",
    speaker: "Bishop Edward Baleke",
    date: "2024-07-21",
    thumbnailUrl: "https://picsum.photos/seed/sermon1/400/225",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Living a Life of Purpose",
    speaker: "Pastor Grace Baleke",
    date: "2024-07-14",
    thumbnailUrl: "https://picsum.photos/seed/sermon2/400/225",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Faith in Times of Trouble",
    speaker: "Pastor Wycliffe Wangatea",
    date: "2024-07-07",
    thumbnailUrl: "https://picsum.photos/seed/sermon3/400/225",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
   {
    id: 4,
    title: "The Heart of a Servant",
    speaker: "Bishop Edward Baleke",
    date: "2024-06-30",
    thumbnailUrl: "https://picsum.photos/seed/sermon4/400/225",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    title: "Worship Night",
    dateTime: "2024-08-02T19:00:00",
    location: "Main Sanctuary",
    description: "Join us for a powerful night of worship and praise. All are welcome!",
    imageUrl: "https://picsum.photos/seed/event1/500/300",
  },
  {
    id: 2,
    title: "Community Outreach: Food Drive",
    dateTime: "2024-08-10T10:00:00",
    location: "Church Parking Lot",
    description: "Help us serve our community by donating non-perishable food items. Volunteers needed!",
    imageUrl: "https://picsum.photos/seed/event2/500/300",
  },
  {
    id: 3,
    title: "Prayer Gathering",
    dateTime: "2024-08-14T18:30:00",
    location: "Prayer Chapel",
    description: "Come together as we lift up our church, community, and nation in prayer.",
    imageUrl: "https://picsum.photos/seed/event3/500/300",
  },
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
    {
        name: "Bishop Edward Baleke",
        role: "Lead Bishop",
        bio: "As the visionary and lead pastor of Shekinah Glory Worship Center, Bishop Edward Baleke shepherds the congregation with profound wisdom and a deep love for God's Word. His powerful teaching lays the foundation for our church's mission.",
        imageUrl: "https://picsum.photos/seed/pastor1/300/300",
    },
    {
        name: "Pastor Grace Baleke",
        role: "Associate Pastor",
        bio: "Pastor Grace Baleke is a gifted teacher and a compassionate leader. She co-labors with Bishop Baleke, providing spiritual guidance and fostering a warm, family-like atmosphere within the church. Her messages inspire believers to deepen their walk with Christ.",
        imageUrl: "https://picsum.photos/seed/pastor2/300/300",
    },
    {
        name: "Pastor Wycliffe Wangatea",
        role: "Associate Pastor",
        bio: "Pastor Wycliffe Wangatea is a dynamic teacher with a passion for biblical truth and practical application. He plays a key role in the teaching ministry of the church, equipping the saints for the work of ministry.",
        imageUrl: "https://picsum.photos/seed/pastor3/300/300",
    },
];