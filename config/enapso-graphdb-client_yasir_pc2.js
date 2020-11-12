const { EnapsoGraphDBClientConfig } = require('./enapso-graphdb-client');

class EnapsoGraphDBClientYasirPc2Config extends EnapsoGraphDBClientConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoGraphDBClientYasirPc2Config,
    config: EnapsoGraphDBClientYasirPc2Config
};
