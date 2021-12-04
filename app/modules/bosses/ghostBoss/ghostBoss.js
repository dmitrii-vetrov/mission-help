class GhostBossModule {
    game = null;
    ghostBoss = null;
    fist = null;

    constructor(game) {
        this.game = game;
    }

    preload() {
        this.game.load.image('ghostBoss', '/app/modules/bosses/ghostBoss/images/ghost.png');
        this.game.load.image('ghostBoss1', '/app/modules/bosses/ghostBoss/images/ghost1.png');
        this.game.load.image('ghostBossFist', '/app/modules/bosses/ghostBoss/images/fist.png');
    }

    create() {
        this.ghostBoss = this.game.add.sprite(this.game.game.renderer.width / 2, 100, 'ghostBoss');
        this.ghostBoss.setScale(0.75);

        this.fist = this.game.add.sprite(this.ghostBoss.x - 70, 100, 'ghostBossFist');
    }

    update() {
        this.fist.x = this.ghostBoss.x - 70;
        let playerPoints = new Phaser.Geom.Point(this.x,this.y+this.displayHeight/2);
        let ghostBossPoints = new Phaser.Geom.Point(this.x,this.y+this.displayHeight/2);

        console.log(this.game.Math.Angle.BetweenPoints(playerPoints, ghostBossPoints))
    }
}