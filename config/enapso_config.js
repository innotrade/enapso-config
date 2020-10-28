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
    }
}

module.exports = {
    EnapsoConfig,
    config: EnapsoConfig
};
