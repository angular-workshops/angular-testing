import { Song } from './song';

export class Player {
  currentSong: Song;
  isPlaying: boolean;

  play(song) {
    this.currentSong = song;
    this.isPlaying = true;
  }

  pause() {
    this.isPlaying = false;
  }

  resume() {
    if (this.isPlaying) {
      throw new Error('song is already playing');
    }
    this.isPlaying = true;
  }

  makeFavorite() {
    this.currentSong.persistFavoriteStatus(true);
  }
}
