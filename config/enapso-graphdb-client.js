const { DepartmentConfig } = require('./department_config');

class EnapsoGraphDBClientConfig extends DepartmentConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoGraphDBClientConfig,
    config: EnapsoGraphDBClientConfig
};
