 class PowerScaleModule {
    name = 'PowerScaleModule';
    powerScale = null;
    scale = null;
    minX = 0;
    maxX = 0;
    direction = 1;
    damagePowerPercent = 0;
    maxDamage = 100;
    
    constructor() {
    }

    preload() {
        phaser.load.image('powerScale', '/app/modules/powerScale/images/power-scale.png');
        phaser.load.image('scale', '/app/modules/powerScale/images/scale.png');
    }

    create() {
        this.powerScale = phaser.add.sprite(0, 0, 'powerScale'); 
        this.scale = phaser.add.sprite(0, 0, 'scale');
    }

    resize() {
        // ширина экрана - половины ширины картинки - отступ от края 
        this.powerScale.x = phaser.game.renderer.width - (this.powerScale.width / 2) - 10;
        this.powerScale.y = phaser.game.renderer.height - (this.powerScale.height / 2) - 15;

        this.minX = this.powerScale.x - (this.powerScale.width / 2);
        this.maxX = this.powerScale.x + (this.powerScale.width / 2);
        
        this.scale.x = this.minX;
        this.scale.y = this.powerScale.y;
    }

    update() {
        // движения ползунка
        const speed = 5;
        if (this.scale.x <= this.minX) {
            this.direction = speed;
        }

        if (this.scale.x >= this.maxX) {
            this.direction = -speed - 1;
        }

        this.scale.x += this.direction;

        // сила удара
        let currentDamagePower = 0;

        const sectionWidth = this.powerScale.width / 4;
        const sectionOne = this.minX;
        const sectionTwo = this.minX + sectionWidth;
        const sectionThree = this.minX + sectionWidth * 2;
        const sectionTFour = this.minX + sectionWidth * 3;

        if (this.scale.x >= sectionOne && this.scale.x < sectionTwo) {
            currentDamagePower = 25;
            
        } else if (this.scale.x >= sectionTwo && this.scale.x < sectionThree) {
            currentDamagePower = 50;

        } else if (this.scale.x >= sectionThree && this.scale.x < sectionTFour) {
            currentDamagePower = 75;
        
        } else if (this.scale.x >= sectionTFour) {
            currentDamagePower = 100;
        }

        this.damagePowerPercent = this.maxDamage / 100 * currentDamagePower;
    }
}