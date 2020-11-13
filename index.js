// Innotrade Enapso - Hierarchical Enterprise Configuration Management
// (C) Copyright 2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

// to use local .env file
require('dotenv').config();

process.env.ENAPSO_CONFIG_FILE =
    process.env.ENAPSO_CONFIG_FILE || './config/enapso_config.js';

// load the configuration from the user, application or machine specific config file
const config = new (require(process.env.ENAPSO_CONFIG_FILE).config)();

// set the configuration mode
process.env.ENAPSO_CONFIG_MODE = process.env.ENAPSO_CONFIG_MODE || 'default';
config.setMode(process.env.ENAPSO_CONFIG_MODE);

const encfg = config;
encfg.config = config;

// publish the global encfg instance
global.encfg = encfg;

// publish requireEx to global scope for convenience
global.requireEx = config.requireEx;

// and export the loaded configuration object
module.exports = {
    config
};
