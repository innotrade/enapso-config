// Innotrade Enapso - ENAPSO Enterprise Configuration Management
// (C) Copyright 2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

const { DepartmentConfig } = require('./department_config');

class EnapsoConfigDemoConfig extends DepartmentConfig {
    constructor(data) {
        super(data);
        this.application = {
            name: 'ENAPSO\u26A1boost - Configuration Demo',
            version: '1.0.0',
            copyrightFrom: '2020',
            copyrightTo: '2020'
        };

        this.packages['@myScope/myPackage'] = {
            dev: '/git/myPackage'
        };

        this.myDefaultConfig = {
            myDefaultSetting:
                'Configured value for myDefaultConfig.myDefaultSetting'
        };

        this.myModeConfig = {
            myModeSetting: 'String value for myDefaultConfig.myDefaultSetting',
            switch1: {
                $default: 'switch1 default',
                $dev: 'switch1 in dev mode',
                $prod: 'switch1 in dev production mode'
            }
        };

        this.myAccessToken = process.env.MY_PERSONAL_ACCESS_TOKEN;
    }
}

module.exports = {
    EnapsoConfigDemoConfig,
    config: EnapsoConfigDemoConfig
};
