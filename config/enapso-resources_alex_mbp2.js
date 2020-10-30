// in this file only machine specific settings should be configured!

const { EnapsoResourcesConfig } = require('./enapso-resources');

class EnapsoResourcesAlexMbp2Config extends EnapsoResourcesConfig {}

module.exports = {
    EnapsoResourcesAlexMbp2Config,
    config: EnapsoResourcesAlexMbp2Config
};
