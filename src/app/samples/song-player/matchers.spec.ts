import { Player } from './player';
import { Song } from './song';

function isSongPlaying(player: Player, expected: Song) {
  return player.currentSong === expected && player.isPlaying;
}

function toBePlayingMatcher() {
  return {
    compare(actual, expected) {
      return { pass: isSongPlaying(actual, expected) };
    }
  };
}

beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: toBePlayingMatcher
  });
});
