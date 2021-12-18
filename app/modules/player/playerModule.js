class PlayerModule {
    name = 'PlayerModule';
    player = null;
    cursor = null;
    SPEED = 7;

    constructor() {
    }

    preload() {
        this.cursor = phaser.input.keyboard.createCursorKeys();
        phaser.load.spritesheet('player', '/app/modules/player/images/player.png', {frameWidth: 233.75, frameHeight: 283.25 });
    }

    create() {
        this.player = phaser.add.sprite(phaser.game.renderer.width / 2, 670, 'player');
        this.player.setScale(0.25);

        phaser.anims.create({
            key: 'up',
            frames: phaser.anims.generateFrameNumbers('player', { start: 4, end: 6 }),
            frameRate: 30,
            repeat: 1
        });
        phaser.anims.create({
            key: 'down',
            frames: phaser.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 30,
            repeat: 1
        });
        phaser.anims.create({
            key: 'left',
            frames: phaser.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 30,
            repeat: 1
        });
        phaser.anims.create({
            key: 'right',
            frames: phaser.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
            frameRate: 30,
            repeat: 1
        });
        phaser.anims.create({
            key: 'turn',
            frames: [ { key: 'player', frame: 0 } ],
            frameRate: 0
        });
    }

    resize() {

    }
    
    update() {
        if (this.cursor.left.isDown) {
            this.player.x -= this.SPEED;
            this.player.anims.play('left', true);

        } else if (this.cursor.right.isDown) {
            this.player.x += this.SPEED;
            this.player.anims.play('right', true);

        } else if (this.cursor.up.isDown){
            this.player.y -= this.SPEED;       
            this.player.anims.play('up', true);

        } else if (this.cursor.down.isDown) {
            this.player.y += this.SPEED;
            this.player.anims.play('down', true);

        } else {
            this.player.anims.play('turn', true);
        }

        if (this.player.x >= 1070) {
            this.player.x -= this.SPEED;
        }

        if (this.player.x <= 400) {
            this.player.x += this.SPEED;
        }
    }

    getPlayer() {
        return this.player;
    }

}
