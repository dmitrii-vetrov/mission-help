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
        console.log(this.currentBackground);
    }

    update() {
        this.currentBackground.x = phaser.game.renderer.width / 2;
        this.currentBackground.y = phaser.game.renderer.height / 2;
        let coef = this.currentBackground.frame.height / this.currentBackground.frame.width;
        let scaleX = phaser.game.renderer.width / this.currentBackground.frame.width;
        let scaleY = scaleX * coef;
        this.currentBackground.setScale(scaleX, scaleY);

        if (this.currentBackground.displayHeight > phaser.game.renderer.height) {
            coef = this.currentBackground.frame.width / this.currentBackground.frame.height;
            scaleY = phaser.game.renderer.height / this.currentBackground.frame.height;
            scaleX = scaleY * coef;
            this.currentBackground.setScale(scaleX, scaleY);
        }
    }
}