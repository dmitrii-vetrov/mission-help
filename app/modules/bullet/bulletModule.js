class BulletModule {
    name = 'BulletModule';
    bullet = null;

    constructor() {
    }

    preload() {
        _phaser.load.image('bullet', '/app/modules/bullet/images/bullet.png');
    }

    create() {
        this.bullet = _phaser.add.sprite(100, 100,'bullet');

        _phaser.time.addEvent( {
            delay: 3000,
            callback: () => {
                this.bullet.x = Phaser.Math.Between(0, getSceneWidth());
                this.bullet.y = Phaser.Math.Between(425, getSceneHeight());
            },
            loop: true,
            repeat: 0
        });
    }

    update() {
        // this.bullet.x = playerModule.player.x;
    }
}
