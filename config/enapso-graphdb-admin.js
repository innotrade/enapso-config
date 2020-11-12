const { DepartmentConfig } = require('./department_config');

class EnapsoGraphDBAdminConfig extends DepartmentConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoGraphDBAdminConfig,
    config: EnapsoGraphDBAdminConfig
};
