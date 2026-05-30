import { Song, Artist, Album, Playlist, FriendActivity } from '../types';

export const mockSongs: Song[] = [
  {
    id: 's1',
    title: 'Starboy',
    artistId: 'a1',
    artistName: 'The Weeknd',
    albumId: 'al1',
    albumName: 'Starboy',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300',
    duration: 230,
    plays: 1250000000,
  },
  {
    id: 's2',
    title: 'Blinding Lights',
    artistId: 'a1',
    artistName: 'The Weeknd',
    albumId: 'al2',
    albumName: 'After Hours',
    coverUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=300',
    duration: 200,
    plays: 3500000000,
  },
  {
    id: 's3',
    title: 'Midnight City',
    artistId: 'a2',
    artistName: 'M83',
    albumId: 'al3',
    albumName: 'Hurry Up, We\'re Dreaming',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300',
    duration: 243,
    plays: 850000000,
  },
  {
    id: 's4',
    title: 'Levitating',
    artistId: 'a3',
    artistName: 'Dua Lipa',
    albumId: 'al4',
    albumName: 'Future Nostalgia',
    coverUrl: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=300',
    duration: 203,
    plays: 1800000000,
  },
  {
    id: 's5',
    title: 'As It Was',
    artistId: 'a4',
    artistName: 'Harry Styles',
    albumId: 'al5',
    albumName: 'Harry\'s House',
    coverUrl: 'https://images.unsplash.com/photo-1621360841013-c76831f12560?auto=format&fit=crop&q=80&w=300',
    duration: 167,
    plays: 2100000000,
  }
];

export const mockArtists: Artist[] = [
  {
    id: 'a1',
    name: 'The Weeknd',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5f923?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 105000000,
    bio: 'Abel Tesfaye, known as The Weeknd, is a Canadian singer, songwriter, and record producer...',
    topSongs: ['s1', 's2'],
    albums: ['al1', 'al2']
  },
  {
    id: 'a2',
    name: 'M83',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 12000000,
    bio: 'M83 is a French electronic music project formed in Antibes...',
    topSongs: ['s3'],
    albums: ['al3']
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: 'p1',
    name: 'Late Night Drives',
    description: 'The perfect soundtrack for empty roads and streetlights.',
    creatorId: 'u1',
    creatorName: 'Shrezz Editors',
    coverUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=300',
    songs: ['s2', 's3', 's1'],
    likes: 45032
  },
  {
    id: 'p2',
    name: 'Top Hits 2026',
    description: 'What the world is listening to right now.',
    creatorId: 'u1',
    creatorName: 'Shrezz',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300',
    songs: ['s5', 's4', 's2'],
    likes: 1200500
  }
];

export const mockAlbums: Album[] = [
  {
    id: 'al2',
    title: 'After Hours',
    artistId: 'a1',
    artistName: 'The Weeknd',
    coverUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=300',
    releaseYear: 2020,
    songs: ['s2'],
    type: 'Album'
  },
  {
    id: 'al4',
    title: 'Future Nostalgia',
    artistId: 'a3',
    artistName: 'Dua Lipa',
    coverUrl: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=300',
    releaseYear: 2020,
    songs: ['s4'],
    type: 'Album'
  }
];

export const mockFriendActivity: FriendActivity[] = [
  {
    userId: 'u2',
    userName: 'Alex Chen',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
    song: mockSongs[1], // Blinding Lights
    timestamp: '2m ago'
  },
  {
    userId: 'u3',
    userName: 'Sarah Jenkins',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    song: mockSongs[4], // As It Was
    timestamp: '15m ago'
  },
  {
    userId: 'u4',
    userName: 'Marcus Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100',
    song: mockSongs[2], // Midnight City
    timestamp: '1h ago'
  }
];

export const getSongById = (id: string) => mockSongs.find(s => s.id === id);
export const getArtistById = (id: string) => mockArtists.find(a => a.id === id);
export const getPlaylistById = (id: string) => mockPlaylists.find(p => p.id === id);
export const getAlbumById = (id: string) => mockAlbums.find(a => a.id === id);
