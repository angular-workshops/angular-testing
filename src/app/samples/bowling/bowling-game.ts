class BowlingGame {

  rolls = [];
  currentRoll = 0;

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }

  score() {
    let score = 0;
    let frameIndex = 0;

    const sumOfBallsInFrame = () => this.rolls[frameIndex] + this.rolls[frameIndex + 1];
    const spareBonus = () => this.rolls[frameIndex + 2];
    const strikeBonus = () => this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    const isStrike = () => this.rolls[frameIndex] === 10;
    const isSpare = () => this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;

    for (let frame = 0; frame < 10; frame++) {
      if (isStrike()) {
        score += 10 + strikeBonus();
        frameIndex++;
      } else if (isSpare()) {
        score += 10 + spareBonus();
        frameIndex++;
      } else {
        score += sumOfBallsInFrame();
        frameIndex += 2;
      }
    }
    return score;
  }
}


/* sample game, all strikes, 1st frame is gutter balls
const game = new BowlingGame();
game.roll(0);
game.roll(0);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
game.roll(10);
console.log(game.score());
*/
