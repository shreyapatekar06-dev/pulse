import { Song, Artist, Album, Playlist, FriendActivity } from '../types';

export interface LyricLine {
  time: number; // in seconds
  text: string;
}

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
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
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
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 's3',
    title: 'Midnight City',
    artistId: 'a2',
    artistName: 'M83',
    albumId: 'al3',
    albumName: "Hurry Up, We're Dreaming",
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300',
    duration: 243,
    plays: 850000000,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
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
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  },
  {
    id: 's5',
    title: 'As It Was',
    artistId: 'a4',
    artistName: 'Harry Styles',
    albumId: 'al5',
    albumName: "Harry's House",
    coverUrl: 'https://images.unsplash.com/photo-1621360841013-c76831f12560?auto=format&fit=crop&q=80&w=300',
    duration: 167,
    plays: 2100000000,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
  },
  {
    id: 's6',
    title: 'Ocean Eyes',
    artistId: 'a5',
    artistName: 'Billie Eilish',
    albumId: 'al6',
    albumName: "Don't Smile at Me",
    coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=300',
    duration: 200,
    plays: 1100000000,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
  },
  {
    id: 's7',
    title: 'Get Lucky',
    artistId: 'a6',
    artistName: 'Daft Punk',
    albumId: 'al7',
    albumName: 'Random Access Memories',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300',
    duration: 249,
    plays: 950000000,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
  },
  {
    id: 's8',
    title: 'Summertime Sadness',
    artistId: 'a7',
    artistName: 'Lana Del Rey',
    albumId: 'al8',
    albumName: 'Born to Die',
    coverUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=300',
    duration: 265,
    plays: 870000000,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
  },
  {
    id: 's9',
    title: 'Time',
    artistId: 'a8',
    artistName: 'Hans Zimmer',
    albumId: 'al9',
    albumName: 'Inception OST',
    coverUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=300',
    duration: 275,
    plays: 430000000,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
  },
  {
    id: 's10',
    title: 'Sweater Weather',
    artistId: 'a9',
    artistName: 'The Neighbourhood',
    albumId: 'al10',
    albumName: 'I Love You.',
    coverUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=300',
    duration: 240,
    plays: 2400000000,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3'
  }
];

export const mockArtists: Artist[] = [
  {
    id: 'a1',
    name: 'The Weeknd',
    imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 114500000,
    bio: 'Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer-songwriter and record producer. Known for his sonic versatility and dark lyricism, his music explores escapism, romance, and melancholia.',
    topSongs: ['s1', 's2'],
    albums: ['al1', 'al2']
  },
  {
    id: 'a2',
    name: 'M83',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 14200000,
    bio: 'M83 is the French electronic music project of Anthony Gonzalez. The synth-pop, dream-pop sound is characterized by heavy use of reverb effects and lyrics spoken softly over loud instruments.',
    topSongs: ['s3'],
    albums: ['al3']
  },
  {
    id: 'a3',
    name: 'Dua Lipa',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 78900000,
    bio: 'Dua Lipa is an English and Albanian singer. Possessing a mezzo-soprano vocal range, she is known for her signature disco-pop and dance-pop style.',
    topSongs: ['s4'],
    albums: ['al4']
  },
  {
    id: 'a4',
    name: 'Harry Styles',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 62400000,
    bio: 'Harry Edward Styles is an English singer, songwriter, and actor. His musical career began in 2010 as part of the boy band One Direction before launching a massive solo career.',
    topSongs: ['s5'],
    albums: ['al5']
  },
  {
    id: 'a5',
    name: 'Billie Eilish',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 94800000,
    bio: 'Billie Eilish Pirate Baird O\'Connell is an American singer-songwriter. She first gained public attention in 2015 with her debut single "Ocean Eyes".',
    topSongs: ['s6'],
    albums: ['al6']
  },
  {
    id: 'a6',
    name: 'Daft Punk',
    imageUrl: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 51200000,
    bio: 'Daft Punk were a French electronic music duo formed in 1993 in Paris by Guy-Manuel de Homem-Christo and Thomas Bangalter. They achieved popularity in the late 1990s as part of the French house movement.',
    topSongs: ['s7'],
    albums: ['al7']
  },
  {
    id: 'a7',
    name: 'Lana Del Rey',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 58100000,
    bio: 'Elizabeth Woolridge Grant, known professionally as Lana Del Rey, is an American singer-songwriter. Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia.',
    topSongs: ['s8'],
    albums: ['al8']
  },
  {
    id: 'a8',
    name: 'Hans Zimmer',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800',
    monthlyListeners: 28500000,
    bio: 'Hans Florian Zimmer is a German film score composer and music producer. He has won two Oscars and four Grammys, and was nominated for two Emmys and a Tony.',
    topSongs: ['s9'],
    albums: ['al9']
  }
];

