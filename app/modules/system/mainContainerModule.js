class MainContainer {
    modules = [];

    constructor() {
        
    }

    addModule(module) {
        if(this.modules.indexOf(module) === -1) {
            this.modules.push(module);
        }
    }

    preload() {
        this.modules.forEach((module) => {
            if (module.preload) {
                module.preload();
            }
        })
    }

    create() {
        this.modules.forEach((module) => {
            if (module.create) {
                module.create();
            }
        })
    }

    update() {
        this.modules.forEach((module) => {
            if (module.update) {
                module.update();
            }
        })
    }
}
