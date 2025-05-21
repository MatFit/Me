import Phaser from "phaser";

export default class MancalaScene extends Phaser.Scene {
  constructor() {
    super("MancalaScene");
  }
  create(){
    const { centerX, centerY } = this.cameras.main;
    this.add.text(centerX, centerY, "Hii").setOrigin(0.5);
  }
}
