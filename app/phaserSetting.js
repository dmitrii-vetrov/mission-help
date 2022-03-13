const _battleFieldId = 'js-battlefield';
const _battleFieldContentId = _battleFieldId + '-content';
const _factor = 0.75;
const _battleField = document.getElementById(_battleFieldId);
const _hiddenClass = 'battlefield_preload';
const _preloaderText = document.getElementById('js-preloader-text-1');

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

const _backgroundModule = new BackgroundModule();
const _playerModule = new PlayerModule();
const _ghostBossModule = new GhostBossModule();
const _powerScaleModule = new PowerScaleModule();
const _bulletModule = new BulletModule();

const _config = {
    type: Phaser.AUTO,
    parent: _battleFieldContentId,
    physics: {
        default: 'arcade'
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        init: function() {
            _phaser = this;
            _mainContainer.addModule(_backgroundModule);
            _mainContainer.addModule(_playerModule);
            _mainContainer.addModule(_ghostBossModule);
            _mainContainer.addModule(_powerScaleModule);
            _mainContainer.addModule(_bulletModule);
        },
        preload: function() {
            _mainContainer.preload();
        },
        create: function() {
            _mainContainer.create();

            window.addEventListener('resize', onResize);
            onResize();

            // _preloaderText.addEventListener('animationend', () => {
                _phaser.time.addEvent({
                    delay: 600,
                    callback: showBattleField
                });
            // });
        },
        update: function() {
            _mainContainer.update();
        }
    }
};

const _mainContainer = new MainContainer();
const _game = new Phaser.Game(_config);
let _phaser = null;
