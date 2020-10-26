// in this file only machine specific settings should be configured!

const { ExtJsAssistantConfig } = require('./extjs_assistant');

class ExtJsAssistantAlexMbp2Config extends ExtJsAssistantConfig {
    getGlobalTarget() {
        return '/System/Volumes/Data/git/enapso-frontend/Modern/res';
    }
}

module.exports = {
    ExtJsAssistantAlexMbp2Config,
    config: ExtJsAssistantAlexMbp2Config
};
