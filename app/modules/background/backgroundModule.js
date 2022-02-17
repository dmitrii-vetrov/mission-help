class BackgroundModule {
    name = 'BackgroundModule';
    currentBackground = null;

    constructor() {
        
    }

    preload() {
        _phaser.load.image('backroundGhostBossCl','/app/modules/background/images/backroundGhostBossCl.png');
        _phaser.load.image('backroundGhostBossOp','/app/modules/background/images/backroundGhostBossOp.png');
    }

    create() {
        this.currentBackground = _phaser.add.sprite(_phaser.game.renderer.width / 2, _phaser.game.renderer.height / 2, 'backroundGhostBossCl');
    }

    update() {
        this.currentBackground.x = _phaser.game.renderer.width / 2;
        this.currentBackground.y = _phaser.game.renderer.height / 2;
        this.currentBackground.width = _phaser.game.renderer.width;
        this.currentBackground.height = _phaser.game.renderer.height;
        this.currentBackground.setScale(1.024);
        // let coef = this.currentBackground.frame.height / this.currentBackground.frame.width;
        // let scaleX = _phaser.game.renderer.width / this.currentBackground.frame.width;
        // let scaleY = scaleX * coef;
        // this.currentBackground.setScale(scaleX, scaleY);

        // if (this.currentBackground.displayHeight > _phaser.game.renderer.height) {
        //     coef = this.currentBackground.frame.width / this.currentBackground.frame.height;
        //     scaleY = _phaser.game.renderer.height / this.currentBackground.frame.height;
        //     scaleX = scaleY * coef;
        //     this.currentBackground.setScale(scaleX, scaleY);
        // }
    }
}