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

function init() {
    phaser = this;
    mainContainer.addModule(new BackgroundModule());
    mainContainer.addModule(new PlayerModule());
    mainContainer.addModule(new GhostBossModule());
    mainContainer.addModule(new PowerScaleModule());
    mainContainer.addModule(new BulletModule());
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
