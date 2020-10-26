const { CompanyConfig } = require('./company_config');

class DepartmentConfig extends CompanyConfig {
    constructor(data) {
        super(data);
        this.company.department = 'Software & IT Consulting';
    }
}

module.exports = {
    DepartmentConfig,
    config: DepartmentConfig
};
