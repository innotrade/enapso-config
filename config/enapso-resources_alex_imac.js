// in this file only machine specific settings should be configured!

const { EnapsoResourcesConfig } = require('./enapso-resources');

class EnapsoResourcesAlexMbp2Config extends EnapsoResourcesConfig {
    constructor(data) {
        super(data);
        Object.assign(this.backend, {
            baseUrl: 'http://192.168.2.238:3000'
        });

        this.generator.outputFolder = '/git/enapso-resources/out';
    }
}

module.exports = {
    EnapsoResourcesAlexMbp2Config,
    config: EnapsoResourcesAlexMbp2Config
};
