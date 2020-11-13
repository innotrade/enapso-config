const { DepartmentConfig } = require('./department_config');

class EnapsoResourcesConfig extends DepartmentConfig {
    constructor(data) {
        super(data);
        this.application = {
            name: 'ENAPSO\u26A1boost - Resource Manager',
            version: '1.0.0',
            copyrightFrom: '2019',
            copyrightTo: '2020'
        };

        this.backend = {
            baseUrl: 'http://localhost:3000',
            apiPath: '/api/enapso/objects/v1'
        };

        this.generator = {
            outputFolder: process.cwd() + '/out',
            fileHeader: `/* --------------------------------------------------------------
 * ENAPSO\u26A1boost auto-generated file, do not modify manually!
 * -------------------------------------------------------------- */\n\n`
        };

        this.classes = [
            'http://ont.enapso.com/foundation#Resource',
            'http://ont.enapso.com/foundation#Entity'
        ];

        this.ontology = {
            path: '../ontology/EnapsoFoundation.owl',
            format: 'application/rdf+xml',
            baseIRI: 'http://ont.enapso.com/foundation#',
            context: 'http://ont.enapso.com/foundation',
            cls: 'http://ont.enapso.com/foundation#Resource',
            schema: 'Test',
            joins: [
                {
                    cls: 'http://ont.enapso.com/foundation#Capability',
                    master2childRelation:
                        'http://ont.enapso.com/foundation#hasCapabilities',
                    joins: [
                        {
                            cls: 'http://ont.enapso.com/foundation#Argument',
                            master2childRelation:
                                'http://ont.enapso.com/foundation#hasArgument'
                        }
                    ]
                },
                {
                    cls: 'http://ont.enapso.com/foundation#Attribute',
                    master2childRelation:
                        'http://ont.enapso.com/foundation#hasAttributes',
                    joins: [
                        {
                            cls: 'http://ont.enapso.com/foundation#Argument',
                            master2childRelation:
                                'http://ont.enapso.com/foundation#hasArgument'
                        }
                    ]
                },
                {
                    cls: 'http://ont.enapso.com/foundation#Behavior',
                    master2childRelation:
                        'http://ont.enapso.com/foundation#hasBehavior',
                    joins: [
                        {
                            cls:
                                'http://ont.enapso.com/foundation#EventEmitter',
                            master2childRelation:
                                'http://ont.enapso.com/foundation#hasEventEmitter',
                            joins: [
                                {
                                    cls:
                                        'http://ont.enapso.com/foundation#Event',
                                    master2childRelation:
                                        'http://ont.enapso.com/foundation#hasEvent'
                                }
                            ]
                        },
                        {
                            cls:
                                'http://ont.enapso.com/foundation#EventListener',
                            master2childRelation:
                                'http://ont.enapso.com/foundation#hasEventListener',
                            joins: [
                                {
                                    cls:
                                        'http://ont.enapso.com/foundation#Event',
                                    master2childRelation:
                                        'http://ont.enapso.com/foundation#hasEvent'
                                },
                                {
                                    cls:
                                        'http://ont.enapso.com/foundation#Argument',
                                    master2childRelation:
                                        'http://ont.enapso.com/foundation#hasArgument'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
}

module.exports = {
    EnapsoResourcesConfig,
    config: EnapsoResourcesConfig
};
