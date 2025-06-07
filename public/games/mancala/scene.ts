import Phaser, { NONE } from "phaser";

const PITS_PER_PLAYER = 6;
const STONES_PER_PIT = 4;



export default class MancalaScene extends Phaser.Scene {
  // Current Player
  current_player : number = -1;

  // Board with number of stones
  board : number[] = Array((PITS_PER_PLAYER + 1) * 2).fill(STONES_PER_PIT);

  // Players pit index
  player_1_pit : number[] =  Array.from({ length: PITS_PER_PLAYER }, (_, i) => i);
  player_2_pit : number[] = Array.from({ length: PITS_PER_PLAYER }, (_, i) => i + PITS_PER_PLAYER + 1);

  // Mancala index
  player_1_mancala_index : number = PITS_PER_PLAYER;
  player_2_mancala_index : number = this.board.length - 1;

  constructor() {
    super("mancala");
  }
  preload(){
    this.load.image('test','/games/mancala/game_assets/bird_with_balls.jpg');
  }
  create(){
    
  }

  validMove(player_choice : number) {
    if (this.current_player == 1) {
      this.board.at(player_choice - 1) > 0;
    } 
    else if (this.current_player == 2) {
      this.board.at(PITS_PER_PLAYER + player_choice) > 0;
    }
    return false;
  }
  // Check to see if either side has a completely emptied their pits, if so return true
  isTerminal() {
    return this.player_1_pit.every(pit => pit == 0) || this.player_2_pit.every(pit => pit == 0);
  }

  getWinner() {
    // Sum score
    let score_player_1 = this.player_1_mancala_index + this.player_1_pit.reduce((add, current_val) => add + current_val, 0);
    let score_player_2 = this.player_2_mancala_index + this.player_2_pit.reduce((add, current_val) => add + current_val, 0);
    // Return winner
    return score_player_1 > score_player_2 ? 1 : 2;
  }

  executeTurn(pit : number) {
    let index = NONE;
    if (this.current_player == 1) {
      index = pit - 1;
    }
    else if (this.current_player == 2) {
      index = this.player_2_pit[0] + pit - 1;
    }

    
  }
}

