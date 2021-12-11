class BackgroundModule {
    name = 'BackgroundModule';
    currentBackground = null;

    constructor() {
        
    }

    preload() {
        phaser.load.image('backroundGhostBossCl','/app/modules/background/images/backroundGhostBossCl.png');
        phaser.load.image('backroundGhostBossOp','/app/modules/background/images/backroundGhostBossOp.png');
    }

    create() {
        this.currentBackground = phaser.add.sprite(phaser.game.renderer.width / 2, phaser.game.renderer.height / 2, 'backroundGhostBossCl');
    }

    update() {
        
    }
}