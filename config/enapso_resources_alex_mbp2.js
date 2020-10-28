// in this file only machine specific settings should be configured!

const { EnapsoResourcesConfig } = require('./enapso_resources');

class EnapsoResourcesAlexMbp2Config extends EnapsoResourcesConfig {
    getGlobalTarget() {
        return '/System/Volumes/Data/git/enapso-frontend/Modern/res';
    }
}

module.exports = {
    EnapsoResourcesAlexMbp2Config,
    config: EnapsoResourcesAlexMbp2Config
};
