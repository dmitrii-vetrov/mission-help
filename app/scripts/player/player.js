class Player {
    game = null;
    player = null;
    cursor = null;
    bullet = null;
    SPEED = 12;

    constructor(game) {
        this.game = game;
    }

    preload() {
        _cursor = this.game.input.keyboard.createCursorKeys();
        this.game.load.spritesheet('player', '../../../assets/images/player/player.png', {frameWidth: 233.75, frameHeight: 283.25 });
        this.game.load.image('bullet', '../../../assets/images/player/bullet.png');
    }

    create() {
        this.bullet = this.add.sprite(100, 670,'bullet');
        this.player = this.add.sprite(100, 670, 'player');
        this.player.setScale(0.25);

        this.game.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 6 }),
            frameRate: 30,
            repeat: 1
        });
        this.game.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 30,
            repeat: 1
        });
        this.game.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 30,
            repeat: 1
        });
        this.game.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
            frameRate: 30,
            repeat: 1
        });
        this.game.anims.create({
            key: 'turn',
            frames: [ { key: 'player', frame: 0 } ],
            frameRate: 0
        });
    }

    update() {
        if (this.cursor.left.isDown) {
            this.player.x -= _speed;
            this.player.anims.play('left', true);

        } else if (this.cursor.right.isDown) {
            this.player.x += _speed;
            this.player.anims.play('right', true);

        } else if (this.cursor.up.isDown){
            this.player.y -= _speed;       
            this.player.anims.play('up', true);

        } else if (this.cursor.down.isDown) {
            this.player.y += _speed;
            this.player.anims.play('down', true);

        } else {
            this.player.anims.play('turn', true);
        }
    }
}