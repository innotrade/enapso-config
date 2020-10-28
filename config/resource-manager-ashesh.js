const { DepartmentConfig } = require('./department_config');

class ResourceManagerAshesh extends DepartmentConfig {
    constructor(data) {
        super(data);
        this.baseURL = 'http://localhost:5000';
        this.user = {
            Email: 'ash@gmail.com',
            Password: 'secure'
        };

        this.ontology = {
            path: '../ontology/EnapsoFoundation.owl',
            format: 'application/rdf+xml',
            baseIRI: 'http://ont.enapso.com/auth#',
            context: 'http://ont.enapso.com/auth',
            cls: 'http://ont.enapso.com/foundation#Resource',
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
        this.classes = ['http://ont.enapso.com/foundation#Resource'];
        this.path = '';
        this.baseURL = 'http://localhost:5000';
    }
}

module.exports = {
    ResourceManagerAshesh,
    config: ResourceManagerAshesh
};
