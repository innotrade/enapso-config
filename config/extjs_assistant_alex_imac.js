// in this file only machine specific settings should be configured!

const { ExtJsAssistantConfig } = require('./extjs_assistant');

class ExtJsAssistantAlexMbp2Config extends ExtJsAssistantConfig {
    constructor(data) {
        super(data);
        Object.assign(this.backend, {
            baseUrl: 'http://192.168.2.238:3000'
        });
    }

    getGlobalTarget() {
        return '/git/enapso-frontend/Modern/res';
    }
}

module.exports = {
    ExtJsAssistantAlexMbp2Config,
    config: ExtJsAssistantAlexMbp2Config
};
