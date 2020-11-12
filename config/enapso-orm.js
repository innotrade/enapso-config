const { DepartmentConfig } = require('./department_config');

class EnapsoOrmConfig extends DepartmentConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoOrmConfig,
    config: EnapsoOrmConfig
};
