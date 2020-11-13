// ENAPSO Enterprise Configuration Management
// (C) Copyright 2020 Innotrade GmbH, Herzogenrath, NRW, Germany
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
            },
            '@innotrade/enapso-js-tools': {
                dev: path.normalize(module.path + '/../../enapso-js-tools')
            },
            '@innotrade/enapso-graphdb-client': {
                dev: path.normalize(
                    module.path + '/../../enapso-graphdb-client'
                )
            },
            '@innotrade/enapso-graphdb-admin': {
                dev: path.normalize(module.path + '/../../enapso-graphdb-admin')
            },
            '@innotrade/enapso-orm': {
                dev: path.normalize(module.path + '/../../enapso-orm')
            },
            '@innotrade/enapso-sparql-tools': {
                dev: path.normalize(module.path + '/../../enapso-sparql-tools')
            }
        };
    }
}

module.exports = {
    DepartmentConfig,
    config: DepartmentConfig
};
