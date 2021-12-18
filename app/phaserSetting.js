const config = {
    type: Phaser.AUTO,
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    scale: {
        mode: Phaser.Scale.RESIZE
    },
    scene: {
        init: init,
        preload: preload,
        create: create,
        update: update
    }
};

const mainContainer = new MainContainer();
const game = new Phaser.Game(config);
let phaser = null;

let backgroundModule = new BackgroundModule();
let playerModule = new PlayerModule();
let ghostBossModule = new GhostBossModule();
let bulletModule = new BulletModule();
let powerScaleModule = new PowerScaleModule();

function init() {
    phaser = this;
    mainContainer.addModule(backgroundModule);
    mainContainer.addModule(playerModule);
    mainContainer.addModule(ghostBossModule);
    mainContainer.addModule(bulletModule);
    mainContainer.addModule(powerScaleModule);
}

function preload() {
    mainContainer.preload();
}

function create() {
    mainContainer.create();

    this.scale.on('resize', resize, this);
    resize();
}

function resize () {
    mainContainer.resize();
}

function update () {
    mainContainer.update();
}
