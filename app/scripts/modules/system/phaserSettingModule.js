const config = {
    type: Phaser.AUTO,
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    scene: {
        init: init,
        preload: preload,
        create: create,
        update: update
    }
}

const mainContainer = new MainContainer();
const game = new Phaser.Game(config);

function init() {
    mainContainer.addModule(new PlayerModule(this))
}

function preload() {
    mainContainer.preload();
}
function create() {
    mainContainer.create();
}
function update () {
    mainContainer.update();
}