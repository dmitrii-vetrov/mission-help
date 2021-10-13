class BulletModule {
    name = 'BulletModule';
    bullet = null;

    constructor() {
    }

    preload() {
        phaser.load.image('bullet', '/app/modules/bullet/images/bullet.png');
    }

    create() {
        this.bullet = phaser.add.sprite(100, 100,'bullet');
    }

    update() {
    }
}