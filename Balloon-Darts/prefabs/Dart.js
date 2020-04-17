// Dart prefab
class Dart extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);

      // add Dart sfx
      this.sfxDart = scene.sound.add('sfx_dart');
    }

    update() {
        // left/right movement
        if(!this.isFiring){
            if(keyA.isDown && this.x >=47){
                this.x -= 2;
            } else if (keyD.isDown && this.x <= 578){
                this.x += 2;
            }   
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
            this.sfxDart.play();  // play sfx
        }
        // if fired, move up
        if(this.isFiring && this.y >= 108){
            this.y -= 2;
        }
        // reset on miss
        if(this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }
    // reset Dart to "ground"
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}

