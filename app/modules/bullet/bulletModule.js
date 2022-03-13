class BulletModule {
    name = 'BulletModule';
    bullet = null;
    boss = null;
    player = null;

    constructor() {
    }

    preload() {
        _phaser.load.image('bullet', '/app/modules/bullet/images/bullet.png');
    }

    create() {
        this.bullet = _phaser.physics.add.sprite(100, 100,'bullet');
        this.boss = _ghostBossModule.getBoss();
        this.player = _playerModule.getPlayer();

        _phaser.time.addEvent( {
            delay: 5000,
            callback: () => {
                this.bullet.x = Phaser.Math.Between(0, getSceneWidth());
                this.bullet.y = Phaser.Math.Between(425, getSceneHeight());
            },
            loop: true,
            repeat: 0
        });

        var i = 0;
        _phaser.physics.add.collider(this.bullet, this.player, () => {
            i++;

            if (i === 1) {
                _phaser.tweens.add({
                    targets: this.bullet,
                    x: this.boss.x,
                    y: this.boss.y,
                    duration: 500,
                    onComplete: () => {
                        if (this.boss.alpha === 1) {
                            console.log('ПОПАЛ В БОССА И ОТНЯЛ ХП');
                        } else {
                            console.log('ПОПАЛ В БОССА, НО ОН В СОМТОЯНИИ ПРИЗРАКА');
                        }
                    }
                });

                _phaser.time.addEvent({
                    delay: 500,
                    callback: () => {
                        i = 0;
                    }
                })
            }
        });
    }

    update() {
    }
}
