// Innotrade Enapso - ENAPSO Enterprise Configuration Management
// (C) Copyright 2019-2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// this is the root configuration file across all entities
// here only vendor, platform, developer and machine independant configurations should be maintained

const { EnapsoConfig } = require('./enapso_config');

class RootConfig extends EnapsoConfig {
    constructor(data) {
        super(data);
        this.company = {
            name: '[Company Name]',
            address: '[Company Address]',
            city: '[Company City]',
            zipcode: '[Company Zipcode]',
            country: '[Company Country]',
            state: '[Company State]'
        };
        this.application = {
            name: '[Application Name]',
            version: '[Application Version]',
            copyrightFrom: '[Copyright From]',
            copyrightTo: '[Copyright To]'
        };
    }

    getApplicationString() {
        return this.application.name + ' ' + this.application.version;
    }

    getCopyrightString(fromString, toString) {
        const res =
            '(C) Copyright ' +
            (fromString ? fromString : this.application.copyrightFrom) +
            '-' +
            (toString ? toString : this.application.copyrightTo) +
            ' ' +
            this.company.name +
            ', ' +
            this.company.city +
            ', ' +
            this.company.state +
            ', ' +
            this.company.country;
        return res;
    }
}

module.exports = {
    RootConfig,
    config: RootConfig
};
