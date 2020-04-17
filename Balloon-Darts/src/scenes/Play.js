class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('dart1', './assets/dart1.png');
        this.load.image('dart2', './assets/dart2.png');
        this.load.image('balloonAnimal1', './assets/balloonAnimal1.png');
        this.load.image('balloonAnimal2', './assets/balloonAnimal2.png');
        this.load.image('balloonAnimal3', './assets/balloonAnimal3.png');
        this.load.image('sky', './assets/sky.png');
        this.load.image('banner', './assets/banner.png');

        // load spritesheet
        this.load.spritesheet('pop1', './assets/balloonPop1.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 3});
        this.load.spritesheet('pop2', './assets/balloonPop2.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 3});
        this.load.spritesheet('pop3', './assets/balloonPop3.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 3});
    }
    
    create() {
        // place tile sprite
        this.sky = this.add.tileSprite(0, 0, 640, 480, 'sky').setOrigin(0,0);

        // white rectangle borders
        this.add.rectangle(5, 5, 630, 5, 0x309D00).setOrigin(0, 0); // top border
        this.add.rectangle(5, 470, 630, 5, 0x309D00).setOrigin(0, 0); // bottom border
        this.add.rectangle(5, 5, 5, 465, 0x309D00).setOrigin(0, 0); // left border
        this.add.rectangle(630, 5, 5, 465, 0x309D00).setOrigin(0, 0); // right border

        // black rectangle borders
        this.add.rectangle(10, 10, 620, 5, 0xFFBF00).setOrigin(0, 0); // top border
        this.add.rectangle(10, 465, 620, 5, 0xFFBF00).setOrigin(0, 0); // bottom border
        this.add.rectangle(10, 10, 5, 460, 0xFFBF00).setOrigin(0, 0); // left border
        this.add.rectangle(625, 10, 5, 460, 0xFFBF00).setOrigin(0, 0); // right border

        // white rectangle borders
        this.add.rectangle(15, 15, 610, 5, 0xFF870A).setOrigin(0, 0); // top border
        this.add.rectangle(15, 460, 610, 5, 0xFF870A).setOrigin(0, 0); // bottom border
        this.add.rectangle(15, 15, 5, 450, 0xFF870A).setOrigin(0, 0); // left border
        this.add.rectangle(620, 15, 5, 450, 0xFF870A).setOrigin(0, 0); // right border

        // black rectangle borders
        this.add.rectangle(20, 20, 600, 5, 0xCC0000).setOrigin(0, 0); // top border
        this.add.rectangle(20, 455, 600, 5, 0xCC0000).setOrigin(0, 0); // bottom border
        this.add.rectangle(20, 20, 5, 440, 0xCC0000).setOrigin(0, 0); // left border
        this.add.rectangle(615, 20, 5, 440, 0xCC0000).setOrigin(0, 0); // right border


        // rainbow UI background
        //this.add.rectangle(25, 35, 590, 70, 0xFACADE).setOrigin(0, 0);
        //this.add.rectangle(25, 35, 590, 60, 0x8158EA).setOrigin(0, 0);
        //this.add.rectangle(25, 35, 590, 50, 0x3D85C6).setOrigin(0, 0);
        //this.add.rectangle(25, 35, 590, 40, 0x309D00).setOrigin(0, 0);
        //this.add.rectangle(25, 35, 590, 30, 0xFFBF00).setOrigin(0, 0);
        //this.add.rectangle(25, 35, 590, 20, 0xFF870A).setOrigin(0, 0);
        //this.add.rectangle(25, 35, 590, 10, 0xCC0000).setOrigin(0, 0);

        this.banner1 = this.add.tileSprite(0, 0, 640, 480, 'banner').setScale(0.5, 0.5).setOrigin(0,0);
        this.banner2 = this.add.tileSprite(320, 0, 640, 480, 'banner').setScale(0.5, 0.5).setOrigin(0,0);
         
        // add dart (p1)
        this.p1Dart = new Dart(this, game.config.width/2-150, 431, 'dart1').setScale(1.0, 1.0).setOrigin(0,0);
        
        // add dart (p2)
        this.p2Dart = new DartTwo(this, game.config.width/2+150, 431, 'dart2').setScale(1.0, 1.0).setOrigin(0,0);

        // add balloon animals (x3)
        this.balloonAnimal01 = new BalloonAnimal(this, game.config.width + 192, 132, 'balloonAnimal1', 0, 30).setScale(1.5, 1.5).setOrigin(0,0);
        this.balloonAnimal02 = new BalloonAnimal(this, game.config.width + 96, 196, 'balloonAnimal2', 0, 20).setScale(1.5, 1.5).setOrigin(0,0);
        this.balloonAnimal03 = new BalloonAnimal(this, game.config.width, 260, 'balloonAnimal3', 0, 10).setScale(1.5, 1.5).setOrigin(0,0);
        

        // define keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        
        // animation config
        this.anims.create({
            key: 'popOne',
            frames: this.anims.generateFrameNumbers('pop1', {start: 0, end: 3, first: 0}), 
            frameRate: 30
        });

        this.anims.create({
            key: 'popTwo', 
            frames: this.anims.generateFrameNumbers('pop2', {start: 0, end: 3, first: 0}), 
            frameRate: 30
        });

        this.anims.create({
            key: 'popThree', 
            frames: this.anims.generateFrameNumbers('pop3', {start: 0, end: 3, first: 0}), 
            frameRate: 30
        }); 

        // score
        this.p1Score = 0;
        this.p2Score = 0;

        // score display
        let score1Config = {
            fontFamily: 'Courier',
            fontStyle: 'bold',
            fonSize: '28px',
            backgroundColor: '#e3948f',
            color: '#912d26',
            align: 'right',
            padding: {
                top: 7,
                bottom: 7,
                right: 3,
            },
            fixedWidth: 100
        }

        let score2Config = {
            fontFamily: 'Courier',
            fontStyle: 'bold',
            fonSize: '28px',
            backgroundColor: '#8d8ee3',
            color: '#292952',
            align: 'right',
            padding: {
                top: 7,
                bottom: 7,
                right: 3,
            },
            fixedWidth: 100
        }

        let scoreConfig = {
            fontFamily: 'Courier',
            fontStyle: 'bold',
            fonSize: '64px',
            backgroundColor: '#cf9846',
            color: '#362202',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
                right: 5,
                left:5,
            },
        }

        this.add.rectangle(31, 81, 108, 39, 0x912d26).setOrigin(0, 0);
        this.add.rectangle(501, 81, 108, 39, 0x292952).setOrigin(0, 0);

        this.add.text(46, 59, "Player 1", { fontFamily: '"Courier"', color: '#FFFFFF', stroke: '#262626', strokeThickness: 5});
        this.add.text(518, 59, "Player 2", { fontFamily: '"Courier"', color: '#FFFFFF', stroke: '#262626', strokeThickness: 5});
        this.scoreLeft = this.add.text(35, 85, this.p1Score, score1Config);
        this.scoreRight = this.add.text(505, 85, this.p2Score, score2Config);
        
        // game over flag
        this.gameOver = false;
        
        // 60-second play clock
        scoreConfig.fixedWidth = 0;
        this.clock = this.time.delayedCall(game.settings.gameTimer, () => {
            
            this.sound.play('sfx_cheer');

            if(this.p1Score > this.p2Score){

                this.add.rectangle(game.config.width/2 -88, game.config.height/2 - 69, 176, 38, 0x362202).setOrigin(0, 0);
                this.add.text(game.config.width/2, game.config.height/2 - 50, ' PLAYER 1 WINS! ', scoreConfig).setOrigin(0.5);

            }else if( this.p1Score < this.p2Score){

                this.add.rectangle(game.config.width/2 -88, game.config.height/2 - 69, 176, 38, 0x362202).setOrigin(0, 0);
                this.add.text(game.config.width/2, game.config.height/2 - 50, ' PLAYER 2 WINS! ', scoreConfig).setOrigin(0.5);

            }
            else{

                this.add.rectangle(game.config.width/2 -38, game.config.height/2 - 69, 76, 38, 0x362202).setOrigin(0, 0);
                this.add.text(game.config.width/2, game.config.height/2 - 50, ' TIE! ', scoreConfig).setOrigin(0.5);

            }

            this.add.rectangle(game.config.width/2 -68, game.config.height/2 - 29, 136, 38, 0x362202).setOrigin(0, 0);
            this.add.rectangle(game.config.width/2 -116, game.config.height/2 + 11, 232, 38, 0x362202).setOrigin(0, 0);

            this.add.text(game.config.width/2, game.config.height/2 - 10, ' GAME OVER! ', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 30, ' Click (R) to Restart ', scoreConfig).setOrigin(0.5);

            this.gameOver = true;
        }, null, this);
    }

    update(){
        // check key input for restart
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
            this.scene.restart(this.p1Score);
            this.scene.restart(this.balloonAnimal01);
            this.scene.restart(this.balloonAnimal02);
            this.scene.restart(this.balloonAnimal03);
            this.scene.restart(this.p1Dart);
            this.scene.restart(this.p2Dart);

        }
        if (this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }

        this.sky.tilePositionX -= 1;
        this.banner1.tilePositionX -= 0.75;
        this.banner2.tilePositionX -= 0.75;
        
        if(!this.gameOver) {
            this.p1Dart.update();  // update dart sprites
            this.p2Dart.update();

            this.balloonAnimal01.update();  // update balloon animal sprites (x3)
            this.balloonAnimal02.update();
            this.balloonAnimal03.update();
        }

        // check collisions
        if(this.checkCollision(this.p1Dart, this.balloonAnimal03)) {
            this.p1Dart.reset();
            this.balloonPopThree(this.balloonAnimal03);
        }
        if(this.checkCollision(this.p1Dart, this.balloonAnimal02)) {
            this.p1Dart.reset();
            this.balloonPopTwo(this.balloonAnimal02);
        }
        if(this.checkCollision(this.p1Dart, this.balloonAnimal01)) {
            this.p1Dart.reset();
            this.balloonPopOne(this.balloonAnimal01);
        }

        // check collisions
        if(this.checkCollision(this.p2Dart, this.balloonAnimal03)) {
            this.p2Dart.reset();
            this.playerTwoBalloonPopThree(this.balloonAnimal03);
        }
        if(this.checkCollision(this.p2Dart, this.balloonAnimal02)) {
            this.p2Dart.reset();
            this.playerTwoBalloonPopTwo(this.balloonAnimal02);
        }
        if(this.checkCollision(this.p2Dart, this.balloonAnimal01)) {
            this.p2Dart.reset();
            this.playerTwoBalloonPopOne(this.balloonAnimal01);
        }

        
    }

    checkCollision(dart, balloon){
        // simple AABB checking
        if (dart.x < balloon.x + balloon.width &&
            dart.x + dart.width > balloon.x &&
            dart.y < balloon.y + balloon.height &&
            dart.height + dart.y > balloon.y) {
                return true;
        } else {
            return false;
        }
    }

    balloonPopOne(balloon){
        balloon.alpha = 0; // temporarily hide

        // create pop sprite at balloon's position
        let boom = this.add.sprite(balloon.x, balloon.y, 'pop1').setOrigin(0,0);

        boom.anims.play('popOne'); // play pop animation
        
        // callback after animation completes
        boom.on('animationcomplete', () => {
            balloon.reset();
            balloon.alpha = 1;
            boom.destroy();
        });
        this.p1Score += balloon.points;
        this.scoreLeft.text = this.p1Score;

        this.sound.play('sfx_pop');
    }

    balloonPopTwo(balloon) {
        balloon.alpha = 0; // temporarily hide

        // create pop sprite at balloon's position
        let boom = this.add.sprite(balloon.x, balloon.y, 'pop2').setOrigin(0,0);

        boom.anims.play('popTwo'); // play pop animation
        
        // callback after animation completes
        boom.on('animationcomplete', () => {
            balloon.reset();
            balloon.alpha = 1;
            boom.destroy();
        });
        this.p1Score += balloon.points;
        this.scoreLeft.text = this.p1Score;

        this.sound.play('sfx_pop');
    }

    balloonPopThree(balloon) {
        balloon.alpha = 0; // temporarily hide

        // create pop sprite at balloon's position
        let boom = this.add.sprite(balloon.x, balloon.y, 'pop3').setOrigin(0,0);

        boom.anims.play('popThree'); // play pop animation
        
        // callback after animation completes
        boom.on('animationcomplete', () => {
            balloon.reset();
            balloon.alpha = 1;
            boom.destroy();
        });
        this.p1Score += balloon.points;
        this.scoreLeft.text = this.p1Score;

        this.sound.play('sfx_pop');
    }

    playerTwoBalloonPopOne(balloon){
        balloon.alpha = 0; // temporarily hide

        // create pop sprite at balloon's position
        let boom = this.add.sprite(balloon.x, balloon.y, 'pop1').setOrigin(0,0);

        boom.anims.play('popOne'); // play pop animation
        
        // callback after animation completes
        boom.on('animationcomplete', () => {
            balloon.reset();
            balloon.alpha = 1;
            boom.destroy();
        });
        this.p2Score += balloon.points;
        this.scoreRight.text = this.p2Score;

        this.sound.play('sfx_pop');
    }

    playerTwoBalloonPopTwo(balloon) {
        balloon.alpha = 0; // temporarily hide

        // create pop sprite at balloon's position
        let boom = this.add.sprite(balloon.x, balloon.y, 'pop2').setOrigin(0,0);

        boom.anims.play('popTwo'); // play pop animation
        
        // callback after animation completes
        boom.on('animationcomplete', () => {
            balloon.reset();
            balloon.alpha = 1;
            boom.destroy();
        });
        this.p2Score += balloon.points;
        this.scoreRight.text = this.p2Score;

        this.sound.play('sfx_pop');
    }

    playerTwoBalloonPopThree(balloon) {
        balloon.alpha = 0; // temporarily hide

        // create pop sprite at balloon's position
        let boom = this.add.sprite(balloon.x, balloon.y, 'pop3').setOrigin(0,0);

        boom.anims.play('popThree'); // play pop animation
        
        // callback after animation completes
        boom.on('animationcomplete', () => {
            balloon.reset();
            balloon.alpha = 1;
            boom.destroy();
        });
        this.p2Score += balloon.points;
        this.scoreRight.text = this.p2Score;

        this.sound.play('sfx_pop');
    }
}