import Phaser from "phaser";

export default class PuzzleBoxScene extends Phaser.Scene {
  constructor() {
    super("PuzzleBoxScene");
  }
  create(){
    const { centerX, centerY } = this.cameras.main;
    this.add.text(centerX, centerY, "Hii").setOrigin(0.5);
  }
}
