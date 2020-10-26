// Innotrade Enapso - Hierarchical Enterprise Configuration Management
// (C) Copyright 2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

require('dotenv').config();
process.env.ENAPSO_CONFIG_FILE =
    process.env.ENAPSO_CONFIG_FILE || '/config/enapso_config.js';
const config = new (require(process.cwd() +
    process.env.ENAPSO_CONFIG_FILE).config)();

module.exports = {
    config
};
