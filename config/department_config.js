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
            },
            '@innotrade/enapso-resources': {
                dev: path.normalize(module.path + '/../../enapso-resources')
            },
            '@innotrade/enapso-wshub': {
                dev: path.normalize(module.path + '/../../enapso-wshub')
            }
        };
    }

    getPkgRef(pkgRef) {
        // TODO: CHECK THAT!
        encfg.config.mode = 'dev';

        if (
            encfg.config.mode === 'dev' &&
            pkgRef &&
            encfg.config.packages &&
            encfg.config.packages[pkgRef]
        ) {
            return encfg.config.packages[pkgRef][encfg.config.mode];
        }
        return pkgRef;
    }

    requireEx(pkgRef) {
        pkgRef = encfg.config.getPkgRef(pkgRef);
        return require(pkgRef);
    }
}

module.exports = {
    DepartmentConfig,
    config: DepartmentConfig
};
