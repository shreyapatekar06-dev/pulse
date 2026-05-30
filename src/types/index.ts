export interface Song {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  albumId: string;
  albumName: string;
  coverUrl: string;
  duration: number; // in seconds
  audioUrl?: string;
  plays: number;
}

export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  monthlyListeners: number;
  bio: string;
  topSongs: string[]; // song ids
  albums: string[]; // album ids
}

export interface Album {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  coverUrl: string;
  releaseYear: number;
  songs: string[]; // song ids
  type: 'Album' | 'EP' | 'Single';
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  creatorId: string;
  creatorName: string;
  coverUrl: string;
  songs: string[]; // song ids
  likes: number;
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  following: string[]; // artist ids
  likedSongs: string[]; // song ids
  playlists: string[]; // playlist ids
}

export interface FriendActivity {
  userId: string;
  userName: string;
  userAvatar: string;
  song: Song;
  timestamp: string;
}
