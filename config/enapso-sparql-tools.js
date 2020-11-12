const { DepartmentConfig } = require('./department_config');

class EnapsoSparqlToolsConfig extends DepartmentConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoSparqlToolsConfig,
    config: EnapsoSparqlToolsConfig
};
