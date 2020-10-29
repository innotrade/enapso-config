const { EnapsoWsHubConfig } = require('./enapso-wshub');

class EnapsoWsHubAsheshPc1Config extends EnapsoWsHubConfig {
    constructor(data) {
        super(data);

        this.devConfig = {
            resourcePath: '../../enapso-resources/index'
        };
    }
}

module.exports = {
    EnapsoWsHubAsheshPc1Config,
    config: EnapsoWsHubAsheshPc1Config
};
