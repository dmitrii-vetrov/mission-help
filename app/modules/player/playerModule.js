class PlayerModule {
    name = 'PlayerModule';
    player = null;
    cursor = null;
    SPEED = 7;
    health1;
    health2;
    health3;
    healthContainer = null;
    iifes = null;

    constructor() {
    }

    preload() {
        this.cursor = _phaser.input.keyboard.createCursorKeys();
        _phaser.load.spritesheet('player', '/app/modules/player/images/player.png', {frameWidth: 233.75, frameHeight: 283.25 });
        _phaser.load.image('health', '/app/modules/player/images/health.png');
    }

    create() {
        this.player = _phaser.physics.add.sprite(_phaser.game.renderer.width / 2, 670, 'player');
        this.player.setScale(0.25);
        this.player.setOrigin(0.5, 0.5);

        this.iifes = liveFactory('health', 3);

        _phaser.anims.create({
            key: 'up',
            frames: _phaser.anims.generateFrameNumbers('player', { start: 4, end: 6 }),
            frameRate: 30
        });
        _phaser.anims.create({
            key: 'down',
            frames: _phaser.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 30
        });
        _phaser.anims.create({
            key: 'left',
            frames: _phaser.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 30
        });
        _phaser.anims.create({
            key: 'right',
            frames: _phaser.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
            frameRate: 30
        });
        _phaser.anims.create({
            key: 'turn',
            frames: [ { key: 'player', frame: 0 } ],
            frameRate: 0
        });

        var i = 0;
        _phaser.physics.add.collider(this.player, _ghostBossModule.getBullets(), () => {
            i++;

            if (i === 1) {
                this.iifes.decrement(1);

                _phaser.time.addEvent({
                    delay: 500,
                    callback: () => {
                        i = 0;
                    }
                });
            }
        });
    }

    resize() {

    }
    
    update() {
        // управления
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
        // место хлдьбы 
        if (this.player.x >= getSceneWidth()) {
            this.player.x -= this.SPEED;
        }

        if (this.player.x <= 0) {
            this.player.x += this.SPEED;
        }

        if (this.player.y <= 425) {
            this.player.y += this.SPEED;
        }
        
        if (this.player.y >= getSceneHeight()) {
            this.player.y -= this.SPEED;
        }

        this.iifes.container.x = this.player.x;
        this.iifes.container.y = this.player.y - (this.player.height * this.player.scaleY) / 1.7;
    }

    getPlayer() {
        return this.player;
    }
}
