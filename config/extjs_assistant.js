const { DepartmentConfig } = require('./department_config');

class ExtJsAssistantConfig extends DepartmentConfig {
    constructor(data) {
        super(data);
        this.application = {
            name: 'ENAPSO\u26A1boost - ExtJS-Assistant',
            version: '1.0.0',
            copyrightFrom: '2019',
            copyrightTo: '2020'
        };

        this.backend = {
            baseUrl: 'http://localhost:3000',
            apiPath: '/api/enapso/objects/v1'
        };

        this.client = {
            proxy: {
                idParam: 'iri',
                reader: {
                    rootProperty: 'records'
                },
                writer: {
                    rootProperty: 'records'
                }
            }
        };

        this.generator = {
            appName: 'MyApp',
            globalTarget: this.getGlobalTarget(),
            modelTarget: `${this.getGlobalTarget()}/model`,
            storeTarget: `${this.getGlobalTarget()}/store`,
            viewTarget: `${this.getGlobalTarget()}/view`,
            fileHeader: `/* --------------------------------------------------------------
 * ENAPSO\u26A1boost auto-generated file, do not modify manually!
 * -------------------------------------------------------------- */\n\n`
        };
    }

    getGlobalTarget() {
        throw new Error(
            "Global Target needs to be implemented in developer machine's specific config.js"
        );
    }
}

module.exports = {
    ExtJsAssistantConfig,
    config: ExtJsAssistantConfig
};
