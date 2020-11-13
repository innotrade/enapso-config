const { EnapsoApiConfig } = require('./enapso-api');

class EnapsoApiDockerServerConfig extends EnapsoApiConfig {
    constructor(data) {
        super(data);
        Object.assign(this.server, {
            redis_auth: '8crNXUMmxyRJJNvpkvRpCP79HCrrfY627QGUMJzv'
        });

        this.paths = {
            authentication:
                '../enapso-authentication/enapso-authenticationprovider',
            authorization:
                '../enapso-authorization/enapso-authorizationprovider'
        };
    }
}

module.exports = {
    EnapsoApiDockerServerConfig,
    config: EnapsoApiDockerServerConfig
};
