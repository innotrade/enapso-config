const { EnapsoGraphDBAdminConfig } = require('./enapso-graphdb-admin');

class EnapsoGraphDBAdminYasirPc2Config extends EnapsoGraphDBAdminConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoGraphDBAdminYasirPc2Config,
    config: EnapsoGraphDBAdminYasirPc2Config
};
