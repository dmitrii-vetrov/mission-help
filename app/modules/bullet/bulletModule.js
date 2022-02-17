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
    }

    update() {
        // this.bullet.x = playerModule.player.x;
    }
}
