// Innotrade Enapso - ENAPSO Enterprise Configuration Management
// (C) Copyright 2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// this is the ENAPSO internal configuration file
// here only ENAPSO specific features for the configuration management are implemented
// this includes but is not limited to convenience methods to manage configurations,
// e.g. to query or to merge configuration files
// usually, this file is not maintained by developers,
// tenant specific implementations should be made in the root_config.js

class EnapsoConfig {
    static MODE_DEFAULT = 'default';
    static MODE_DEV = 'dev';
    static MODE_PROD = 'prod';
    static MODE_STAGE = 'stage';
    static SUPPORTED_MODES = [
        EnapsoConfig.MODE_DEFAULT,
        EnapsoConfig.MODE_DEV,
        EnapsoConfig.MODE_PROD,
        EnapsoConfig.MODE_STAGE
    ];

    constructor(data) {
        this.vendor = 'ENAPSO Configuration Manager';
        this.version = '1.0.0';
        this.$mode = 'default';
        this.$options = {
            logDefaultUsed: true
        };
    }

    setMode(mode) {
        // if a valid mode is passed set that and return true for success,
        // otherwise ignore it and return false
        if (EnapsoConfig.SUPPORTED_MODES.indexOf(mode) >= 0) {
            this.$mode = mode;
            return true;
        }
        return false;
    }

    getMode() {
        // return the currently active mode
        return this.$mode;
    }

    getModeConfig(obj, field, defaultValue) {}

    getConfig(path, defaultValue, options) {
        // return a configuration setting specified by its path
        // or the default value if the setting does not exist
        const parts = path.split('.');
        let value = defaultValue;
        let obj = this.config;
        while (parts && parts.length > 0) {
            const field = parts.shift();
            value = obj[field];
            if (value === undefined) {
                if (this.$options.logDefaultUsed) {
                    console.warn(
                        'ENAPSO Config: Using default ' +
                            defaultValue +
                            ' for ' +
                            path
                    );
                }
                break;
            }
            obj = obj[field];
        }
        return value !== undefined ? value : defaultValue;
    }

    getPkgRef(pkgRef) {
        // if a valid mode is selected and a package for that mode is configured
        // then return it, otherwise return the passed default package identifier.
        if (encfg.$mode && pkgRef && encfg.packages && encfg.packages[pkgRef]) {
            return encfg.packages[pkgRef][encfg.$mode];
        }
        return pkgRef;
    }

    requireEx(pkgRef) {
        const configuredPkgRef = encfg.getPkgRef(pkgRef);
        let module;
        try {
            // try to load module
            module = require(configuredPkgRef);
        } catch (err) {
            // if alternative module path is found try to load that
            // otherwise just report appropriate error
            if (configuredPkgRef === pkgRef) {
                console.warn(
                    'ENAPSO Config: ' + configuredPkgRef + ' not found.'
                );
            } else {
                try {
                    module = require(pkgRef);
                    console.warn(
                        'ENAPSO Config: ' +
                            configuredPkgRef +
                            ' not found, using default ' +
                            pkgRef +
                            '.'
                    );
                } catch (err) {
                    console.error(
                        'ENAPSO Config: Neither ' +
                            configuredPkgRef +
                            ' nor ' +
                            pkgRef +
                            ' found.'
                    );
                }
            }
        }
        return module;
    }
}

module.exports = {
    EnapsoConfig,
    config: EnapsoConfig
};
