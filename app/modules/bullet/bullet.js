class BulletModule {
    game = null;
    bullet = null;

    constructor(game) {
        this.game = game;
    }

    preload() {
        this.game.load.image('bullet', '/app/modules/bullet/images/bullet.png');
    }

    create() {
        this.bullet = this.game.add.sprite(100, 100,'bullet');
    }

    update() {

    }
}