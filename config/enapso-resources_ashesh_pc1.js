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
            ],
            iri: 'http://ont.enapso.com/foundation#00a5e37f_3452_4b48',
            createRecord: {
                iri: 'http://ont.enapso.com/foundation#00a5e37f_3452_4b48',
                name: 'New Test Company',
                uuid: '12345tyuiigfds',
                dataId: 'hgfdsdddddd',
                hash: 'Tqwerhvh',
                rights: 'rwx',
                code: 'function(option){console.log(option)}',
                user: 'jnhgtresss',
                hasCapabilities:
                    'enf:Capability_00a5e37f_3452_4b48_8a0a_3089dc41ef47',
                hasAttributes:
                    'http://ont.enapso.com/foundation#Attribute_5ed0a3d9_a801_4c4b_a072_578090f60353',
                hasBehavior:
                    'http://ont.enapso.com/foundation#Behavior_03e35a1d_5dd2_44fd_a596_908a1474dec8'
            },
            updateRecord: {
                iri: 'http://ont.enapso.com/foundation#00a5e37f_3452_4b48',
                name: 'New Test Company',
                uuid: '12345tyuiigfds',
                dataId: 'hgfdsdddddd',
                hash: 'Tqwerhvh',
                rights: 'rwx',
                code: 'function(option){console.log(option)}',
                user: 'jnhgtresss',
                hasCapabilities:
                    'enf:Capability_00a5e37f_3452_4b48_8a0a_3089dc41ef47',
                hasAttributes:
                    'http://ont.enapso.com/foundation#Attribute_5ed0a3d9_a801_4c4b_a072_578090f60353',
                hasBehavior:
                    'http://ont.enapso.com/foundation#Behavior_03e35a1d_5dd2_44fd_a596_908a1474dec8'
            },
            filter: [
                {
                    key: '$sparql',
                    value:
                        'regEx(str(?ind), "http://ont.enapso.com/foundation#Resource_124ccf70_38eb_4ca0_9f7e_380c65a5a36e", "i")'
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
