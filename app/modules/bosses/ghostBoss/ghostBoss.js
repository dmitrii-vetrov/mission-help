class GhostBossModule {
    name = 'GhostBossModule';
    ghostBoss = null;
    fist = null;
    isCanShoot = true;
    isToushXMin = false;

    constructor() {
    }

    preload() {
        phaser.load.image('ghostBoss', '/app/modules/bosses/ghostBoss/images/ghost.png');
        phaser.load.image('ghostBoss1', '/app/modules/bosses/ghostBoss/images/ghost1.png');
        phaser.load.image('ghostBossFist', '/app/modules/bosses/ghostBoss/images/fist.png');
    }

    create() {
        this.ghostBoss = phaser.add.sprite(phaser.game.renderer.width / 2, 100, 'ghostBoss');
        this.ghostBoss.setScale(0.75);

        this.fist = phaser.add.sprite(this.ghostBoss.x - 70, 100, 'ghostBossFist');
    }

    update() {
        this.fist.x = this.ghostBoss.x - 70;
        // let playerPoints = new Phaser.Geom.Point(this.x,this.y+this.displayHeight/2);
        // let ghostBossPoints = new Phaser.Geom.Point(this.x,this.y+this.displayHeight/2);
       //console.log(phaser.Math.Angle.BetweenPoints(playerPoints, ghostBossPoints))

       this.moveBoss();
       this.ghostBoss.alpha = 0.6;
       this.fist.alpha = 0.6;

       //if (this.isCanShoot === true) {
           //this.doShoot();
      // }
    }
    // анимация удара
    doShoot() {
        this.isCanShoot = false;
        phaser.tweens.add({
           targets: this.fist,
           y: phaser.game.renderer.height,
           duration: 5000,
           repeat: 0,
           onStart() {
                
           },
            onComplete() {

           },
        })
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

    if (this.ghostBoss.x > phaser.game.renderer.width) {
        this.isToushXMin = false;
    }
   }
}