import Phaser from "phaser";

export default class MancalaScene extends Phaser.Scene {
  constructor() {
    super("MancalaScene");
  }
  preload(){
    this.load.image('test','assets/bird_with_balls.jpg');
  }
  create(){
    const { centerX, centerY } = this.cameras.main;
    this.add.text(centerX, centerY, "Hii").setOrigin(0.5);

    try {
      this.add.image(400, 300, 'test');
    }
    catch(e){
      console.log(e);
    }
  }
}

