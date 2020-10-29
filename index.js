// Innotrade Enapso - Hierarchical Enterprise Configuration Management
// (C) Copyright 2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

require('dotenv').config();
process.env.ENAPSO_CONFIG_FILE =
    process.env.ENAPSO_CONFIG_FILE || './config/enapso_config.js';
const config = new (require(process.env.ENAPSO_CONFIG_FILE).config)();
process.env.ENAPSO_CONFIG_MODE = process.env.ENAPSO_CONFIG_MODE || 'default';
config.setMode(process.env.ENAPSO_CONFIG_MODE);

global.encfg = {
    config,
    setMode: config.setMode,
    getPkgRef: config.getPkgRef
};

global.requireEx = config.getPkgRef;

module.exports = {
    config,
    setMode: config.setMode,
    getPkgRef: config.getPkgRef
};
