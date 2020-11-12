// Innotrade Enapso - ENAPSO Enterprise Configuration Management
// (C) Copyright 2019-2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

require('../index.js');

console.log(encfg.config.getCopyrightString('2020', '2020'));
console.log(encfg.getConfig('sparqlEndpoint.baseUrl', 'http://localhost:7200'));
