// this is the root config file
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
