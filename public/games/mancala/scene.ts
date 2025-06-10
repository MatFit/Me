
import Phaser from "phaser";
import Button from './elements'
import { games } from "@/lib/games";

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

  // Misc
  gameStart : boolean = false;

  constructor() {
    super("mancala");
  }
  preload(){
    this.load.image('test','/games/mancala/game_assets/bird_with_balls.jpg');
  }
  create(){
    this.designStartUI();
  }

  startGame() {
    if (!this.gameStart) {
      console.log("Game start");
      this.gameStart = true;
    }
  }

  designStartUI() {
    const center_X = this.cameras.main.width / 2 - 80;
    const center_Y = this.cameras.main.height / 2 - 100;

    this.styleBackground();

    // Main button
    const mainButton = new Button(this, center_X, center_Y, 'MANCALA', () => this.startGame()).stylize({
      fontSize: '36px',
      color: '#bb9059',
      padding: { x : 10, y : 10}
    }, '#bb9059').activate();


    
    // Sub header
    this.add.text(center_X + 20, center_Y + 50, "Click 'Mancala' to start!", {
      fontSize: '36',
      color: '#bb9059'
    });
  }

  styleBackground() {
    this.cameras.main.setBackgroundColor("cfb997");
    const { width, height } = this.scale;          
    const borderThickness = 6;                    
    const borderColor = 0xffffff;                  

    this.add.graphics().lineStyle(borderThickness, borderColor, 1).strokeRect(0, 0, width, height);
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
    let index = -1;
    if (this.current_player == 1) {
      index = pit - 1;
    }
    else if (this.current_player == 2) {
      index = this.player_2_pit[0] + pit - 1;
    }

    let stones = this.board[index];
    this.board[index] = 0;
    
    while (index != 0) {
      index = (index + 1) % this.board.length; // Remain within bounds of board

      // Opposing mancala doesn't increment
      if ((this.current_player == 1 && index == this.player_2_mancala_index) || (this.current_player == 2 && index == this.player_1_mancala_index)){
        continue;
      } 

      // Anything else, yes
      this.board[index] += 1;
      stones -= 1;
    }
    
  }
}

