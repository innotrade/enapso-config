const { EnapsoServerBootConfig } = require('./enapso-server-boot');

class EnapsoServerBootAsheshPc1Config extends EnapsoServerBootConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoServerBootAsheshPc1Config,
    config: EnapsoServerBootAsheshPc1Config
};
