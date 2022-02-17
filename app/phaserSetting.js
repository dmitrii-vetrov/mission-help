const _battleFieldId = 'js-battlefield';
const _battleFieldContentId = _battleFieldId + '-content';
const _factor = 0.75;
const _battleField = document.getElementById(_battleFieldId);
const _hiddenClass = 'battlefield_preload';

function showBattleField() {
    if (_battleField.classList.contains(_hiddenClass)) {
        _battleField.classList.remove(_hiddenClass);
    }
}

function setGameSise() {
    var displayWidth = document.body.clientWidth;
    var maxHeight = document.body.clientHeight;

    var battleWidth = displayWidth;
    var battleHeight = battleWidth * _factor;
    if (battleHeight > maxHeight) {
        battleHeight = maxHeight;
        battleWidth = battleHeight / _factor;
    }

    _battleField.style.width = Math.floor(battleWidth) + 'px';
    _battleField.style.height = Math.floor(battleHeight) + 'px';
}

function onResize() {
    setGameSise();
    _mainContainer .resize();
}

const _config = {
    type: Phaser.AUTO,
    parent: _battleFieldContentId,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        init: function() {
            _phaser = this;
            _mainContainer.addModule(new BackgroundModule());
            _mainContainer.addModule(new PlayerModule());
            _mainContainer.addModule(new GhostBossModule());
            _mainContainer.addModule(new PowerScaleModule());
            _mainContainer.addModule(new BulletModule());
        },
        preload: function() {
            _mainContainer.preload();
        },
        create: function() {
            _mainContainer.create();

            window.addEventListener('resize', onResize);
            onResize();

            _phaser.time.addEvent({
                delay: 1000,
                callback: showBattleField
            });
        },
        update: function() {
            _mainContainer.update();
        }
    }
};

const _mainContainer = new MainContainer();
const _game = new Phaser.Game(_config);
let _phaser = null;
