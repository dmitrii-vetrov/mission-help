class GhostBossModule {
    name = 'GhostBossModule';
    ghostBoss = null;
    fistOrigin = null;
    isCanShoot = true;
    isToushXMin = false;
    isCanBossMove = true;
    atackFists = [];

    constructor() {
    }

    preload() {
        phaser.load.image('ghostBoss', '/app/modules/bosses/ghostBoss/images/ghost.png');
        phaser.load.image('ghostBoss1', '/app/modules/bosses/ghostBoss/images/ghost1.png');
        phaser.load.image('ghostBossFist', '/app/modules/bosses/ghostBoss/images/fist.png');
    }

    create() {
        this.ghostBoss = phaser.add.sprite(phaser.game.renderer.width / 2, 280, 'ghostBoss');
        this.ghostBoss.setScale(0.75);
        this.ghostBoss.alpha = 0.6;

        this.fistOrigin = phaser.add.sprite(this.ghostBoss.x - 70, this.ghostBoss.y, 'ghostBossFist');
        this.fistOrigin.alpha = this.ghostBoss.alpha;

        let i = 0;
        while (i < 10) {
            this.atackFists.push(phaser.add.sprite(-100, -100, 'ghostBossFist'));

            i++;
        }
    }

    update() {
        this.fistOrigin.x = this.ghostBoss.x - 70;

        if (this.isCanBossMove == true){
            this.moveBoss();
        }

        // let playerPoints = new Phaser.Geom.Point(this.x,this.y+this.displayHeight/2);
        // let ghostBossPoints = new Phaser.Geom.Point(this.x,this.y+this.displayHeight/2);
        //console.log(phaser.Math.Angle.BetweenPoints(playerPoints, ghostBossPoints))

        if (this.isCanShoot === true) {
            this.isCanShoot = false;
            this.doShoot();
        }
    }
    // анимация удара
    doShoot() {
        // начало анимации удара (летит вниз)
        let attackTargets = this.atackFists;
        attackTargets.push(this.fistOrigin);

        phaser.tweens.add({
            targets: attackTargets,
            y: phaser.game.renderer.height,
            duration: 500,
            repeat: 0,
            onStart: () => {
                this.isCanBossMove = false;

                this.atackFists.forEach((fist, i) => {
                    fist.alpha = this.fistOrigin.alpha;
                    fist.x = (phaser.game.renderer.width / this.atackFists.length) * (i + 1);
                    this.setAddFistsY(fist, i);
                })
            },
            onComplete: () => {
                // анимация исчезновения (прозрачность 0)
                attackTargets.push(this.ghostBoss);

                phaser.tweens.add({
                    targets: attackTargets,
                    alpha: 0,
                    duration: 350,
                    repeat: 0,
                    onStart: () => {
                    },
                    onComplete: () => {
                        this.fistOrigin.y = this.ghostBoss.y;
                        this.isCanBossMove = true;

                        // анимация появления (прозрачность 1)
                        phaser.tweens.add({
                            targets: [this.fistOrigin, this.ghostBoss],
                            alpha: 0.6,
                            duration: 350,
                            repeat: 0,
                            onStart: () => {
                            },
                            onComplete: () => {
                            },
                        })
                    },
                })
            },
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
    
    if (this.ghostBoss.x < 400) {
        this.isToushXMin = true;
    }

    if(this.isToushXMin === true){
        this.ghostBoss.x += 5;
    }

    if (this.ghostBoss.x > 1070) {
        this.isToushXMin = false;
    }

        // this.ghostBoss.x = playerModule.getPlayer().x;
        // console.log(this.ghostBoss.x)
   }
}