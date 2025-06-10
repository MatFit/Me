import Phaser from "phaser";


export default class Button extends Phaser.GameObjects.Text {
    constructor(scene : Phaser.Scene, x : number, y : number, text : string, onClick: () => void) {
        super(scene, x, y, text, {
            fontSize: '36px',
            color: '#ffffff',
            padding: { x: 20, y: 10 },
        });
        
        // Add to scene
        scene.add.existing(this).setInteractive();
        
        this.on('pointerover', () => {
            this.setStyle({ color: '#ffff00' });
            console.log("testover");
        });
        this.on('pointerout', () => {
            this.setStyle({ color: '#ffffff' });
            console.log("testout");
        });

        this.on('pointerdown', onClick);
    }    
}