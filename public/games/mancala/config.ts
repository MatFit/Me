import MancalaScene from "./scene";

export const mancalaConfig = {
  type: Phaser.AUTO,
  parent: "phaser-container",
  scale: {
    width: 1000,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#1e1e1e",
  physics: { default: "arcade" },
  scene: [MancalaScene],
};
