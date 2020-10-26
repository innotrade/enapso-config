# ENAPSO&#x26A1;boost - Hierarchical Enterprise Configuration Management

The `.env` file in the project root folder just requires a single reference to the configuration file in the form:

```
ENAPSO_CONFIG_FILE = [path_to_config_file]
```

## Example

```
ENAPSO_CONFIG_FILE = /git/enapso-config/config/extjs_assistant_alex_imac.js
```

## Installation

Just import the `@innotrade/enapso-config` package as follows:

```
npm i @innotrade/enapso-config --save
```

## Usage

Just require the `@innotrade/enapso-config` package as follows:

```javascript
const { config } = new require('@innotrade/enapso-config');
```

and use it where ever you need, with fields or as entire object:

```javascript
console.log(config.getApplicationString());
console.log(config.getCopyrightString());

const instance = new mynamespace.MyClass(
    {
        appName: config.generator.appName,
        modelName: 'hardcoded'
    },
    config
);
```
