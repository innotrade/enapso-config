const { EnapsoApiConfig } = require('./enapso-api');

class EnapsoApiYasirPc2Config extends EnapsoApiConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoApiYasirPc2Config,
    config: EnapsoApiYasirPc2Config
};
