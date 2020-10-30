// in this file only machine specific settings should be configured!

const { EnapsoResourcesConfig } = require('./enapso-resources');

class EnapsoResourcesAsheshPc1Config extends EnapsoResourcesConfig {
    constructor(data) {
        super(data);

        Object.assign(this.backend, {
            baseUrl: 'http://localhost:5000'
        });

        this.user = {
            Email: 'ash@gmail.com',
            Password: 'secure'
        };
    }
}

module.exports = {
    EnapsoResourcesAsheshPc1Config,
    config: EnapsoResourcesAsheshPc1Config
};
