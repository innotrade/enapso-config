// Innotrade Enapso - ENAPSO Enterprise Configuration Management
// (C) Copyright 2019-2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// this is the ENAPSO internal configuration file
// here only ENAPSO specific features for the configuration management are implemented
// this includes but is not limited to convenience methods to manage configurations,
// e.g. to query or to merge configuration files
// usually, this file is not maintained by developers,
// tenant specific implementations should be made in the root_config.js

class EnapsoConfig {
    constructor(data) {
        this.vendor = 'ENAPSO Configuration Manager';
        this.version = '1.0';

        this.mode = 'default';
    }

    setMode(mode) {
        if (mode === 'dev' || mode === 'default') {
            this.mode = mode;
            return true;
        }
        return false;
    }

    getConfig(path, defaultValue) {
        const parts = path.split('.');
        let value = defaultValue;
        let obj = this.config;
        while (parts.length > 0) {
            const field = parts.shift();
            value = obj[field];
            if (value === undefined) {
                break;
            }
            obj = obj[field];
        }
        return value !== undefined ? value : defaultValue;
    }
}

module.exports = {
    EnapsoConfig,
    config: EnapsoConfig
};
