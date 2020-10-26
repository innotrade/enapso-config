const { DepartmentConfig } = require('./department_config');

class DemoAppConfig extends DepartmentConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    DemoAppConfig,
    config: DemoAppConfig
};
