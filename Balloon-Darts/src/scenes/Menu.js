class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }

  preload() {
    // load audio
    this.load.audio('sfx_select', './assets/selectBeep.wav');
    this.load.audio('sfx_pop', './assets/popBalloon.wav');
    this.load.audio('sfx_dart', './assets/dartWoosh.wav');
    this.load.audio('sfx_cheer', './assets/cheer.wav');
    this.load.audio('bgm', './assets/circusLoop.wav');

    // load tile Sprite
    this.load.image('sky', './assets/sky.png');
    this.load.image('banner', './assets/banner.png');
    this.load.image('balloon1', './assets/balloonMain1.png', {frameWidth: 600, frameHeight: 465, startFrame: 3, endFrame: 3});
    this.load.image('balloon2', './assets/balloonMain2.png', {frameWidth: 600, frameHeight: 465, startFrame: 0, endFrame: 0});
  }
  
  create() {

    // create sound loop
    var music = this.sound.add('bgm');
    music.setLoop(true);
    music.play();

    // place tile sprite
    this.sky = this.add.tileSprite(0, 0, 640, 480, 'sky').setOrigin(0,0);

    this.banner1 = this.add.tileSprite(0, 0, 640, 480, 'banner').setScale(0.5, 0.5).setOrigin(0,0);
    this.banner2 = this.add.tileSprite(320, 0, 640, 480, 'banner').setScale(0.5, 0.5).setOrigin(0,0);

    // rainbow UI background
    this.add.rectangle(0, 349, 640, 70, 0xFACADE).setOrigin(0, 0);
    this.add.rectangle(0, 349, 640, 60, 0x8158EA).setOrigin(0, 0);
    this.add.rectangle(0, 349, 640, 50, 0x3D85C6).setOrigin(0, 0);
    this.add.rectangle(0, 349, 640, 40, 0x309D00).setOrigin(0, 0);
    this.add.rectangle(0, 349, 640, 30, 0xFFBF00).setOrigin(0, 0);
    this.add.rectangle(0, 349, 640, 20, 0xFF870A).setOrigin(0, 0);
    this.add.rectangle(0, 349, 640, 10, 0xCC0000).setOrigin(0, 0);

    // menu display
    let menuConfig = {
      fontFamily: 'Courier',
      fontSize: '16px',
      backgroundColor: '#FF870A',
      color: '#000000',
      align: 'center',
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
      border: 1,
      strokeThickness: 5
    }

    let menu2Config = {
      fontFamily: 'Courier',
      fontSize: '16px',
      backgroundColor: '#FFBF00',
      color: '#000000',
      align: 'center',
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
      border: 1,
      strokeThickness: 5
    }

    let menu3Config = {
      fontFamily: 'Courier',
      fontSize: '16px',
      backgroundColor: '#309D00',
      color: '#000000',
      align: 'center',
      padding: {
        top: 5,
        bottom: 5,
        left: 5,
        right: 5,
      },
      border: 1,
      strokeThickness: 5
    }

    let menu4Config = {
      fontFamily: 'Courier',
      fontSize: '16px',
      backgroundColor: '#FFFFFF',
      color: '#000000',
      align: 'center',
      padding: {
        top: 6,
        bottom: 6,
        left: 6,
        right: 6,
      },
      fixedWidth: 0
    }

    // show menu text
    let centerX = game.config.width/2;
    let centerY = game.config.width/2;
    let textSpacer = 64;

    this.add.rectangle(centerX, centerY - textSpacer*3, 158, 40, 0x593f14).setOrigin(0.5);
    this.add.rectangle(centerX, centerY - textSpacer*2, 580, 40, 0x593f14).setOrigin(0.5);
    this.add.rectangle(centerX, centerY - textSpacer, 574, 40, 0x593f14).setOrigin(0.5);

    this.balloon1 = this.add.tileSprite(centerX + textSpacer + 10, centerY - textSpacer*4 - 5, 600, 465, 'balloon1').setScale(0.20, 0.20).setOrigin(0,0);
    this.balloon2 = this.add.tileSprite(centerX - textSpacer*3 , centerY - textSpacer*4, 600, 465, 'balloon2').setScale(0.20, 0.20).setOrigin(0,0);
  
    this.add.text(centerX, centerY - textSpacer*3, 'BALLOON DARTS!', menuConfig).setOrigin(0.5);
    this.add.text(centerX, centerY - textSpacer*2, 'Player 1: Use (A) and (D) to move left/right & (F) to Fire', menu2Config).setOrigin(0.5);
    this.add.text(centerX, centerY - textSpacer, 'Player 2: Use ←→ arrows to move left/right & (M) to Fire', menu3Config).setOrigin(0.5);
    menuConfig.backgroundColor = '#00FF00';
    menuConfig.color = '#000';
    this.add.text(centerX, centerY + textSpacer, 'Press "E" for Easy or "H" for Hard', menu4Config).setOrigin(0.5);  
    
    // define keys
    keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

  }

  update() {

    this.sky.tilePositionX += 1;
    this.banner1.tilePositionX += 0.75;
    this.banner2.tilePositionX += 0.75;

    if (Phaser.Input.Keyboard.JustDown(keyE)) {
      // easy mode
      game.settings = {
        balloonSpeed: 3,
        gameTimer: 60000    
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");    
    }

    if (Phaser.Input.Keyboard.JustDown(keyH)) {
      // hard mode
      game.settings = {
        balloonSpeed: 4,
        gameTimer: 45000    
      }
      this.sound.play('sfx_select');
      this.scene.start("playScene");    
    }
  }
}