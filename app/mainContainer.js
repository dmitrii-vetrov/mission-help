class MainContainer {
    name = 'MainContainer';
    modules = [];

    constructor() {
        
    }

    addModule(module) {
        // if (!module.name) {
        //     console.warn(`${this.name}: Added Module not contains NAME property`);
        // }

        // for (let i = 0; i < this.modules.length; i++) {
        //     if(module.name === this.modules[i].name) {
        //         console.warn(`${this.name}: Module ${module.name} has already been  added`);
        //         return false;
        //     }
        // }

        this.modules.push(module);
    }

    preload() {
        this.modules.forEach((module) => {
            if (module.preload) {
                module.preload();
            }
        });
    }

    create() {
        this.modules.forEach((module) => {
            if (module.create) {
                module.create();
            }
        });
    }

    resize() {
        this.modules.forEach((module) => {
            if (module.resize) {
                module.resize();
            }
        });
    }

    update() {
        this.modules.forEach((module) => {
            if (module.update) {
                module.update();
            }
        });
    }

    getModuleByNamw(moduleName) {
        if (!moduleName) {
            console.warn(`${this.name}: ${moduleName} not defined`);

            return false;
        }

        for (let i = 0; i < this.modules.length; i++) {
            if(moduleName === this.modules[i].name) {
                return this.modules[i];
            }
        }
        
        console.warn(`${this.name}: ${moduleName} not found`);
    }
}
