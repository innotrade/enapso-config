// here all ENAPSO configuration features are implemented
class EnapsoConfig {
    constructor(data) {
        this.vendor = 'ENAPSO Configuration Manager';
        this.version = '1.0';
    }
}

module.exports = {
    EnapsoConfig,
    config: EnapsoConfig
};
