class GhostBossModule {
    name = 'GhostBossModule';
    ghostBoss = null;
    fistOrigin = null;
    isCanShoot = true;
    isToushXMin = false;
    isCanBossMove = true;
    isCanPlayerFight = false;


    atackFists = [];

    constructor() {
    }
    

    preload() {
        _phaser.load.image('ghostBoss', '/app/modules/bosses/ghostBoss/images/ghost.png');
        _phaser.load.image('ghostBoss1', '/app/modules/bosses/ghostBoss/images/ghost1.png');
        _phaser.load.image('ghostBossFist', '/app/modules/bosses/ghostBoss/images/fist.png');
    }

    create() {
        this.ghostBoss = _phaser.add.sprite(_phaser.game.renderer.width / 2, 280, 'ghostBoss');
        this.ghostBoss.setScale(0.75);
        this.ghostBoss.alpha = 0.6;

        this.fistOrigin = _phaser.add.sprite(this.ghostBoss.x - 70, this.ghostBoss.y, 'ghostBossFist');
        this.fistOrigin.alpha = this.ghostBoss.alpha;

        let i = 0;
        while (i < 8) {
            this.atackFists.push(_phaser.add.sprite(-100, -100, 'ghostBossFist'));

            i++;
        }

        //стрельба (шанс)
        this.isCanShootProcess();
    }

    update() {
        this.fistOrigin.x = this.ghostBoss.x - 70;

        if (this.isCanBossMove === true){
            this.moveBoss();
        }
    }

    isCanShootProcess() {
        _phaser.time.addEvent( {
            delay: 3000,
            callback: () => {
                if(Phaser.Math.Between(0, 10) < 4) {
                    this.doShoot();
                }
            },
            loop: true,
            repeat: 0
        });
    }

    // анимация удара
    doShoot() {
        let attackTargets = this.atackFists;

        // кулак летит на вверх
        _phaser.tweens.add({
            targets: this.fistOrigin,
            y: -this.fistOrigin.height,
            duration: 500,
            onStart: () => {
                this.isCanBossMove = false;
                this.ghostBoss.alpha = 1;
                this.fistOrigin.alpha = 1;
            },
            onComplete: () => {
                // кулаки летят вниз
                _phaser.tweens.add({
                    targets: attackTargets,
                    y: getSceneHeight(),
                    duration: 1500,
                    repeat: 0,
                    onStart: () => {
                        this.atackFists.forEach((fist, i) => {
                            fist.alpha = this.fistOrigin.alpha;
                            fist.x = (getSceneWidth() / this.atackFists.length) * (i + 0.5);
                            this.setAddFistsY(fist, i);
                        })
                    },
                    onComplete: () => {
                        // анимация исчезновения (прозрачность 0)
                        _phaser.tweens.add({
                            targets: attackTargets,
                            alpha: 0,
                            duration: 250,
                            repeat: 0,
                            onComplete: () => {
                                this.fistOrigin.y = this.ghostBoss.y;
        
                                // анимация появления (прозрачность 1)
                                _phaser.tweens.add({
                                    targets: [this.fistOrigin, this.ghostBoss],
                                    alpha: 0.6,
                                    duration: 250,
                                    repeat: 0,
                                    onComplete: () => {
                                        this.isCanBossMove = true;
                                        this.ghostBoss.alpha = 0.6;
                                        this.fistOrigin.alpha = 0.6;
                                    }
                                })
                            },
                        })
                    },
                })
            }
        })
   }

   // дополнительная атака
   setAddFistsY(sprite, i) {      
        if (i === 0) {
            sprite.y = -600;
        }
        if (i === 1) {
            sprite.y = -500;
        }
        if (i === 2) {
            sprite.y = -400;
        }
        if (i === 3) {
            sprite.y = -300;
        }
        if (i === 4) {
            sprite.y = -200;
        }
        if (i === 5) {
            sprite.y = -200;
        }
        if (i === 6) {
            sprite.y = -300;
        }
        if (i === 7) {
            sprite.y = -400;
        }
        if (i === 8) {
            sprite.y = -500;
        }
        if (i === 9) {
            sprite.y = -600;
        }
       
   }

   // движения босса
    moveBoss() {
        if(this.isToushXMin === false) {
            this.ghostBoss.x -= 5;           
        }
        
        if (this.ghostBoss.x < 0) {
            this.isToushXMin = true;
        }

        if(this.isToushXMin === true){
            this.ghostBoss.x += 5;
        }

        if (this.ghostBoss.x > getSceneWidth()) {
            this.isToushXMin = false;
        }

        //  this.ghostBoss.x = playerModule.getPlayer().x;
        // console.log(this.ghostBoss.x)
   }
}
