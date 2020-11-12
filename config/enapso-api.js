const { DepartmentConfig } = require('./department_config');

class EnapsoApiConfig extends DepartmentConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoApiConfig,
    config: EnapsoApiConfig
};
