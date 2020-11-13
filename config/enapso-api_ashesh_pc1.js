const { EnapsoApiConfig } = require('./enapso-api');

class EnapsoApiAsheshPc1Config extends EnapsoApiConfig {
    constructor(data) {
        super(data);

        // this.packages['@innotrade/enapso-orm']['dev'] = '@innotrade/enapso-orm';
    }
}

module.exports = {
    EnapsoApiAsheshPc1Config,
    config: EnapsoApiAsheshPc1Config
};
