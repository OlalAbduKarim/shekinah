
import { TeamMember, Sermon, Event, Devotional, GalleryImage } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Media', path: '/media' },
  { name: 'Events', path: '/events' },
  { name: 'Devotions', path: '/devotions' },
  { name: 'Contact', path: '/contact' },
];

export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
};

export const CONTACT_INFO = {
    email: 'shekinahglorywc@gmail.com',
    phone: '+1 (123) 456-7890',
    whatsapp: '+1 (123) 456-7890',
    address: '123 Glory Avenue, Faith City, FC 54321',
};

export const MOCK_LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: 'Apostle Dr. John Doe',
    role: 'Senior Pastor & Founder',
    bio: 'Apostle Dr. John Doe is the visionary founder of Shekinah Glory Worship Center. With over 30 years in ministry, his passion is to see lives transformed by the power of God\'s word and the manifestation of His glory. His teachings emphasize faith, purpose, and excellence.',
    imageUrl: 'https://picsum.photos/id/1005/400/400',
  },
  {
    name: 'Rev. Jane Smith',
    role: 'Associate Pastor',
    bio: 'Rev. Jane Smith serves with a heart for worship and community. She oversees our worship and arts ministry, small groups, and community outreach programs, ensuring that everyone who walks through our doors feels the love of Christ.',
    imageUrl: 'https://picsum.photos/id/1011/400/400',
  },
  {
    name: 'Elder Michael Brown',
    role: 'Head of Administration',
    bio: 'Elder Michael Brown manages the operational and administrative functions of the church. His dedication and strategic oversight ensure that the church’s vision is supported by a foundation of excellence and integrity.',
    imageUrl: 'https://picsum.photos/id/1025/400/400',
  },
];


export const MOCK_SERMONS: Sermon[] = [
  { title: 'The Power of His Presence', speaker: 'Apostle Dr. John Doe', date: '2024-07-21', videoId: 'dQw4w9WgXcQ' },
  { title: 'Walking in Divine Purpose', speaker: 'Apostle Dr. John Doe', date: '2024-07-14', videoId: '3tmd-ClpJxA' },
  { title: 'Unlocking Your Faith', speaker: 'Rev. Jane Smith', date: '2024-07-07', videoId: 'fC7oUOaSt7M' },
  { title: 'The Heart of Worship', speaker: 'Rev. Jane Smith', date: '2024-06-30', videoId: 'sO4a_1_g_d8' },
];

export const MOCK_EVENTS: Event[] = [
  {
    title: 'Annual Glory Conference 2024',
    date: 'August 15-18, 2024',
    time: '6:00 PM Daily',
    location: 'Main Sanctuary',
    description: 'Join us for our annual conference focused on experiencing the tangible glory of God. Guest speakers, powerful worship, and life-changing encounters await.',
    imageUrl: 'https://picsum.photos/id/10/600/400',
  },
  {
    title: 'Community Outreach Day',
    date: 'September 7, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'Faith City Park',
    description: 'A day of giving back to our community with food drives, free health screenings, and fun activities for the whole family. Be the hands and feet of Jesus.',
    imageUrl: 'https://picsum.photos/id/20/600/400',
  },
  {
    title: 'All Night Prayer Vigil',
    date: 'September 27, 2024',
    time: '10:00 PM - 5:00 AM',
    location: 'Prayer Chapel',
    description: 'A dedicated night of fervent prayer and intercession for our church, community, and nations. Come and stand in the gap.',
    imageUrl: 'https://picsum.photos/id/30/600/400',
  },
];

export const MOCK_DEVOTIONALS: Devotional[] = [
    { title: 'A Morning Reflection on Grace', author: 'Apostle Dr. John Doe', date: 'July 22, 2024', excerpt: 'Start your day meditating on the unending and unmerited grace of God. It is more than forgiveness; it is the power to live victoriously...', imageUrl: 'https://picsum.photos/id/12/600/400' },
    { title: 'Finding Peace in the Storm', author: 'Rev. Jane Smith', date: 'July 15, 2024', excerpt: 'Life\'s storms are inevitable, but our response is what matters. Learn how to anchor your soul in the Prince of Peace and find tranquility amidst chaos.', imageUrl: 'https://picsum.photos/id/13/600/400' },
    { title: 'The Purpose of Your Calling', author: 'Apostle Dr. John Doe', date: 'July 8, 2024', excerpt: 'You were created on purpose, for a purpose. Discover the keys to unlocking your divine assignment and making an eternal impact.', imageUrl: 'https://picsum.photos/id/14/600/400' },
];

export const MOCK_GALLERY: GalleryImage[] = [
    { id: 1, src: 'https://picsum.photos/id/101/800/600', alt: 'Worship service in progress' },
    { id: 2, src: 'https://picsum.photos/id/102/800/600', alt: 'Church congregation smiling' },
    { id: 3, src: 'https://picsum.photos/id/103/800/600', alt: 'Pastor preaching from the pulpit' },
    { id: 4, src: 'https://picsum.photos/id/104/800/600', alt: 'Community outreach event' },
    { id: 5, src: 'https://picsum.photos/id/106/800/600', alt: 'Youth ministry group photo' },
    { id: 6, src: 'https://picsum.photos/id/108/800/600', alt: 'Choir singing powerfully' },
    { id: 7, src: 'https://picsum.photos/id/109/800/600', alt: 'Baptism ceremony' },
    { id: 8, src: 'https://picsum.photos/id/110/800/600', alt: 'Small group Bible study' },
    { id: 9, src: 'https://picsum.photos/id/111/800/600', alt: 'Church building exterior' },
];
