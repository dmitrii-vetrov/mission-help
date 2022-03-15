function liveFactory(target, imageKey, count) {
    const width = 50;
    const scale = 0.35;
    const container = _phaser.add.container();
    const containerInner = _phaser.add.container();

    let a = 0;
    for (let i = 0; i < count; i++) {
        var sprite = _phaser.add.sprite(i * (width * scale), 0, imageKey).setOrigin(0, 0.5);
        sprite.setScale(width * scale / sprite.frame.width);
        containerInner.x -= (sprite.width * scale) / 2;
        a -= (sprite.width * scale) / 2;
        containerInner.add(sprite);
    }

    container.add(containerInner);

    return {
        container: container,
        containerInner: containerInner,
        totalLives: count,
        currentLlives: count,
        decrement: function(count) {
            const firstIndex = this.currentLlives - count;
            this.currentLlives -= count;

            let i = 0;
            this.containerInner.each((child) => {
                if (i >= firstIndex) {
                    child.alpha = 0;
                }

                i++;
            });
        },
        updatePosition: function() {
            this.container.x = target.x;
            this.container.y = target.y - (target.height * target.scaleY) / 1.7;
        }
    };
}