const { EnapsoWsHubConfig } = require('./enapso-wshub');

class EnapsoWsHubAlexIMacConfig extends EnapsoWsHubConfig {
    constructor(data) {
        super(data);

        this.devConfig = {
            resourcePath: '/git/enapso-resources/index'
        };
    }
}

module.exports = {
    EnapsoWsHubAlexIMacConfig,
    config: EnapsoWsHubAlexIMacConfig
};
