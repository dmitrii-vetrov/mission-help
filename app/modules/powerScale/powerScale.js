class PowerScaleModule {
    game = null;
    powerScale = null;
    scale = null;
    minX = 0;
    maxX = 0;
    direction = 1;
    damagePowerPercent = 0;
    maxDamage = 100;
    
    constructor(game) {
        this.game = game;
    }

    preload() {
        this.game.load.image('powerScale', '/app/modules/powerScale/images/power-scale.png');
        this.game.load.image('scale', '/app/modules/powerScale/images/scale.png');
    }

    create() {
        this.powerScale = this.game.add.sprite(0, 0, 'powerScale');
        this.scale = this.game.add.sprite(0, 0, 'scale');

        // ширина экрана - половины ширины картинки - отступ от края 
        this.powerScale.x = this.game.game.renderer.width - (this.powerScale.width / 2) - 10;
        this.powerScale.y = this.game.game.renderer.height - (this.powerScale.height / 2) - 15;

        this.minX = this.powerScale.x - (this.powerScale.width / 2);
        this.maxX = this.powerScale.x + (this.powerScale.width / 2);
        
        this.scale.x = this.minX;
        this.scale.y = this.powerScale.y;
    }

    update() {
        const speed = 5;
        if (this.scale.x <= this.minX) {
            this.direction = speed - 3;
        }

        if (this.scale.x >= this.maxX) {
            this.direction = -speed;
        }

        this.scale.x += this.direction;

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