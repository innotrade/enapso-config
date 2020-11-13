const { DepartmentConfig } = require('./department_config');

class EnapsoApiConfig extends DepartmentConfig {
    constructor(data) {
        super(data);

        this.server = {
            redis_host: 'localhost',
            redis_port: '6379',
            server_port: '5000'
        };

        this.database = {
            url: 'http://localhost:7200',
            schema: 'Test',
            user: 'testadmin',
            pass: 'testadmin'
        };

        this.paths = {
            authentication:
                '../enapso-authentication/dev-enapso-authenticationprovider',
            authorization:
                '../enapso-authorization/dev-enapso-authorizationprovider'
        };
    }
}

module.exports = {
    EnapsoApiConfig,
    config: EnapsoApiConfig
};
