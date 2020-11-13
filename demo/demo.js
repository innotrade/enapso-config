// Innotrade Enapso - ENAPSO Enterprise Configuration Management
// (C) Copyright 2020 Innotrade GmbH, Herzogenrath, NRW, Germany
// Author: Alexander Schulze

require('../index.js');
requireEx('@InvalidScope/InvalidPackage');
requireEx('@myScope/myPackage');

console.log(encfg.getApplicationString());
console.log(encfg.getCopyrightString('2020', '2020'));
console.log(
    'Reading myDefaultConfig.myDefaultSetting: ' +
        encfg.getConfig('myDefaultConfig.myDefaultSetting', 'myDefaultValue')
);
console.log(
    'Reading myDefaultConfig.myDefaultSetting2: ' +
        encfg.getConfig(
            'myDefaultConfig.myDefaultSetting2',
            'Resulting in myDefaultValue2'
        )
);

let val;

// switching to production mode
encfg.setMode(encfg.MODE_PROD);
val = encfg.getConfig('myModeConfig.switch1', 'Resulting in defaultValue');
console.log('(mode: ' + encfg.getMode() + '): ' + val);

// switching to development mode
encfg.setMode(encfg.MODE_PROD);
val = encfg.getConfig('myModeConfig.switch1', 'Resulting in defaultValue');
console.log('(mode: ' + encfg.getMode() + '): ' + val);

// switching to default mode
encfg.setMode(encfg.MODE_DEFAULT);
val = encfg.getConfig('myModeConfig.switch1', 'Resulting in defaultValue');
console.log('(mode: ' + encfg.getMode() + '): ' + val);
