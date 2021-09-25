import MainContainer from 'mainContainer';

const mainContainer = new MainContainer();

const _config = {
    type: Phaser.AUTO,
    width: document.body.clientWidth,
    height: document.body.clientHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

const _game = new Phaser.Game(_config);

mainContainer.addModule(new Player(_game))
        
function preload() {
    mainContainer.preload();
}
function create() {
    mainContainer.create();
}
function update () {
    mainContainer.update();
}