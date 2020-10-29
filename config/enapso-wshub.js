const { DepartmentConfig } = require('./department_config');

class EnapsoWsHubConfig extends DepartmentConfig {
    constructor(data) {
        super(data);

        this.devConfig = {
            resourcePath: '../enapso-resources/index'
        };

        this.prodConfig = {
            resourcePath: '@innotrade/enapso-resources'
        };
    }

    getAppConfig() {
        return this.devConfig;
    }
}

module.exports = {
    EnapsoWsHubConfig,
    config: EnapsoWsHubConfig
};
