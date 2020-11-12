const { EnapsoSparqlToolsConfig } = require('./enapso-sparql-tools');

class EnapsoSparqlToolsYasirPc2Config extends EnapsoSparqlToolsConfig {
    constructor(data) {
        super(data);
    }
}

module.exports = {
    EnapsoSparqlToolsYasirPc2Config,
    config: EnapsoSparqlToolsYasirPc2Config
};
