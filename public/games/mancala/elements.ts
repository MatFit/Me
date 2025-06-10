import Phaser from "phaser";


export default class Button extends Phaser.GameObjects.Text {

    scene : Phaser.Scene;
    onClick : () => void;
    color : string;

    constructor(scene : Phaser.Scene, x : number, y : number, text : string, onClick: () => void) {
        super(scene, x, y, text, {});
        this.scene = scene;
        this.onClick = onClick;
    }    

    stylize(style : {}, color : string) {
        this.setStyle(style);
        this.color = color;
        return this;
    }
    activate() {
        this.scene.add.existing(this).setInteractive();
        
        this.on('pointerover', () => {
            this.setStyle({ color: '#ffffff' });
            console.log("testover");
        });
        this.on('pointerout', () => {
            this.setStyle({ color: '#bb9059' });
            console.log("testout");
        });

        this.on('pointerdown', this.onClick);
        return this;
    }
}