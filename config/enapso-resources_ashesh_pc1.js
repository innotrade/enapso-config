// in this file only machine specific settings should be configured!

const { EnapsoResourcesConfig } = require('./enapso_resources');

class EnapsoResourcesAsheshPc1Config extends EnapsoResourcesConfig {
    constructor(data) {
        super(data);

        Object.assign(this.backend, {
            baseUrl: 'http://localhost:5000'
        });

        this.classes = ['http://ont.enapso.com/foundation#Resource'];
        this.path = '';
        this.baseURL = 'http://localhost:5000';

        this.user = {
            Email: 'ash@gmail.com',
            Password: 'secure'
        };

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
    getGlobalTarget() {
        return '';
    }
}

module.exports = {
    EnapsoResourcesAsheshPc1Config,
    config: EnapsoResourcesAsheshPc1Config
};
