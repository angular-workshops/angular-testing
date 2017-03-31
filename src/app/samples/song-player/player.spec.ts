import { Player } from './player';
import { Song } from './song';

describe('Player', function() {
  let player: Player;
  let song: Song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  describe('play(song)', () => {

    it('should update currentSong and isPlaying', () => {
      player.play(song);
      expect(player.currentSong).toEqual(song);
      expect(player.isPlaying).toBe(true);
    });

    it('should play the song (using custom matcher)', () => {
      player.play(song);
      expect(player).toBePlaying(song);
    });
  });

  describe('makeFavorite()', () => {
    it('should update the song that it is a favorite (using createSpy)', () => {
      song.persistFavoriteStatus = jasmine.createSpy('persistFavoriteStatus');
      player.play(song);
      player.makeFavorite();
      expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });

    it('should update the song that it is a favorite (using spyOn)', () => {
      spyOn(song, 'persistFavoriteStatus');
      player.play(song);
      player.makeFavorite();
      expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });

    it('should update the song that it is a favorite (using createSpyObj)', () => {
      const mockSong = jasmine.createSpyObj('song', ['persistFavoriteStatus']);
      player.play(mockSong);
      player.makeFavorite();
      expect(mockSong.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });
  });
});
