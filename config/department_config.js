// Innotrade Enapso - ENAPSO Enterprise Configuration Management
// (C) Copyright 2019-2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// here only configurations across an entire department are implemented

const { CompanyConfig } = require('./company_config');
var path = require('path');

class DepartmentConfig extends CompanyConfig {
    constructor(data) {
        super(data);
        this.company.department = 'Software & IT Consulting';

        this.packages = {
            '@innotrade/enapso-jsast': {
                dev: path.normalize(module.path + '/../../enapso-jsast')
            }
        };
    }

    getPkgRef(pkgRef) {
        if (
            this.config.mode === 'dev' &&
            pkgRef &&
            this.config.packages &&
            this.config.packages[pkgRef]
        ) {
            return this.config.packages[pkgRef][this.config.mode];
        }
        return pkgRef;
    }
}

module.exports = {
    DepartmentConfig,
    config: DepartmentConfig
};
