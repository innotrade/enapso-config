const { EnapsoOrmConfig } = require('./enapso-orm');

class EnapsoOrmYasirPc2Config extends EnapsoOrmConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoOrmYasirPc2Config,
    config: EnapsoOrmYasirPc2Config
};
