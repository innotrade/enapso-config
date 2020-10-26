const { RootConfig } = require('./root_config');

class CompanyConfig extends RootConfig {
    constructor(data) {
        super(data);
        this.company = {
            name: 'Innotrade GmbH',
            address: 'An Vieslapp 29',
            city: 'Herzogenrath',
            zipcode: '52134',
            country: 'Germany',
            state: 'NRW'
        };
    }
}

module.exports = {
    CompanyConfig,
    config: CompanyConfig
};