export const mockAlbums: Album[] = [
  {
    id: 'al1',
    title: 'Starboy',
    artistId: 'a1',
    artistName: 'The Weeknd',
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300',
    releaseYear: 2016,
    songs: ['s1'],
    type: 'Album'
  },
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
    id: 'al3',
    title: "Hurry Up, We're Dreaming",
    artistId: 'a2',
    artistName: 'M83',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300',
    releaseYear: 2011,
    songs: ['s3'],
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
  },
  {
    id: 'al5',
    title: "Harry's House",
    artistId: 'a4',
    artistName: 'Harry Styles',
    coverUrl: 'https://images.unsplash.com/photo-1621360841013-c76831f12560?auto=format&fit=crop&q=80&w=300',
    releaseYear: 2022,
    songs: ['s5'],
    type: 'Album'
  },
  {
    id: 'al6',
    title: "Don't Smile at Me",
    artistId: 'a5',
    artistName: 'Billie Eilish',
    coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=300',
    releaseYear: 2017,
    songs: ['s6'],
    type: 'EP'
  },
  {
    id: 'al7',
    title: 'Random Access Memories',
    artistId: 'a6',
    artistName: 'Daft Punk',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300',
    releaseYear: 2013,
    songs: ['s7'],
    type: 'Album'
  },
  {
    id: 'al8',
    title: 'Born to Die',
    artistId: 'a7',
    artistName: 'Lana Del Rey',
    coverUrl: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=300',
    releaseYear: 2012,
    songs: ['s8'],
    type: 'Album'
  },
  {
    id: 'al9',
    title: 'Inception OST',
    artistId: 'a8',
    artistName: 'Hans Zimmer',
    coverUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=300',
    releaseYear: 2010,
    songs: ['s9'],
    type: 'Album'
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: 'p1',
    name: 'Chill Nights',
    description: 'Mellow synths and soft beats for winding down.',
    creatorId: 'u1',
    creatorName: 'PULSE Editor',
    coverUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=300',
    songs: ['s6', 's8', 's3'],
    likes: 382900
  },
  {
    id: 'p2',
    name: 'Midnight Drive',
    description: 'Fast roads, bright streetlights, and driving synthwave tracks.',
    creatorId: 'u1',
    creatorName: 'PULSE Editor',
    coverUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=300',
    songs: ['s2', 's1', 's7', 's3'],
    likes: 1205921
  },
  {
    id: 'p3',
    name: 'Focus Mode',
    description: 'Immersive atmospheric soundscapes to keep you in the zone.',
    creatorId: 'u1',
    creatorName: 'PULSE Editor',
    coverUrl: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?auto=format&fit=crop&q=80&w=300',
    songs: ['s9', 's3'],
    likes: 852030
  },
  {
    id: 'p4',
    name: 'Workout Energy',
    description: 'High-BPM rhythms and basslines to push your limits.',
    creatorId: 'u1',
    creatorName: 'PULSE Editor',
    coverUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=300',
    songs: ['s4', 's7', 's1'],
    likes: 2450893
  },
  {
    id: 'p5',
    name: 'Lo-Fi Dreams',
    description: 'Beautiful nostalgic beats to relax, study, or daydream to.',
    creatorId: 'u1',
    creatorName: 'PULSE Editor',
    coverUrl: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&q=80&w=300',
    songs: ['s5', 's6', 's10'],
    likes: 673102
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

// Rich lyrics mapped by song ID
export const mockLyrics: Record<string, LyricLine[]> = {
  s1: [
    { time: 0, text: "♪ (Intro - Starboy) ♪" },
    { time: 7, text: "I'm tryna put you in the worst mood, ah" },
    { time: 11, text: "P1 cleaner than your church shoes, ah" },
    { time: 15, text: "Milli point two on the coupe, ah" },
    { time: 19, text: "House so empty, need a centerpiece" },
    { time: 23, text: "Twenty racks a table cut from ebony" },
    { time: 27, text: "Cut that ivory into skinny pieces" },
    { time: 31, text: "Then she clean it with her face but I love her baby" },
    { time: 35, text: "Way too many people think they made me" },
    { time: 39, text: "Well, if they really made me, then replace me" },
    { time: 43, text: "Look what you've done" },
    { time: 47, text: "I'm a motherfucking starboy" },
    { time: 51, text: "Look what you've done" },
    { time: 55, text: "I'm a motherfucking starboy" }
  ],
  s2: [
    { time: 0, text: "♪ (Synthesizer Intro) ♪" },
    { time: 6, text: "Yeah..." },
    { time: 9, text: "I've been on my own for long enough" },
    { time: 16, text: "Maybe you can show me how to love, maybe" },
    { time: 23, text: "I'm going through withdrawals" },
    { time: 27, text: "You don't even have to do too much" },
    { time: 30, text: "You can turn me on with just a touch, baby" },
    { time: 37, text: "I look around and Sin City's cold and empty" },
    { time: 44, text: "No one's around to judge me" },
    { time: 48, text: "I can't see clearly when you're gone" },
    { time: 52, text: "I said, ooh, I'm blinded by the lights" },
    { time: 59, text: "No, I can't sleep until I feel your touch" },
    { time: 66, text: "I said, ooh, I'm drowning in the night" },
    { time: 73, text: "Oh, when I'm like this, you're the one I trust" }
  ],
  s3: [
    { time: 0, text: "♪ (Electronic Beats & Saxophone Intro) ♪" },
    { time: 15, text: "Waiting in a car" },
    { time: 19, text: "Waiting for a ride in the dark" },
    { time: 23, text: "The night city grows" },
    { time: 26, text: "Look at the horizon glow" },
    { time: 30, text: "Waiting in a car" },
    { time: 34, text: "Waiting for a ride in the dark" },
    { time: 38, text: "Drinking in the neon light" },
    { time: 42, text: "Suddenly, the city is so bright!" },
    { time: 46, text: "♪ (Synth Solo Drop) ♪" },
    { time: 60, text: "Midnight city, midnight sun" },
    { time: 64, text: "Everything has just begun..." }
  ],
  s4: [
    { time: 0, text: "If you wanna run away with me, I know a galaxy" },
    { time: 4, text: "And I can take you for a ride" },
    { time: 8, text: "I had a premonition that we fell into a rhythm" },
    { time: 12, text: "Where the music don't stop for life" },
    { time: 15, text: "Glitter in the sky, glitter in my eyes" },
    { time: 19, text: "Shining just the way you like" },
    { time: 23, text: "If you're feeling like you need a little bit of company" },
    { time: 27, text: "You met me at the perfect time" },
    { time: 31, text: "You want me, I want you, baby" },
    { time: 35, text: "My sugarboo, I'm levitating" },
    { time: 39, text: "The Milky Way, we're renegading" },
    { time: 43, text: "Yeah-yeah-yeah-yeah-yeah!" }
  ],
  s5: [
    { time: 0, text: "Hold on, ring in the season" },
    { time: 4, text: "Crying in the instant tea room" },
    { time: 8, text: "Behavior that's so out of character for you" },
    { time: 12, text: "Leave America, two kids follow her" },
    { time: 16, text: "I don't wanna talk about who's doing it first" },
    { time: 20, text: "In this world, it's just us" },
    { time: 24, text: "You know it's not the same as it was" },
    { time: 28, text: "In this world, it's just us" },
    { time: 32, text: "You know it's not the same as it was" },
    { time: 36, text: "As it was, as it was..." }
  ]
};

export const getSongById = (id: string) => mockSongs.find(s => s.id === id);
export const getArtistById = (id: string) => mockArtists.find(a => a.id === id);
export const getPlaylistById = (id: string) => mockPlaylists.find(p => p.id === id);
export const getAlbumById = (id: string) => mockAlbums.find(a => a.id === id);
